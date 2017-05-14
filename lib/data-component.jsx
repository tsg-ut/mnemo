const React = require('react');
const PropTypes = require('prop-types');
const GSAP = require('react-gsap-enhancer');
const {TweenLite, Back} = require('gsap');
const {toCSS, noop} = require('./util');

class DataElement extends React.Component {
	static propTypes = {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
		onMount: PropTypes.func,
	}

	static defaultProps = {
		onMount: noop,
	};

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
		this.addAnimation(({target}) => (
			TweenLite.to(target, 0.5, {
				rotation: '+=360',
				transformOrigin: 'center center',
				ease: Back.easeOut.config(1.7),
			})
		));
	}

	render() {
		return (
			<g transform={`translate(${this.props.x}, ${this.props.y})`} onClick={this.handleClick}>
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
		);
	}
}

module.exports = GSAP.default()(DataElement);
