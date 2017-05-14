const React = require('react');
const PropTypes = require('prop-types');
const GSAP = require('react-gsap-enhancer');
const {TimelineMax} = require('gsap');
const {toCSS} = require('./util');

class DataElement extends React.Component {
	static propTypes = {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
	}

	componentDidMount() {
		this.addAnimation(({target}) => {
			const box = target.find({name: 'data'})

			return new TimelineMax({repeat: -1})
			.to(box, 1, {scale: 1.23, y: '+=120'})
			.to(box, 1, {scale: 1, y: '-=120'})
			.to(box, 1, {rotation: 90}, 1);
		});
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
			<g transform={`translate(${this.props.x}, ${this.props.y})`}>
				<rect name="data" x="-8" y="-8" rx="3" width="16" height="16" fill="darkorange"/>
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
