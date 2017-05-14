const React = require('react');
const PropTypes = require('prop-types');
const GSAP = require('react-gsap-enhancer');
const {TweenMax} = require('gsap');
const {toCSS} = require('./util');

class DataElement extends React.Component {
	static propTypes = {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
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

	handleClick = () => {
		this.addAnimation(({target}) => {
			const box = target.find({name: 'wrap'});
			return TweenMax.to(box, 0.5, {rotation: '+=360', transformOrigin: 'center center'});
		});
	}

	render() {
		return (
			<g transform={`translate(${this.props.x}, ${this.props.y})`} onClick={this.handleClick}>
				<g name="wrap">
					<rect x="-9" y="-8" rx="3" width="18" height="16" fill="darkorange"/>
					<text x="0" y="0" fontSize="12" fill="white" textAnchor="middle" dominantBaseline="central">
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
			</g>
		);
	}
}

module.exports = GSAP.default()(DataElement);
