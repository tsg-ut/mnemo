const React = require('react');
const PropTypes = require('prop-types');
const Immutable = require('immutable');
const assert = require('assert');
const {id} = require('./util');
const {BLOCK_SIZE} = require('./constants');
const DataComponent = require('./data-component.jsx');

class BlockComponent extends React.Component {
	static propTypes = {
		boardEnds: PropTypes.shape({
			left: PropTypes.bool.isRequired,
			right: PropTypes.bool.isRequired,
			top: PropTypes.bool.isRequired,
			bottom: PropTypes.bool.isRequired,
		}).isRequired,
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		status: PropTypes.string.isRequired,
		block: PropTypes.shape({
			on: PropTypes.func.isRequired,
		}).isRequired,
		onClick: PropTypes.func.isRequired,
		onPassAnimationComplete: PropTypes.func.isRequired,
		isRapid: PropTypes.bool.isRequired,
		viewBoxScale: PropTypes.number,
	}

	static defaultProps = {
		viewBoxScale: null,
	}

	constructor(props, state) {
		super(props, state);

		this.dataAnimationResolvers = new WeakMap();

		this.state = {
			inputData: new Immutable.Map(), // Data in inputQueue
			outputData: new Immutable.Map(), // Data in outputQueue
			animatingData: new Immutable.Map(), // Data in animation
		};

		this.props.block.on('get', ({direction, data}) => {
			this.setState({
				inputData: this.state.inputData.set(data, {
					direction,
					isErasing: this.props.status === 'stop',
				}),
			});
		});

		this.props.block.on('pass', async (passEvent) => {
			const inputAnimations = [];

			for (const [direction, data] of passEvent.in.entries()) {
				this.setState({
					animatingData: this.state.animatingData.set(data, {
						direction,
						isInward: true,
						isErasing: this.props.status === 'stop',
					}),
					inputData: this.state.inputData.delete(data),
				});

				inputAnimations.push(new Promise((resolve) => {
					this.dataAnimationResolvers.set(data, resolve);
				}));
			}

			await Promise.all(inputAnimations);

			const outputAnimations = [];

			for (const data of passEvent.in.values()) {
				this.setState({
					animatingData: this.state.animatingData.delete(data),
				});
			}

			for (const [direction, data] of passEvent.out.entries()) {
				this.setState({
					animatingData: this.state.animatingData.set(data, {
						direction,
						isInward: false,
						isErasing: this.props.status === 'stop',
					}),
				});

				outputAnimations.push(new Promise((resolve) => {
					this.dataAnimationResolvers.set(data, resolve);
				}));
			}

			await Promise.all(outputAnimations);

			for (const [direction, data] of passEvent.out.entries()) {
				this.setState({
					animatingData: this.state.animatingData.delete(data),
					outputData: this.state.outputData.set(data, {
						direction,
						isErasing: this.props.status === 'stop',
					}),
				});
			}

			this.props.onPassAnimationComplete(passEvent);
		});

		this.props.block.on('put', ({direction, data}) => {
			if (this.props.boardEnds[direction]) {
				let datum = this.state.outputData.get(data);
				//assert(typeof datum !== 'undefined');
				if (typeof datum === 'undefined') {
					return;
				}

				datum.isErasing = true;

				this.setState({
					outputData: this.state.outputData.set(data, datum),
				});
			} else {
				this.setState({
					outputData: this.state.outputData.delete(data),
				});
			}
		});

		this.props.block.on('reject', (data) => {
			let datum = this.state.inputData.get(data);
			//assert(typeof datum !== 'undefined');
			if (typeof datum === 'undefined') {
				return;
			}

			datum.isErasing = true;

			this.setState({
				inputData: this.state.inputData.set(data, datum),
			});
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.status !== 'stop' && nextProps.status === 'stop') {
			this.handleStop();
		}
	}

	handleStop() {
		const eraseAll = (obj) => Object.assign(obj, {isErasing: true});

		this.setState({
			inputData: this.state.inputData.map(eraseAll),
			animatingData: this.state.animatingData.map(eraseAll),
			outputData: this.state.outputData.map(eraseAll),
		});
	}

	handleDataAnimationComplete = (data) => {
		if (this.dataAnimationResolvers.has(data)) {
			this.dataAnimationResolvers.get(data)();
		}
	}

	handleDataEraseAnimationComplete = (data) => {
		this.setState({
			inputData: this.state.inputData.delete(data),
			animatingData: this.state.animatingData.delete(data),
			outputData: this.state.outputData.delete(data),
		});
	}

	handleClick = (event) => (
		this.props.onClick(event, this.props.x, this.props.y)
	)

	render() {
		return (
			<g>
				{/* click event capture */}
				<rect
					className="block-click-capture"
					width={BLOCK_SIZE}
					height={BLOCK_SIZE}
					x="0"
					y="0"
					fill="transparent"
					onClick={this.handleClick}
					onContextMenu={this.handleClick}
					cursor="pointer"
				/>
				{/* data layer */}
				<g>
					{[
						...(this.state.inputData.map(({direction, isErasing}, data) => (
							<DataComponent
								key={id(data)}
								direction={direction}
								isInward
								isAnimating={false}
								isErasing={isErasing}
								value={data.value}
								data={data}
								onAnimationComplete={this.handleDataAnimationComplete}
								onEraseAnimationComplete={this.handleDataEraseAnimationComplete}
								isRapid={this.props.isRapid}
								viewBoxScale={this.props.viewBoxScale}
							/>
						)).valueSeq().toArray()),
						...(this.state.animatingData.map(({direction, isInward, isErasing}, data) => (
							<DataComponent
								key={id(data)}
								direction={direction}
								isInward={isInward}
								isAnimating
								isErasing={isErasing}
								value={data.value}
								data={data}
								onAnimationComplete={this.handleDataAnimationComplete}
								onEraseAnimationComplete={this.handleDataEraseAnimationComplete}
								isRapid={this.props.isRapid}
								viewBoxScale={this.props.viewBoxScale}
							/>
						)).valueSeq().toArray()),
						...(this.state.outputData.map(({direction, isErasing}, data) => (
							<DataComponent
								key={id(data)}
								direction={direction}
								isInward={false}
								isAnimating={false}
								isErasing={isErasing}
								value={data.value}
								data={data}
								onAnimationComplete={this.handleDataAnimationComplete}
								onEraseAnimationComplete={this.handleDataEraseAnimationComplete}
								isRapid={this.props.isRapid}
								viewBoxScale={this.props.viewBoxScale}
							/>
						)).valueSeq().toArray()),
					]}
				</g>
			</g>
		);
	}
}

module.exports = BlockComponent;
