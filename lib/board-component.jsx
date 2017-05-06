const $ = require('jquery');
const DataElement = require('./data-element');
const React = require('react');
const PropTypes = require('prop-types');

class BoardElement extends React.Component {
	static propTypes = {
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
	}

	constructor(props, state) {
		super(props, state);

		const {stage, board} = this.props;

		this.stage = stage;
		this.board = board;

		this.$board = stage.$stage.find('.board');
		this.dataElements = [];

		if (typeof stage.config.inputX === 'number') {
			this.inputBlockX = [stage.config.inputX];
		} else {
			this.inputBlockX = stage.config.inputX;
		}
		this.inputBlockY = 0;
		this.outputBlockX = stage.config.outputX;
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

						new DataElement(this, data, block.center);

						const promise = data.element.animate(block[direction]);
						outputAnimations.push(promise);
					}
				}

				return Promise.all(outputAnimations);
			});

			this.animations.push(animation);
		});
	}

	get inputBlock() {
		return this.inputBlockX.map((x) => this.getBlock(x, this.inputBlockY));
	}

	get outputBlock() {
		return this.getBlock(this.outputBlockX, this.outputBlockY);
	}

	getBlock(x, y) {
		return this.$board.find('.block').filter((index, element) => (
			$(element).data('x') === x && $(element).data('y') === y
		));
	}

	placeBlock({x, y, type, rotate}) {
		this.getBlock(x, y).attr('data-type', type).attr('data-rotate', rotate * 90);
		this.board.placeBlock({x, y, type, rotate});
	}

	eraseData() {
		this.dataElements.forEach((dataElement) => {
			dataElement.fadeOut();
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
				<g>{
					Array.from({length: this.props.height}, (_, y) => (
						Array.from({length: this.props.width}, (_, x) => (
							<rect
								key={y * this.props.width + x}
								className="block-border"
								width="50"
								height="50"
								x={x * 50}
								y={y * 50}
							/>
						))
					))
				}</g>
			</svg>
		);
	}
}

module.exports = BoardElement;
