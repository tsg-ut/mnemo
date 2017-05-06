const assert = require('assert');
const React = require('react');
const PropTypes = require('prop-types');

class Panel extends React.Component {
	static propTypes = {
		parts: PropTypes.object.isRequired,
	}

	constructor(props, state) {
		super(props, state);

		const parts = new Map();
		let selected = null;

		Object.keys(props.parts).forEach((name, index) => {
			const count = props.parts[name];

			parts.set(name, count);
			if (index === 0) {
				selected = name;
			}
		});

		this.state = {
			parts,
			selected,
		};
	}

	/**
	 *  panel上にblockを追加する
	 *  @param {string} blockName - 追加するblock名
	 *  @return {undefined}
	 */
	push(blockName) {
		let currentCount = 0;

		if (this.state.parts.has(blockName)) {
			currentCount = this.state.parts.get(blockName);
		}

		if (currentCount !== null) {	// null means infinity
			this.state.parts.set(blockName, currentCount + 1);
			this.setState({parts: this.state.parts});
		}
	}

	/**
	 *  panel上のblockを減らす
	 *  @param {string} blockName - 消費するblock名
	 *  @return {undefined}
	 */
	take(blockName) {
		assert(this.state.parts.has(blockName), 'try to take non-existent block');

		const currentCount = this.state.parts.get(blockName);

		if (currentCount !== null) {	// null means infinity
			assert(currentCount > 0, 'the block isn\'t remaining');

			if (currentCount - 1 === 0) { // take the last block
				this.setState({selected: null});

				this.state.parts.delete(blockName);
			} else {
				this.state.parts.set(blockName, currentCount - 1);
			}

			this.setState({
				parts: this.state.parts,
			});
		}
	}

	onClickBlock = (event) => {
		this.setState({
			selected: event.target.getAttribute('data-type'),
		});
	}

	render() {
		return (
			<div className="panel">
				{Array.from(this.state.parts).map(([name, count]) => (
					<div
						key={name}
						className="block"
						onClick={this.onClickBlock}
						data-type={name}
						{...(
							this.state.selected === name ? {'data-selected': 'data-selected'} : {}
						)}>
						<div className="count">
							{count === null ? '∞' : count}
						</div>
					</div>
				))}
			</div>
		);
	}
}

module.exports = Panel;
