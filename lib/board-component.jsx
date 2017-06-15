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
const IOComponent = require('./io-component.jsx');
const {id, sum} = require('./util');
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
		currentInputIndex: PropTypes.number,
		output: PropTypes.arrayOf(PropTypes.number).isRequired,
		userOutput: PropTypes.arrayOf(PropTypes.number).isRequired,
		userOutputCorrectness: PropTypes.arrayOf(PropTypes.bool).isRequired,
		onClickBlock: PropTypes.func.isRequired,
		onOutput: PropTypes.func.isRequired,
		onHalt: PropTypes.func.isRequired,
		onPaused: PropTypes.func.isRequired,
		isRapid: PropTypes.bool.isRequired,
		isForced: PropTypes.bool.isRequired,
	}

	static defaultProps = {
		currentInputIndex: null,
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

		this.inputBlockY = 0;
		this.outputBlockX = this.props.outputX;
		this.outputBlockY = this.props.height - 1;

		this.animations = [];

		this.backgroundDimensions = null;

		this.state = {
			blocks: this.board.getBlocks(),
			clocks: 0,
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
				this.execute(nextProps.input[nextProps.currentInputIndex]);
			}
		}

		if (this.props.status === 'executing') {
			if (nextProps.status === 'stop') {
				this.halt({force: nextProps.isForced});
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
		const inputComponentSize = sum(this.props.input.map((inputList) => inputList.length));
		return inputComponentSize * 200 - 50;
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

	halt({force}) {
		if (force) {
			this.board.halt();
		}
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

	handleMeasureIO = ({type, dimensions}) => {
		this.setState({

		});
	}

	handleMeasureInput = (dimensions) => {
		this.handleMeasureIO({type: 'input', dimensions});
	}

	handleMeasureOutput = (dimensions) => {
		this.handleMeasureIO({type: 'output', dimensions});
	}

	handleMeasureUserOutput = (dimensions) => {
		this.handleMeasureIO({type: 'user_output', dimensions});
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

	getInputColor = (index) => {
		if (this.props.currentInputIndex !== null && this.props.currentInputIndex !== index) {
			return 'gray';
		}

		return inputColors[index % inputColors.length].toString();
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
						{/* clocks */}
						<foreignObject transform={`translate(0, ${this._boardBorderHeight})`} fontSize="0">
							<div className="clock-area">
								{this.state.clocks}/{this.props.clockLimit}
							</div>
						</foreignObject>
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
		this.props.input.map((inputsList, index) => (
			<g key={index}>
				{
					inputsList.map((inputs, inputsIndex) => {
						const x = -this._inputAreaWidth / 2 + (index * inputsList.length + inputsIndex) * 200;

						return (
							<g key={inputsIndex}>
								<IOComponent
									x={x}
									y={0}
									value={inputs}
									correctness={null}
									color={this.getInputColor(index)}
									filled={true}
									nullable={false}
								/>
								<path
									d={this.getIOWirePathData({
										startX: x + 75,
										endX: (this.props.inputX[inputsIndex] - this.props.width / 2 + 0.5) * BLOCK_SIZE + (index - (this.props.input.length - 1) / 2) * 10,
										head: 0,
										tail: 20,
									})}
									transform={'translate(0, 50)'}
									fill="none"
									strokeWidth="5"
									stroke={this.getInputColor(index)}
									style={{
										transition: 'stroke 0.3s ease',
									}}
								/>
							</g>
						);
					})
				}
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
					stroke={this.getInputColor(index)}
					style={{
						transition: 'stroke 0.3s ease',
					}}
				/>
				<IOComponent
					x={-this._outputAreaWidth / 2 + index * 200}
					y={110}
					value={output}
					correctness={null}
					color={this.getInputColor(index)}
					filled={true}
					nullable={false}
				/>
				<IOComponent
					x={-this._outputAreaWidth / 2 + index * 200}
					y={50}
					value={this.props.userOutput[index]}
					correctness={this.props.userOutputCorrectness[index]}
					color={this.getInputColor(index)}
					filled={false}
					nullable={true}
				/>
			</g>
		))
	)
}

module.exports = BoardComponent;
