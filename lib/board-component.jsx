const React = require('react');
const PropTypes = require('prop-types');
const Hammer = require('react-hammerjs');
const {INPUT_MOVE, INPUT_END} = (typeof window === 'undefined') ? {} : require('hammerjs');
const {default: Measure} = require('react-measure');
const color = require('color');
const Path = require('svg-path-generator');
const assert = require('assert');
const Board = require('./board');
const BlockComponent = require('./block-component.jsx');
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
		userOutput: PropTypes.arrayOf(PropTypes.number).isRequired,
		userOutputCorrectness: PropTypes.arrayOf(PropTypes.bool).isRequired,
		onClickBlock: PropTypes.func.isRequired,
		onOutput: PropTypes.func.isRequired,
		onHalt: PropTypes.func.isRequired,
		onPaused: PropTypes.func.isRequired,
		isRapid: PropTypes.bool.isRequired,
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
		this.board.on('halt', this.handleBoardHalt);
		this.board.on('paused', this.handleBoardPaused);

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
			isPinch: false,
			panDistance: 0,
			panAngle: 0,
			pinchCenterX: 0,
			pinchCenterY: 0,
			pinchScale: 1,
			offsetX: 0,
			offsetY: 0,
			scale: 1,
			viewBoxScale: null,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.status === 'stop') {
			assert(nextProps.status !== 'pause');

			if (nextProps.status === 'executing') {
				this.execute(nextProps.currentInput);
			}
		}

		if (this.props.status === 'executing') {
			if (nextProps.status === 'stop') {
				this.halt();
			}
		}
	}

	get _borderSize() {
		return 25;
	}

	get _boardWidth() {
		return this.props.width * BLOCK_SIZE;
	}

	get _boardHeight() {
		return this.props.height * BLOCK_SIZE;
	}

	get _inputHeight() {
		return 120;
	}

	get _outputHeight() {
		return 170;
	}

	get _boardBorderWidth() {
		return this._borderSize * 2 + this._boardWidth;
	}

	get _boardBorderHeight() {
		return this._borderSize * 2 + this._boardHeight;
	}

	get _boardOuterWidth() {
		return Math.max(this._borderSize * 2 + this._boardWidth, this._inputAreaWidth);
	}

	get _boardOuterHeight() {
		return this._borderSize * 2 + this._boardHeight + this._inputHeight + this._outputHeight;
	}

	get _inputAreaWidth() {
		return this.props.input.length * 200 - 50;
	}

	get _outputAreaWidth() {
		return this.props.output.length * 200 - 50;
	}

	getBlock(x, y) {
		return this.board.getBlock(x, y);
	}

	getClock() {
		return this.board.clock;
	}

	getWeighedBlockCount() {
		return this.board.weighedBlockCount;
	}

	getSeededRandom() {
		return this.board.getSeededRandom();
	}

	placeBlock({x, y, type, rotate}) {
		this.board.placeBlock({x, y, type, rotate});
		this.setState({
			blocks: this.board.getBlocks(),
		});
	}

	execute = (value) => {
		// Reset scale on start executing
		const {offsetX, offsetY, scale} = this.normalizeScaleAndOffset({
			offsetX: this.state.offsetX,
			offsetY: this.state.offsetY,
			scale: 1,
		});
		this.setState({offsetX, offsetY, scale});

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

	normalizeScaleAndOffset = ({offsetX, offsetY, scale}) => {
		const maxScale = Math.max(this._boardOuterWidth, this._boardOuterHeight) / (BLOCK_SIZE * 2);
		const normalizedScale = Math.max(1, Math.min(scale, maxScale));

		const maxOffsetX = (this._boardOuterWidth - this._boardOuterWidth / normalizedScale) / 2;
		const normalizedOffsetX = Math.max(-maxOffsetX, Math.min(offsetX, maxOffsetX));

		const maxOffsetY = (this._boardOuterHeight - this._boardOuterHeight / normalizedScale) / 2;
		const normalizedOffsetY = Math.max(-maxOffsetY, Math.min(offsetY, maxOffsetY));

		return {
			scale: normalizedScale,
			offsetX: normalizedOffsetX,
			offsetY: normalizedOffsetY,
		};
	}

	handleBoardOutput = (value) => {
		this.props.onOutput(value);
	}

	handleBoardHalt = () => {
		this.props.onHalt();
	}

	handleBoardPaused = () => {
		this.props.onPaused();
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

		const distance = this.state.viewBoxScale === null
			? event.distance
			: event.distance / this.state.viewBoxScale;
		const angle = event.angle / 180 * Math.PI;

		if (event.eventType === INPUT_MOVE) {
			this.setState({
				isPanning: true,
				panDistance: distance,
				panAngle: angle,
			});
		} else if (event.eventType === INPUT_END) {
			const {offsetX, offsetY, scale} = this.normalizeScaleAndOffset({
				offsetX: this.state.offsetX - distance * Math.cos(angle),
				offsetY: this.state.offsetY - distance * Math.sin(angle),
				scale: this.state.scale,
			});

			this.setState({
				isPanning: false,
				offsetX,
				offsetY,
				scale,
			});
		}
	}

	handlePinch = (event) => {
		event.preventDefault();

		if (event.eventType === INPUT_MOVE) {
			this.setState({
				isPinching: true,
				pinchScale: event.scale,
			});
		} else if (event.eventType === INPUT_END) {
			const {offsetX, offsetY, scale} = this.normalizeScaleAndOffset({
				offsetX: this.state.offsetX,
				offsetY: this.state.offsetY,
				scale: this.state.scale * this.state.pinchScale,
			});

			this.setState({
				isPinching: false,
				offsetX,
				offsetY,
				scale,
			});

			if (this.measureComponent) {
				this.measureComponent.measure();
			}
		}
	}

	handleWheel = (event) => {
		const direction = (event.deltaY > 0) ? -1 : 1;

		const {offsetX, offsetY, scale} = this.normalizeScaleAndOffset({
			offsetX: this.state.offsetX,
			offsetY: this.state.offsetY,
			scale: this.state.scale * (1.0 + 0.1 * direction),
		});

		this.setState({
			offsetX,
			offsetY,
			scale,
		});

		if (this.measureComponent) {
			this.measureComponent.measure();
		}
	}

	handleDragStart = (event) => {
		event.preventDefault();
	}

	handleMeasureBackground = (dimensions) => {
		this.backgroundDimensions = dimensions.bounds;
		this.setState({
			viewBoxScale: this.backgroundDimensions.width / this._boardWidth,
		});
	}

	getViewBox = () => {
		const {offsetX, offsetY, scale} = this.normalizeScaleAndOffset({
			offsetX: this.state.isPanning
				? this.state.offsetX - this.state.panDistance * Math.cos(this.state.panAngle)
				: this.state.offsetX,
			offsetY: this.state.isPanning
				? this.state.offsetY - this.state.panDistance * Math.sin(this.state.panAngle)
				: this.state.offsetY,
			scale: this.state.isPinching
				? this.state.scale * this.state.pinchScale
				: this.state.scale,
		});

		const normalOffsetY = (this._outputHeight - this._inputHeight) / 2;

		const viewBoxWidth = this._boardOuterWidth / scale;
		const viewBoxHeight = this._boardOuterHeight / scale;

		return [
			-viewBoxWidth / 2 + offsetX,
			-viewBoxHeight / 2 + offsetY + normalOffsetY,
			viewBoxWidth,
			viewBoxHeight,
		];
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
					<g transform={`translate(0, ${-this._boardBorderHeight / 2 - 100})`}>
						{this.renderInputs()}
					</g>
					{/* board + board-border */}
					<g transform={`translate(${-this._boardBorderWidth / 2}, ${-this._boardBorderHeight / 2})`}>
						{/* board-border */}
						<g>
							{/* top-left */}
							<image
								x="0"
								y="0"
								width={this._borderSize}
								height={this._borderSize}
								href="image/frame-topleft.png"
							/>
							{/* top */}
							<image
								x={this._borderSize}
								y="0"
								width={this._boardWidth}
								height={this._borderSize}
								preserveAspectRatio="none"
								href="image/frame-top.png"
							/>
							{/* top-right */}
							<image
								x={this._borderSize + this._boardWidth}
								y="0"
								width={this._borderSize}
								height={this._borderSize}
								href="image/frame-topright.png"
							/>
							{/* left */}
							<image
								x="0"
								y={this._borderSize}
								width={this._borderSize}
								height={this._boardHeight}
								preserveAspectRatio="none"
								href="image/frame-left.png"
							/>
							{/* right */}
							<image
								x={this._borderSize + this._boardWidth}
								y={this._borderSize}
								width={this._borderSize}
								height={this._boardHeight}
								preserveAspectRatio="none"
								href="image/frame-right.png"
							/>
							{/* bottom-left */}
							<image
								x="0"
								y={this._borderSize + this._boardHeight}
								width={this._borderSize}
								height={this._borderSize}
								href="image/frame-bottomleft.png"
							/>
							{/* bottom */}
							<image
								x={this._borderSize}
								y={this._borderSize + this._boardHeight}
								width={this._boardWidth}
								height={this._borderSize}
								preserveAspectRatio="none"
								href="image/frame-bottom.png"
							/>
							{/* bottom-right */}
							<image
								x={this._borderSize + this._boardWidth}
								y={this._borderSize + this._boardHeight}
								width={this._borderSize}
								height={this._borderSize}
								href="image/frame-bottomright.png"
							/>
						</g>
						{/* board */}
						<g transform={`translate(${this._borderSize}, ${this._borderSize})`}>
							<Measure
								ref={(ref) => {
									this.measureComponent = ref;
								}}
								onResize={this.handleMeasureBackground}
								bounds={true}
							>
								{({measureRef}) => (
									<rect
										ref={measureRef}
										className="board-background"
										width={this.props.width * BLOCK_SIZE}
										height={this.props.height * BLOCK_SIZE}
									/>
								)}
							</Measure>
							<g>
								{this.renderBlocks()}
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
												isRapid={this.props.isRapid}
												viewBoxScale={this.state.viewBoxScale}
											/>
										))
									))
								}
							</g>
						</g>
					</g>
					{/* outputs */}
					<g transform={`translate(0, ${this._boardBorderHeight / 2})`}>
						{this.renderOutputs()}
					</g>
				</svg>
			</Hammer>
		);
	}

	renderInputs = () => (
		this.props.input.map((input, index) => (
			<g key={index}>
				<g transform={`translate(${-this._inputAreaWidth / 2 + index * 200}, 0)`}>
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
						startX: -this._inputAreaWidth / 2 + index * 200 + 75,
						endX: (index - (this.props.input.length - 1) / 2) * 10,
						head: 0,
						tail: 20,
					})}
					transform={'translate(0, 50)'}
					fill="none"
					strokeWidth="5"
					stroke={inputColors[index % inputColors.length].toString()}
				/>
			</g>
		))
	)

	/*
		Because of the limitation of React (cannot render sibling
		elements) and SVG (first element always rendered first),
		blocks renderings are located here.
		They must be inside BlockComponent, though...
	*/
	renderBlocks = () => (
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
					{block.config.onRotatableWire && (
						<image
							className="block"
							width={BLOCK_SIZE}
							height={BLOCK_SIZE}
							x={block.x * BLOCK_SIZE}
							y={block.y * BLOCK_SIZE}
							href="image/wireI.png"
							transform={`rotate(${block.rotate * 90})`}
							style={{
								transformOrigin: 'center',
								// Enabled from FF55
								transformBox: 'fill-box',
								pointerEvents: 'none',
							}}
						/>
					)}
					{
						(block.name !== 'empty') && (
							<image
								className="block"
								width={BLOCK_SIZE}
								height={BLOCK_SIZE}
								x={block.x * BLOCK_SIZE}
								y={block.y * BLOCK_SIZE}
								href={`image/${block.name}.png`}
								{...(
									!block.config.onRotatableWire &&
									{transform: `rotate(${block.rotate * 90})`}
								)}
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
	)

	renderOutputs = () => (
		this.props.output.map((output, index) => (
			<g key={index}>
				<path
					d={this.getIOWirePathData({
						startX: (index - (this.props.output.length - 1) / 2) * 10,
						endX: -this._outputAreaWidth / 2 + index * 200 + 75,
						head: 20,
						tail: 0,
					})}
					fill="none"
					strokeWidth="5"
					stroke={inputColors[index % inputColors.length].toString()}
				/>
				<g transform={`translate(${-this._outputAreaWidth / 2 + index * 200}, 110)`}>
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
				<g transform={`translate(${-this._outputAreaWidth / 2 + index * 200}, 50)`}>
					<rect
						width="150"
						height="50"
						rx="8"
						fill="white"
						stroke={inputColors[index % inputColors.length].toString()}
						strokeWidth="3"
					/>
					{this.props.userOutputCorrectness[index] === true && (
						<g transform="translate(75, 25)" className="correctness">
							<circle
								cx="0"
								cy="0"
								r="35"
								fill="none"
								stroke="red"
								strokeWidth="14"
							/>
						</g>
					)}
					{this.props.userOutputCorrectness[index] === false && (
						<g transform="translate(75, 25)" className="correctness">
							<line
								x1="-30"
								y1="-30"
								x2="30"
								y2="30"
								fill="none"
								stroke="blue"
								strokeWidth="14"
							/>
							<line
								x1="30"
								y1="-30"
								x2="-30"
								y2="30"
								fill="none"
								stroke="blue"
								strokeWidth="14"
							/>
						</g>
					)}
					{this.props.userOutput[index] !== null && (
						<text
							x="75"
							y="25"
							fontSize="30"
							fontFamily="'Exo 2'"
							fontWeight="900"
							fill="#333"
							textAnchor="middle"
							dominantBaseline="central"
							style={{
								textShadow: '0 0 15px white',
							}}
						>
							{this.props.userOutput[index]}
						</text>
					)}
				</g>
			</g>
		))
	)
}

module.exports = BoardComponent;
