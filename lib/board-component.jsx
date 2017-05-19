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

	handleClickBlock = (x, y, event) => {
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
		return (
			<svg className="board-svg" viewBox="-150 -150 450 450">
				<rect
					className="board-background"
					width={this.props.width * 50}
					height={this.props.height * 50}
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
									onClick={this.handleClickBlock.bind(this, block.x, block.y)}
									onPassAnimationComplete={this.handlePassAnimationComplete}
								/>
							))
						))
					}
				</g>
			</svg>
		);
	}
}

module.exports = BoardComponent;
