const React = require('react');
const PropTypes = require('prop-types');
const GSAP = require('react-gsap-enhancer');
const assert = require('assert');
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
		isRapid: PropTypes.bool.isRequired,
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

		if (!this.props.isRapid && nextProps.isRapid) {
			this.handleStartRapid();
		}
	}

	handleStartAnimation = () => {
		const duration = this.props.isRapid ? 0 : 0.4;

		this.animation = this.addAnimation(({target}) => (
			TweenLite.to(target, duration, Object.assign({
				transformOrigin: 'center center',
				ease: Power0.easeNone,
				onComplete: () => {
					setTimeout(() => {
						this.props.onAnimationComplete();
					}, 0);
				},
			}, this.getAnimationProperties()))
		));
	}

	handleStopAnimation = () => {
		this.animation.pause();
	}

	handleStartErasion = () => {
		if (this.animation) {
			this.animation.pause();
		}

		const duration = this.props.isRapid ? 0 : 0.4;

		this.erasion = this.addAnimation(({target}) => (
			TweenLite.to(target, duration, Object.assign({
				transformOrigin: 'center center',
				ease: Power0.easeNone,
				scale: 2,
				opacity: 0,
				onComplete: () => {
					setTimeout(() => {
						this.props.onEraseAnimationComplete();
					}, 0);
				},
			}))
		));
	}

	handleStopErasion = () => {
		this.erasion.pause();
	}

	handleStartRapid() {
		if (this.animation) {
			this.animation.seek(this.animation.duration(), false);
		}

		if (this.erasion) {
			this.erasion.seek(this.erasion.duration(), false);
		}
	}

	getAnimationProperties = () => {
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
