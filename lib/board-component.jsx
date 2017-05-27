const React = require('react');
const PropTypes = require('prop-types');
const Hammer = require('react-hammerjs');
const {INPUT_MOVE, INPUT_END} = require('hammerjs');
const Measure = require('react-measure');
const color = require('color');
const Path = require('svg-path-generator');
const assert = require('assert');
const Board = require('./board');
const BlockComponent = require('./block-component');
const {id} = require('./util');
const {BLOCK_SIZE} = require('./constants');

const inputColors = [
	color('#de3131'), // red
	color('#4527a8'), // blue
	color('#1c6925'), // green
	color('#db40cd'), // pink
];

class BoardComponent extends React.Component {
	static propTypes = {
		status: PropTypes.string.isRequired,
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		clockLimit: PropTypes.number.isRequired,
		inputX: PropTypes.arrayOf(PropTypes.number).isRequired,
		outputX: PropTypes.number.isRequired,
		input: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))).isRequired,
		currentInput: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
		output: PropTypes.arrayOf(PropTypes.number).isRequired,
		onClickBlock: PropTypes.func.isRequired,
		onOutput: PropTypes.func.isRequired,
		onHalt: PropTypes.func.isRequired,
	}

	static defaultProps = {
		currentInput: null,
	}

	constructor(props, state) {
		super(props, state);

		// Currently, initial status should be always 'stop'
		assert(props.status === 'stop');

		this.board = new Board({
			height: this.props.height,
			width: this.props.width,
			clockLimit: this.props.clockLimit,
			inputX: this.props.inputX,
			outputX: this.props.outputX,
		}, this.blockSize);

		this.board.on('output', this.handleBoardOutput);

		this.passAnimationResolvers = new WeakMap();

		if (typeof this.props.inputX === 'number') {
			this.inputBlockX = [this.props.inputX];
		} else {
			this.inputBlockX = this.props.inputX;
		}
		this.inputBlockY = 0;
		this.outputBlockX = this.props.outputX;
		this.outputBlockY = this.props.height - 1;

		this.animations = [];

		this.backgroundDimensions = null;

		this.state = {
			blocks: this.board.getBlocks(),
			clocks: this.board.clocks,
			showClockLimit: false,
			showDataLimit: false,
			isPanning: false,
			panDistance: 0,
			panAngle: 0,
			pinchCenterX: 0,
			pinchCenterY: 0,
			scale: 1,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.status === 'stop') {
			assert(nextProps.status === 'executing');
			this.execute(nextProps.currentInput);
		}

		if (this.props.status === 'executing') {
			if (nextProps.status === 'stop') {
				this.halt();
			}
		}
	}

	get inputBlock() {
		return this.inputBlockX.map((x) => this.getBlock(x, this.inputBlockY));
	}

	get outputBlock() {
		return this.getBlock(this.outputBlockX, this.outputBlockY);
	}

	getBlock(x, y) {
		return this.board.getBlock(x, y);
	}

	placeBlock({x, y, type, rotate}) {
		this.board.placeBlock({x, y, type, rotate});
		this.setState({
			blocks: this.board.getBlocks(),
		});
	}

	execute(value) {
		this.board.input(value);
		this.clockUp();
	}

	halt() {
		this.board.halt();
	}

	clockUp = async () => {
		const passAnimations = [];

		this.board.step({
			onPass: (passEvent) => {
				passAnimations.push(new Promise((resolve) => {
					this.passAnimationResolvers.set(passEvent, resolve);
				}));
			},
		});

		this.setState({
			clocks: this.board.clock,
		});

		if (this.board.status !== 'executing') {
			return;
		}

		await Promise.all(passAnimations);

		this.board.hand();

		if (this.board.status !== 'executing') {
			return;
		}

		if (this.board.clock >= this.board.clockLimit) {
			this.board.halt();

			this.setState({
				showClockLimit: true,
			});

			return;
		}

		if (this.board.dataCount > 100) {
			this.board.halt();

			this.setState({
				showDataLimit: true,
			});

			return;
		}

		this.clockUp();
	}

	handleBoardOutput = (value) => {
		this.props.onOutput(value);
	}

	handleClickBlock = (event, x, y) => {
		event.preventDefault();
		return this.props.onClickBlock({x, y, type: event.type});
	}

	handlePassAnimationComplete = (passEvent) => {
		if (this.passAnimationResolvers.has(passEvent)) {
			this.passAnimationResolvers.get(passEvent)();
		}
	}

	handlePan = (event) => {
		event.preventDefault();

		if (event.eventType === INPUT_MOVE) {
			this.setState({
				isPanning: true,
				panDistance: event.distance,
				panAngle: event.angle,
			});
		} else if (event.eventType === INPUT_END) {
			// TODO
		}
	}

	handlePinch = (event) => {
		event.preventDefault();

		if (event.eventType === INPUT_MOVE) {
			this.setState({
				scale: event.scale,
			});
		} else if (event.eventType === INPUT_END) {
			// TODO
		}
	}

	handleWheel = (event) => {
		const direction = (event.deltaY > 0) ? -1 : 1;

		this.setState({
			scale: this.state.scale * (1.0 + 0.1 * direction),
		});
	}

	handleDragStart = (event) => {
		event.preventDefault();
	}

	handleMeasureBackground = (dimensions) => {
		this.backgroundDimensions = dimensions;
	}

	getViewBox = () => {
		const borderSize = 25;
		const inputHeight = 120;
		const outputHeight = 170;
		const boardWidth = this.props.width * BLOCK_SIZE;
		const boardHeight = this.props.height * BLOCK_SIZE;
		const boardOuterWidth = borderSize * 2 + boardWidth;
		const boardOuterHeight = borderSize * 2 + boardHeight;

		if (this.state.isPanning) {
			let scale = 1;

			if (this.backgroundDimensions !== null) {
				scale = this.props.width * BLOCK_SIZE / this.backgroundDimensions.width;
			}

			return [
				-boardOuterWidth / 2 -
					this.state.panDistance * Math.cos(this.state.panAngle / 180 * Math.PI) * scale,
				-boardOuterHeight / 2 -
					this.state.panDistance * Math.sin(this.state.panAngle / 180 * Math.PI) * scale -
					inputHeight,
				boardOuterWidth,
				boardOuterHeight + inputHeight + outputHeight,
			].map((value) => value / this.state.scale).join(' ');
		}

		return [
			-boardOuterWidth / 2,
			-boardOuterHeight / 2 - inputHeight,
			boardOuterWidth,
			boardOuterHeight + inputHeight + outputHeight,
		].map((value) => value / this.state.scale).join(' ');
	}

	getIOWirePathData = ({startX, endX, head, tail}) => {
		const pathLength = 30;
		const curveLength = pathLength * 0.9;

		return Path()
		.moveTo(startX, 0)
		.relative().lineTo(0, head)
		.relative().curveTo(
			0, curveLength,
			endX - startX, pathLength - curveLength,
			endX - startX, pathLength)
		.relative().lineTo(0, tail)
		.end();
	}

	render() {
		const borderSize = 25;
		const boardWidth = this.props.width * BLOCK_SIZE;
		const boardHeight = this.props.height * BLOCK_SIZE;
		const boardOuterWidth = borderSize * 2 + boardWidth;
		const boardOuterHeight = borderSize * 2 + boardHeight;
		const inputAreaWidth = this.props.input.length * 200 - 50;
		const outputAreaWidth = this.props.output.length * 200 - 50;

		return (
			<Hammer
				onPan={this.handlePan}
				onPinch={this.handlePinch}
				options={{
					recognizers: {
						pinch: {enable: true},
					},
					preventDefault: true,
				}}
			>
				<svg
					className="board-svg"
					viewBox={this.getViewBox()}
					onWheel={this.handleWheel}
					onDragStart={this.handleDragStart}
				>
					{/* inputs */}
					<g transform={`translate(0, ${-boardOuterHeight / 2 - 100})`}>
						{
							this.props.input.map((input, index) => (
								<g key={index}>
									<g transform={`translate(${-inputAreaWidth / 2 + index * 200}, 0)`}>
										<rect
											width="150"
											height="50"
											rx="8"
											fill={inputColors[index % inputColors.length].toString()}
											stroke={inputColors[index % inputColors.length].toString()}
											strokeWidth="3"
										/>
										<text
											x="75"
											y="25"
											fontSize="30"
											fontFamily="'Exo 2'"
											fontWeight="900"
											fill="white"
											textAnchor="middle"
											dominantBaseline="central"
										>
											{input === null ? '???' : input}
										</text>
									</g>
									<path
										d={this.getIOWirePathData({
											startX: -inputAreaWidth / 2 + index * 200 + 75,
											endX: (index - (this.props.input.length - 1) / 2) * 10,
											head: 0,
											tail: 20,
										})}
										transform={`translate(0, 50)`}
										fill="none"
										strokeWidth="5"
										stroke={inputColors[index % inputColors.length].toString()}
									/>
								</g>
							))
						}
					</g>
					{/* board + board-border */}
					<g transform={`translate(${-boardOuterWidth / 2}, ${-boardOuterHeight / 2})`}>
						{/* board-border */}
						<g>
							{/* top-left */}
							<image
								x="0"
								y="0"
								width={borderSize}
								height={borderSize}
								href="image/frame-topleft.png"
							/>
							{/* top */}
							<image
								x={borderSize}
								y="0"
								width={boardWidth}
								height={borderSize}
								preserveAspectRatio="none"
								href="image/frame-top.png"
							/>
							{/* top-right */}
							<image
								x={borderSize + boardWidth}
								y="0"
								width={borderSize}
								height={borderSize}
								href="image/frame-topright.png"
							/>
							{/* left */}
							<image
								x="0"
								y={borderSize}
								width={borderSize}
								height={boardHeight}
								preserveAspectRatio="none"
								href="image/frame-left.png"
							/>
							{/* right */}
							<image
								x={borderSize + boardWidth}
								y={borderSize}
								width={borderSize}
								height={boardHeight}
								preserveAspectRatio="none"
								href="image/frame-right.png"
							/>
							{/* bottom-left */}
							<image
								x="0"
								y={borderSize + boardHeight}
								width={borderSize}
								height={borderSize}
								href="image/frame-bottomleft.png"
							/>
							{/* bottom */}
							<image
								x={borderSize}
								y={borderSize + boardHeight}
								width={boardWidth}
								height={borderSize}
								preserveAspectRatio="none"
								href="image/frame-bottom.png"
							/>
							{/* bottom-right */}
							<image
								x={borderSize + boardWidth}
								y={borderSize + boardHeight}
								width={borderSize}
								height={borderSize}
								href="image/frame-bottomright.png"
							/>
						</g>
						{/* board */}
						<g transform={`translate(${borderSize}, ${borderSize})`}>
							<Measure onMeasure={this.handleMeasureBackground}>
								<rect
									className="board-background"
									width={this.props.width * BLOCK_SIZE}
									height={this.props.height * BLOCK_SIZE}
								/>
							</Measure>
							<g>
								{/* Because of the limitation of React (cannot render sibling
									elements) and SVG (first element always rendered first),
									blocks renderings are located here.
									They must be inside BlockComponent, though... */}
								{
									this.state.blocks.map((row) => (
										row.map((block) => (
											<g key={id(block)}>
												<rect
													className="block-border"
													width={BLOCK_SIZE}
													height={BLOCK_SIZE}
													x={block.x * BLOCK_SIZE}
													y={block.y * BLOCK_SIZE}
												/>
												{
													(block.name !== 'empty') && (
														<image
															className="block"
															width={BLOCK_SIZE}
															height={BLOCK_SIZE}
															x={block.x * BLOCK_SIZE}
															y={block.y * BLOCK_SIZE}
															href={`image/${block.name}.png`}
															transform={`rotate(${block.rotate * 90})`}
															style={{
																transformOrigin: 'center',
																// Enabled from FF55
																transformBox: 'fill-box',
																pointerEvents: 'none',
															}}
														/>
													)
												}
											</g>
										))
									))
								}
							</g>
							<g>
								{
									this.state.blocks.map((row) => (
										row.map((block) => (
											<BlockComponent
												key={id(block)}
												block={block}
												x={block.x}
												y={block.y}
												status={this.props.status}
												onClick={this.handleClickBlock}
												onPassAnimationComplete={this.handlePassAnimationComplete}
											/>
										))
									))
								}
							</g>
						</g>
					</g>
					{/* outputs */}
					<g transform={`translate(0, ${boardOuterHeight / 2})`}>
						{
							this.props.output.map((output, index) => (
								<g key={index}>
									<path
										d={this.getIOWirePathData({
											startX: (index - (this.props.output.length - 1) / 2) * 10,
											endX: -outputAreaWidth / 2 + index * 200 + 75,
											head: 20,
											tail: 0,
										})}
										fill="none"
										strokeWidth="5"
										stroke={inputColors[index % inputColors.length].toString()}
									/>
									<g transform={`translate(${-outputAreaWidth / 2 + index * 200}, 50)`}>
										<rect
											width="150"
											height="50"
											rx="8"
											fill="white"
											stroke={inputColors[index % inputColors.length].toString()}
											strokeWidth="3"
										/>
										<text
											x="75"
											y="25"
											fontSize="30"
											fontFamily="'Exo 2'"
											fontWeight="900"
											fill="#333"
											textAnchor="middle"
											dominantBaseline="central"
										>
											{output}
										</text>
									</g>
									<g transform={`translate(${-outputAreaWidth / 2 + index * 200}, 110)`}>
										<rect
											width="150"
											height="50"
											rx="8"
											fill={inputColors[index % inputColors.length].toString()}
											stroke={inputColors[index % inputColors.length].toString()}
											strokeWidth="3"
										/>
										<text
											x="75"
											y="25"
											fontSize="30"
											fontFamily="'Exo 2'"
											fontWeight="900"
											fill="white"
											textAnchor="middle"
											dominantBaseline="central"
										>
											{output === null ? '???' : output}
										</text>
									</g>
								</g>
							))
						}
					</g>
				</svg>
			</Hammer>
		);
	}
}

module.exports = BoardComponent;
