const {toCSS} = require('./util');
const React = require('react');
const PropTypes = require('prop-types');

class DataElement extends React.Component {
	static propTypes = {
		value: PropTypes.number.isRequired,
	}

	kill() {
		this.$data.remove();

		const index = this.boardElement.dataElements.indexOf(this);
		if (index !== -1) {
			this.boardElement.dataElements.splice(index, 1);
		}
	}

	fadeOut() {
		this.$data.stop(true, false);
		this.$data.hide({
			duration: 500,
			queue: false,
			complete: () => this.kill(),
		});
	}

	animate(coordinate) {
		return this.$data.animate(toCSS(coordinate), 400, 'linear').promise();
	}

	render() {
		return (
			<g>
				<rect x="0" y="0" width="10" height="10" fill="orange"/>
				<text x="0" y="0" fontSize="12" fill="white" textAnchor="middle">
					{
						do {
							if (this.props.value === Infinity) {
								'∞';
							} else if (this.props.value === -Infinity) {
								'-∞';
							} else {
								this.props.value;
							}
						}
					}
				</text>
			</g>
		);
	}
}

module.exports = DataElement;
