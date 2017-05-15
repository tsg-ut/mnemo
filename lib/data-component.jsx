const React = require('react');
const PropTypes = require('prop-types');
const GSAP = require('react-gsap-enhancer');
const assert = require('assert');
const {TweenLite, Back, Power0} = require('gsap');
const {toCSS} = require('./util');
const {BLOCK_SIZE} = require('./constants');

class DataComponent extends React.Component {
	static propTypes = {
		direction: PropTypes.string.isRequired,
		isInward: PropTypes.bool.isRequired,
		value: PropTypes.number.isRequired,
		onAnimationComplete: PropTypes.func.isRequired,
	}

	componentDidMount() {
		this.addAnimation(({target}) => (
			TweenLite.to(target, 0.4, {
				y: `+=${BLOCK_SIZE / 2}`,
				transformOrigin: 'center center',
				ease: Power0.easeNone,
				onComplete: () => {
					this.props.onAnimationComplete();
				},
			})
		));
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
		this.addAnimation(({target}) => (
			TweenLite.to(target, 0.5, {
				rotation: '+=360',
				transformOrigin: 'center center',
				ease: Back.easeOut.config(1.7),
			})
		));
	}

	getInitialTransform = () => (
		do {
			if (this.props.isInward) {
				if (this.props.direction === 'top') {
					`translate(${BLOCK_SIZE / 2}, 0)`;
				} else if (this.props.direction === 'right') {
					`translate(${BLOCK_SIZE}, ${BLOCK_SIZE / 2})`;
				} else if (this.props.direction === 'left') {
					`translate(0, ${BLOCK_SIZE / 2})`;
				} else if (this.props.direction === 'bottom') {
					`translate(${BLOCK_SIZE / 2}, ${BLOCK_SIZE})`;
				} else {
					assert(false);
				}
			} else {
				`translate(${BLOCK_SIZE / 2}, ${BLOCK_SIZE / 2})`;
			}
		}
	)

	render() {
		return (
			<g transform={this.getInitialTransform()} onClick={this.handleClick}>
				<rect x="-9" y="-8" rx="3" width="18" height="16" fill="darkorange"/>
				<text
					x="0"
					y="0"
					fontSize="12"
					fill="white"
					textAnchor="middle"
					dominantBaseline="central"
				>
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

module.exports = GSAP.default()(DataComponent);
