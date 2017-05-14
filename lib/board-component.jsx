const React = require('react');
const PropTypes = require('prop-types');
const Board = require('./board');
const DataComponent = require('./data-component');
const BlockComponent = require('./block-component');
const {id} = require('./util');

class BoardComponent extends React.Component {
	static propTypes = {
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		clockLimit: PropTypes.number.isRequired,
		inputX: PropTypes.number.isRequired,
		outputX: PropTypes.number.isRequired,
		onClickBlock: PropTypes.func.isRequired,
	}

	constructor(props, state) {
		super(props, state);

		const {board} = this.props;

		this.board = board;

		this._board = new Board({
			height: this.props.height,
			width: this.props.width,
			clockLimit: this.props.clockLimit,
			inputX: this.props.inputX,
			outputX: this.props.outputX,
		}, this.blockSize);

		this.dataElements = new WeakMap();

		if (typeof this.props.inputX === 'number') {
			this.inputBlockX = [this.props.inputX];
		} else {
			this.inputBlockX = this.props.inputX;
		}
		this.inputBlockY = 0;
		this.outputBlockX = this.props.outputX;
		this.outputBlockY = this.props.height - 1;

		this.animations = [];

		this.board.on('erase', (block, data) => {
			if (data.element) {
				data.element.fadeOut();
			}
		});

		this.board.on('pass', (block, io) => {
			const inputAnimations = [];
			const outputAnimations = [];

			for (const data of io.in.values()) {
				if (data.element) {
					const promise = data.element.animate(block.center);
					inputAnimations.push(promise);
				}
			}

			const animation = Promise.all(inputAnimations).then(() => {
				if (this.board.status === 'executing') {
					for (const data of io.in.values()) {
						data.element.kill();
					}

					for (const [direction, data] of io.out.entries()) {
						if (!block.outputQueues.get(direction).includes(data)) {
							continue;
						}

						new DataComponent(this, data, block.center);

						const promise = data.element.animate(block[direction]);
						outputAnimations.push(promise);
					}
				}

				return Promise.all(outputAnimations);
			});

			this.animations.push(animation);
		});

		this.state = {
			blocks: this._board.getBlocks(),
			data: [],
		};
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

	execute(value) {
		const dataList = this._board.input(value);
		const flattenedDataList = dataList.reduce((a, b) => a.concat(b), []);

		this.setState({
			data: flattenedDataList,
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