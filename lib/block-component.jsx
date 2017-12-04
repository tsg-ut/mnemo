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
			this.setState((prevState, curProps) => ({
				inputData: prevState.inputData.set(data, {
					direction,
					isErasing: curProps.status === 'stop',
				}),
			}));
		});

		this.props.block.on('reject', (data) => {
			this.setState((prevState) => {
				let {inputData, animatingData, outputData} = prevState;

				if (inputData.has(data)) {
					const datum = inputData.get(data);
					inputData = inputData.set(data, Object.assign(datum, {isErasing: true}));
				}
				if (animatingData.has(data)) {
					const datum = animatingData.get(data);
					animatingData = animatingData.set(data, Object.assign(datum, {isErasing: true}));
				}
				if (outputData.has(data)) {
					const datum = outputData.get(data);
					outputData = outputData.set(data, Object.assign(datum, {isErasing: true}));
				}
				return {inputData, animatingData, outputData};
			});
		});

		this.props.block.on('pass', async (passEvent) => {
			const inputAnimations = [];
			const inwardPromise = new Promise((resolve) => {
				this.setState(
					// updater
					(prevState) => {
						let {inputData, animatingData} = prevState;

						for (const [direction, data] of passEvent.in.entries()) {
							animatingData = animatingData.set(data, {
								direction,
								isInward: true,
								isErasing: this.props.status === 'stop',
							});
							inputData = inputData.delete(data);

							inputAnimations.push(new Promise((resolve) => {
								this.dataAnimationResolvers.set(data, resolve);
							}));
						}
						return {
							animatingData,
							inputData,
						};
					},
					// callback
					() => Promise.all(inputAnimations).then(() => resolve())
				);
			});
			await inwardPromise;

			this.setState((prevState) => {
				let {animatingData} = prevState;
				for (const data of passEvent.in.values()) {
					animatingData = animatingData.delete(data);
				}
				return {animatingData};
			});

			const outputAnimations = [];
			const outwardPromise = new Promise((resolve) => {
				this.setState(
					// updater
					(prevState) => {
						let {animatingData} = prevState;

						for (const [direction, data] of passEvent.out.entries()) {
							animatingData = animatingData.set(data, {
								direction,
								isInward: false,
								isErasing: this.props.status === 'stop',
							});
							outputAnimations.push(new Promise((resolve) => {
								this.dataAnimationResolvers.set(data, resolve);
							}));
						}
						return {animatingData};
					},
					// callback
					() => Promise.all(outputAnimations).then(() => resolve())
				);
			});
			await outwardPromise;

			this.setState((prevState) => {
				let {animatingData, outputData} = prevState;
				for (const [direction, data] of passEvent.out.entries()) {
					animatingData = animatingData.delete(data);
					outputData = outputData.set(data, {
						direction,
						isErasing: this.props.status === 'stop',
					});
				}
				return {animatingData, outputData};
			});

			this.props.onPassAnimationComplete(passEvent);
		});

		this.props.block.on('put', ({direction, data}) => {
			if (this.props.boardEnds[direction]) {
				this.setState((prevState) => {
					assert(prevState.outputData.has(data));
					const datum = Object.assign(prevState.outputData.get(data), {isErasing: true});

					return {
						outputData: prevState.outputData.set(data, datum),
					};
				});
			} else {
				this.setState((prevState) => ({
					outputData: prevState.outputData.delete(data),
				}));
			}
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.status !== 'stop' && nextProps.status === 'stop') {
			this.handleStop();
		}
	}

	handleStop() {
		const eraseAll = (obj) => Object.assign(obj, {isErasing: true});

		this.setState((prevState) => ({
			inputData: prevState.inputData.map(eraseAll),
			animatingData: prevState.animatingData.map(eraseAll),
			outputData: prevState.outputData.map(eraseAll),
		}));
	}

	handleDataAnimationComplete = (data) => {
		if (this.dataAnimationResolvers.has(data)) {
			this.dataAnimationResolvers.get(data)();
		}
	}

	handleDataEraseAnimationComplete = (data) => {
		this.setState((prevState) => ({
			inputData: prevState.inputData.delete(data),
			animatingData: prevState.animatingData.delete(data),
			outputData: prevState.outputData.delete(data),
		}));
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
