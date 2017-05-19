const React = require('react');
const PropTypes = require('prop-types');
const Board = require('./board');
const BlockComponent = require('./block-component');
const {id} = require('./util');
const {BLOCK_SIZE} = require('./constants');

class BoardComponent extends React.Component {
	static propTypes = {
		isExecuting: PropTypes.bool, // TODO: implement
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		clockLimit: PropTypes.number.isRequired,
		inputX: PropTypes.number.isRequired,
		outputX: PropTypes.number.isRequired,
		onClickBlock: PropTypes.func.isRequired,
		onOutput: PropTypes.func.isRequired,
		onHalt: PropTypes.func.isRequired,
	}

	constructor(props, state) {
		super(props, state);

		this._board = new Board({
			height: this.props.height,
			width: this.props.width,
			clockLimit: this.props.clockLimit,
			inputX: this.props.inputX,
			outputX: this.props.outputX,
		}, this.blockSize);

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

		this.state = {
			blocks: this._board.getBlocks(),
			clocks: this._board.clocks,
			showClockLimit: false,
			showDataLimit: false,
		};
	}

	// TODO: implement
	componentWillReceiveProps(nextProps) {
		if (!this.props.executing && nextProps.executing) {
			this.execute();
		}

		if (this.props.executing && !nextProps.executing) {
			this.halt();
		}
	}

	get inputBlock() {
		return this.inputBlockX.map((x) => this.getBlock(x, this.inputBlockY));
	}

	get outputBlock() {
		return this.getBlock(this.outputBlockX, this.outputBlockY);
	}

	getBlock(x, y) {
		return this._board.getBlock(x, y);
	}

	placeBlock({x, y, type, rotate}) {
		this._board.placeBlock({x, y, type, rotate});
		this.setState({
			blocks: this._board.getBlocks(),
		});
	}

	eraseData() {
		this.dataElements.forEach((dataElement) => {
			dataElement.fadeOut();
		});
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

	execute(value) {
		this._board.input(value);
		this.clockUp();
	}

	clockUp() {
		const passAnimations = [];

		this._board.step({
			onPass: (passEvent) => {
				passAnimations.push(new Promise((resolve) => {
					this.passAnimationResolvers.set(passEvent, resolve);
				}));
			},
		});

		this.setState({
			clocks: this._board.clock,
		});

		if (this._board.status !== 'executing') {
			return;
		}

		Promise.all(passAnimations).then(() => {
			this._board.hand();

			if (this._board.status !== 'executing') {
				return;
			}

			if (this._board.clock >= this._board.clockLimit) {
				this._board.halt();

				this.setState({
					showClockLimit: true,
				});

				return;
			}

			if (this._board.dataCount > 100) {
				this._board.halt();

				this.setState({
					showDataLimit: true,
				});

				return;
			}

			this.clockUp();
		});
	}

	render() {
		const borderSize = 25;
		const boardWidth = this.props.width * BLOCK_SIZE;
		const boardHeight = this.props.height * BLOCK_SIZE;
		const boardOuterWidth = borderSize * 2 + boardWidth;
		const boardOuterHeight = borderSize * 2 + boardHeight;

		return (
			<svg className="board-svg" viewBox="-150 -150 300 300">
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
						<rect
							className="board-background"
							width={this.props.width * BLOCK_SIZE}
							height={this.props.height * BLOCK_SIZE}
						/>
						<g>
							{/* Because of the limitation of React (cannot render sibling elements)
								and SVG (first element always rendered first), blocks renderings are
								located here. They must be inside BlockComponent, though... */}
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
											rotate={block.rotate}
											name={block.name}
											onClick={this.handleClickBlock}
											onPassAnimationComplete={this.handlePassAnimationComplete}
										/>
									))
								))
							}
						</g>
					</g>
				</g>
			</svg>
		);
	}
}

module.exports = BoardComponent;
