const React = require('react');
const PropTypes = require('prop-types');
const Hammer = require('react-hammerjs');
const {INPUT_MOVE, INPUT_END} = (typeof window === 'undefined') ? {} : require('hammerjs');
const {default: Measure} = require('react-measure');
const Path = require('svg-path-generator');
const assert = require('assert');
const Board = require('./board');
const BlockComponent = require('./block-component.jsx');
const IOComponent = require('./io-component.jsx');
const {id, sum, isBetween} = require('./util');
const {BLOCK_SIZE} = require('./constants');

const inputColors = [
	'#de3131', // red
	'#4527a8', // blue
	'#1c6925', // green
	'#db40cd', // pink
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
		onDataLimitExceeded: PropTypes.func.isRequired,
		onClockLimitExceeded: PropTypes.func.isRequired,
		isRapid: PropTypes.bool.isRequired,
		isForced: PropTypes.bool.isRequired,
		isMovingMode: PropTypes.bool.isRequired,
		onCancelMove: PropTypes.func.isRequired,
		onFinishMove: PropTypes.func.isRequired,
		isMouseDown: PropTypes.bool.isRequired,
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
			selectStart: null,
			selectEnd: null,
			moveStart: null,
			moveEnd: null,
			moveStatus: 'select',
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.status === 'stop') {
			assert(this.props.status !== 'pause');

			if (this.props.status === 'executing') {
				this.execute(this.props.input[this.props.currentInputIndex]);
			}
		}

		if (prevProps.status === 'executing') {
			if (this.props.status === 'stop') {
				this.halt({force: this.props.isForced});
			}
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.isMovingMode && !nextProps.isMovingMode) {
			this.resetMoveState();
		}
		if (this.props.isMouseDown && !nextProps.isMouseDown) {
			// mouseup
			if (this.props.isMovingMode) {
				if (this.state.moveStatus === 'select' && this.state.selectStart !== null && this.state.selectEnd !== null) {
					this.setState({
						moveStatus: 'move',
					});
				} else if (this.state.moveStatus === 'move' && this.state.moveStart !== null && this.state.moveEnd !== null) {
					this.props.onFinishMove({
						selectStart: this.state.selectStart,
						selectEnd: this.state.selectEnd,
						deltaX: this.state.moveEnd.x - this.state.moveStart.x,
						deltaY: this.state.moveEnd.y - this.state.moveStart.y,
					});
				}
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

	// TODO: publicなメソッドを殺したい

	getBlock(x, y) {
		return this.board.getBlock(x, y);
	}

	getBoardData() {
		return this.board.boardData;
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

	resetMoveState() {
		this.setState({
			selectStart: null,
			selectEnd: null,
			moveStart: null,
			moveEnd: null,
			moveStatus: 'select',
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
			this.props.onClockLimitExceeded(this.board.clockLimit);

			return;
		}

		if (this.board.dataCount > 100) {
			this.board.halt();
			this.props.onDataLimitExceeded();

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
		if (!this.props.isMovingMode) {
			return this.props.onClickBlock({x, y, type: event.type});
		}
		return false;
	}

	handleMouseDown = (event, x, y) => {
		event.preventDefault();
		if (this.props.isMovingMode) {
			if (this.state.moveStatus === 'select') {
				this.setState({
					selectStart: {x, y},
					selectEnd: {x, y},
				});
			} else if (this.state.moveStatus === 'move') {
				this.setState({
					moveStart: {x, y},
					moveEnd: {x, y},
				});
			}
		}
	}

	handleMouseMove = (event, x, y) => {
		event.preventDefault();
		if (this.props.isMovingMode) {
			if (this.state.moveStatus === 'select' && this.state.selectStart !== null) {
				if (!(this.state.selectEnd.x === x && this.state.selectEnd.y === y)) {
					this.setState({
						selectEnd: {x, y},
					});
				}
			} else if (this.state.moveStatus === 'move' && this.state.moveStart !== null) {
				if (!(this.state.moveEnd.x === x && this.state.moveEnd.y === y)) {
					this.setState({
						moveEnd: {x, y},
					});
				}
			}
		}
	}

	isSelectedBlock = (x, y) => {
		if (this.props.isMovingMode && this.state.selectStart !== null && this.state.selectEnd !== null) {
			return isBetween({
				number: x,
				left: this.state.selectStart.x,
				right: this.state.selectEnd.x,
			}) && isBetween({
				number: y,
				left: this.state.selectStart.y,
				right: this.state.selectEnd.y,
			});
		}
		return false;
	}

	handlePassAnimationComplete = (passEvent) => {
		if (this.passAnimationResolvers.has(passEvent)) {
			this.passAnimationResolvers.get(passEvent)();
		}
	}

	handlePan = (event) => {
		event.preventDefault();
		if (this.props.isMovingMode) {
			return;
		}

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

		return inputColors[index % inputColors.length];
	}

	getBlockTransform = (x, y) => {
		if (this.state.moveStatus === 'move' && this.isSelectedBlock(x, y)) {
			if (this.state.moveStart !== null && this.state.moveEnd !== null) {
				const deltaX = this.state.moveEnd.x - this.state.moveStart.x;
				const deltaY = this.state.moveEnd.y - this.state.moveStart.y;
				return `translate(${-10 + deltaX * BLOCK_SIZE}, ${-10 + deltaY * BLOCK_SIZE})`;
			}
			return 'translate(-10, -10)';
		}
		return 'translate(0, 0)';
	}

	getBlockFill = (x, y) => {
		if (this.isSelectedBlock(x, y)) {
			return 'red';
		}
		if (this.props.isMovingMode) {
			return 'white';
		}
		return 'transparent';
	}

	permutation = (array) => {
		const front = [];
		const back = [];
		for (let row = 0; row < array.length; row++) {
			for (let line = 0; line < array[row].length; line++) {
				if (this.isSelectedBlock(line, row)) {
					front.push(array[row][line]);
				} else {
					back.push(array[row][line]);
				}
			}
		}
		return back.concat(front);
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
								xlinkHref="image/frame-topleft.png"
							/>
							{/* top */}
							<image
								x={this._borderSize}
								y="0"
								width={this._boardWidth}
								height={this._borderSize}
								preserveAspectRatio="none"
								xlinkHref="image/frame-top.png"
							/>
							{/* top-right */}
							<image
								x={this._borderSize + this._boardWidth}
								y="0"
								width={this._borderSize}
								height={this._borderSize}
								xlinkHref="image/frame-topright.png"
							/>
							{/* left */}
							<image
								x="0"
								y={this._borderSize}
								width={this._borderSize}
								height={this._boardHeight}
								preserveAspectRatio="none"
								xlinkHref="image/frame-left.png"
							/>
							{/* right */}
							<image
								x={this._borderSize + this._boardWidth}
								y={this._borderSize}
								width={this._borderSize}
								height={this._boardHeight}
								preserveAspectRatio="none"
								xlinkHref="image/frame-right.png"
							/>
							{/* bottom-left */}
							<image
								x="0"
								y={this._borderSize + this._boardHeight}
								width={this._borderSize}
								height={this._borderSize}
								xlinkHref="image/frame-bottomleft.png"
							/>
							{/* bottom */}
							<image
								x={this._borderSize}
								y={this._borderSize + this._boardHeight}
								width={this._boardWidth}
								height={this._borderSize}
								preserveAspectRatio="none"
								xlinkHref="image/frame-bottom.png"
							/>
							{/* bottom-right */}
							<image
								x={this._borderSize + this._boardWidth}
								y={this._borderSize + this._boardHeight}
								width={this._borderSize}
								height={this._borderSize}
								xlinkHref="image/frame-bottomright.png"
							/>
						</g>
						{/* clocks */}
						<foreignObject
							transform={`translate(0, ${this._boardBorderHeight})`}
							height="100%"
							width="100%"
							fontSize="0"
						>
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
								bounds
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
												onMouseDown={this.handleMouseDown}
												onMouseMove={this.handleMouseMove}
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
									filled
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
		this.permutation(
			this.state.blocks.map((row) => (
				row.map((block) => (
					<g
						key={id(block)}
						transform={this.getBlockTransform(block.x, block.y)}
					>
						<rect
							className="block-border"
							width={BLOCK_SIZE}
							height={BLOCK_SIZE}
							x={block.x * BLOCK_SIZE}
							y={block.y * BLOCK_SIZE}
							fill={this.getBlockFill(block.x, block.y)}
						/>
						{block.config.onRotatableWire && (
							<image
								className="block"
								width={BLOCK_SIZE}
								height={BLOCK_SIZE}
								x={block.x * BLOCK_SIZE}
								y={block.y * BLOCK_SIZE}
								xlinkHref="image/wireI.png"
								style={{
									transform: `rotate(${block.rotate * 90}deg)`,
									transformOrigin: 'center',
									// Enabled from FF55
									transformBox: 'fill-box',
									pointerEvents: 'none',
								}}
							/>
						)}
						{(block.name !== 'empty') && (
							<image
								className="block"
								width={BLOCK_SIZE}
								height={BLOCK_SIZE}
								x={block.x * BLOCK_SIZE}
								y={block.y * BLOCK_SIZE}
								xlinkHref={`image/${block.name}.png`}
								style={{
									transform: block.config.onRotatableWire ? 'none' : `rotate(${block.rotate * 90}deg)`,
									transformOrigin: 'center',
									// Enabled from FF55
									transformBox: 'fill-box',
									pointerEvents: 'none',
								}}
							/>
						)}
					</g>
				))
			))
		)
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
					filled
					nullable={false}
				/>
				<IOComponent
					x={-this._outputAreaWidth / 2 + index * 200}
					y={50}
					value={this.props.userOutput[index]}
					correctness={this.props.userOutputCorrectness[index]}
					color={this.getInputColor(index)}
					filled={false}
					nullable
				/>
			</g>
		))
	)
}

module.exports = BoardComponent;
