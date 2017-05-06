const $ = require('jquery');
const DataElement = require('./data-element');
const React = require('react');

class BoardElement extends React.Component {
	constructor(props, state) {
		super(props, state);

		const {stage, board} = this.props;

		this.stage = stage;
		this.board = board;

		this.height = stage.config.height;
		this.width = stage.config.width;
		this.$board = stage.$stage.find('.board');
		this.dataElements = [];

		for (let i = 0; i < this.height; i++) {
			const $row = $('<div/>', {
				class: 'row',
				attr: {'data-y': i},
			});
			this.$board.find('.rows').append($row);

			for (let j = 0; j < this.width; j++) {
				$row.append($('<div/>', {
					class: 'block',
					attr: {
						'data-x': j,
						'data-y': i,
					},
				}));
			}
		}

		if (typeof stage.config.inputX === 'number') {
			this.inputBlockX = [stage.config.inputX];
		} else {
			this.inputBlockX = stage.config.inputX;
		}
		this.inputBlockY = 0;
		this.outputBlockX = stage.config.outputX;
		this.outputBlockY = stage.config.height - 1;

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
			<svg className="board-svg" viewBox="0 0 300 300">
				<rect className="board-frame"/>
			</svg>
		);
	}
}

module.exports = BoardElement;
