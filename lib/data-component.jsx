const React = require('react');
const PropTypes = require('prop-types');
const GSAP = require('react-gsap-enhancer');
const assert = require('assert');
// TODO: scoped require
const {TweenLite, Back, Power0} = require('gsap');
const {BLOCK_SIZE} = require('./constants');

class DataComponent extends React.Component {
	static propTypes = {
		direction: PropTypes.string.isRequired,
		isInward: PropTypes.bool.isRequired,
		isAnimating: PropTypes.bool.isRequired,
		isErasing: PropTypes.bool.isRequired,
		value: PropTypes.number.isRequired,
		onAnimationComplete: PropTypes.func.isRequired,
		onEraseAnimationComplete: PropTypes.func.isRequired,
	}

	componentDidMount() {
		if (this.props.isAnimating) {
			this.handleStartAnimation();
		}
	}

	componentWillReceiveProps(nextProps) {
		if (!this.props.isAnimating && nextProps.isAnimating) {
			this.handleStartAnimation();
		}

		if (this.props.isAnimating && !nextProps.isAnimating) {
			this.handleStopAnimation();
		}
	}

	handleStartAnimation = () => {
		this.addAnimation(({target}) => (
			TweenLite.to(target, 0.4, Object.assign({
				transformOrigin: 'center center',
				ease: Power0.easeNone,
				onComplete: () => {
					this.props.onAnimationComplete();
				},
			}, this.getAnimationProperties(do {
				if (this.props.isInward) {
					if (this.props.direction === 'top') {
						'down';
					} else if (this.props.direction === 'right') {
						'left';
					} else if (this.props.direction === 'left') {
						'right';
					} else if (this.props.direction === 'bottom') {
						'up';
					}
				} else {
					if (this.props.direction === 'top') {
						'up';
					} else if (this.props.direction === 'right') {
						'right';
					} else if (this.props.direction === 'left') {
						'left';
					} else if (this.props.direction === 'bottom') {
						'down';
					}
				}
			})))
		));
	}

	// TODO: implement
	handleStopAnimation = () => {

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

	getAnimationProperties = (direction) => {
		if (direction === 'down') {
			return {y: `+=${BLOCK_SIZE / 2}`};
		}

		if (direction === 'right') {
			return {x: `+=${BLOCK_SIZE / 2}`};
		}

		if (direction === 'left') {
			return {x: `-=${BLOCK_SIZE / 2}`};
		}

		assert(direction === 'up');
		return {y: `-=${BLOCK_SIZE / 2}`};
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
