const React = require('react');
const PropTypes = require('prop-types');
const GSAP = require('react-gsap-enhancer');
const assert = require('assert');
// TODO: scoped require
const {TweenLite, Power0} = require('gsap');
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

		if (this.props.isErasing) {
			this.handleStartErasion();
		}
	}

	componentWillReceiveProps(nextProps) {
		if (!this.props.isAnimating && nextProps.isAnimating) {
			this.handleStartAnimation();
		}

		if (this.props.isAnimating && !nextProps.isAnimating) {
			this.handleStopAnimation();
		}

		if (!this.props.isErasing && nextProps.isErasing) {
			this.handleStartErasion();
		}

		if (this.props.isErasing && !nextProps.isErasing) {
			this.handleStopErasion();
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
			}, this.getAnimationProperties()))
		));
	}

	// TODO: implement
	handleStopAnimation = () => {
	}

	handleStartErasion = () => {
		this.addAnimation(({target}) => (
			TweenLite.to(target, 0.4, Object.assign({
				transformOrigin: 'center center',
				ease: Power0.easeNone,
				scale: 2,
				opacity: 0,
				onComplete: () => {
					this.props.onEraseAnimationComplete();
				},
			}))
		));
	}

	// TODO: implement
	handleStopErasion = () => {
	}

	getAnimationProperties = (direction) => {
		if (this.props.isInward) {
			if (this.props.direction === 'top') {
				return {y: `+=${BLOCK_SIZE / 2}`};
			}

			if (this.props.direction === 'right') {
				return {x: `-=${BLOCK_SIZE / 2}`};
			}

			if (this.props.direction === 'left') {
				return {x: `+=${BLOCK_SIZE / 2}`};
			}

			assert(this.props.direction === 'bottom');
			return {y: `-=${BLOCK_SIZE / 2}`};
		}

		if (this.props.direction === 'top') {
			return {y: `-=${BLOCK_SIZE / 2}`};
		}

		if (this.props.direction === 'right') {
			return {x: `+=${BLOCK_SIZE / 2}`};
		}

		if (this.props.direction === 'left') {
			return {x: `-=${BLOCK_SIZE / 2}`};
		}

		assert(this.props.direction === 'bottom');
		return {y: `+=${BLOCK_SIZE / 2}`};
	}

	getDisplayValue = () => {
		if (this.props.value === Infinity) {
			return '∞';
		}

		if (this.props.value === -Infinity) {
			return '-∞';
		}

		return this.props.value;
	}

	getInitialTransform = () => {
		if (this.props.isInward) {
			if (this.props.direction === 'top') {
				return `translate(${BLOCK_SIZE / 2}, 0)`;
			}

			if (this.props.direction === 'right') {
				return `translate(${BLOCK_SIZE}, ${BLOCK_SIZE / 2})`;
			}

			if (this.props.direction === 'left') {
				return `translate(0, ${BLOCK_SIZE / 2})`;
			}

			assert(this.props.direction === 'bottom');
			return `translate(${BLOCK_SIZE / 2}, ${BLOCK_SIZE})`;
		}

		return `translate(${BLOCK_SIZE / 2}, ${BLOCK_SIZE / 2})`;
	}

	render() {
		return (
			<g transform={this.getInitialTransform()}>
				<rect x="-9" y="-8" rx="3" width="18" height="16" fill="darkorange"/>
				<text
					x="0"
					y="0"
					fontSize="12"
					fill="white"
					textAnchor="middle"
					dominantBaseline="central"
				>
					{this.getDisplayValue()}
				</text>
			</g>
		);
	}
}

module.exports = GSAP.default()(DataComponent);
