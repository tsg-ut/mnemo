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
			inputData: Immutable.Map(), // Data in inputQueue
			outputData: Immutable.Map(), // Data in outputQueue
			animatingData: Immutable.Map(), // Data in animation
		};

		this.props.block.on('get', ({direction, data}) => {
			this.setState(({inputData}, curProps) => ({
				inputData: inputData.set(data, Immutable.Map({
					direction,
					isErasing: curProps.status === 'stop',
				})),
			}));
		});

		this.props.block.on('reject', (data) => {
			this.setState(({inputData, animatingData, outputData}) => ({
				inputData: inputData.has(data) ? inputData.setIn([data, 'isErasing'], true) : inputData,
				animatingData: animatingData.has(data) ? animatingData.setIn([data, 'isErasing'], true) : animatingData,
				outputData: outputData.has(data) ? outputData.setIn([data, 'isErasing'], true) : outputData,
			}));
		});

		this.props.block.on('pass', async (passEvent) => {
			const inputAnimations = [];
			for (const data of passEvent.in.values()) {
				inputAnimations.push(new Promise((resolve) => {
					this.dataAnimationResolvers.set(data, resolve);
				}));
			}
			const inwardStatePromise = new Promise((resolve) => {
				this.setState(
					// updater
					(prevState) => {
						let {inputData, animatingData} = prevState;

						inputData = inputData.deleteAll(passEvent.in.values());
						animatingData = animatingData.merge([...passEvent.in.entries()].map(([direction, data]) => [
							data,
							Immutable.Map({
								direction,
								isInward: true,
								isErasing: this.props.status === 'stop',
							}),
						]));
						return {inputData, animatingData};
					},
					// callback
					resolve
				);
			});
			await Promise.all([
				...inputAnimations,
				inwardStatePromise,
			]);

			this.setState(({animatingData}) => ({
				animatingData: animatingData.deleteAll(passEvent.in.values()),
			}));

			const outputAnimations = [];
			for (const data of passEvent.out.values()) {
				outputAnimations.push(new Promise((resolve) => {
					this.dataAnimationResolvers.set(data, resolve);
				}));
			}

			const outwardStatePromise = new Promise((resolve) => {
				this.setState(
					// updater
					(prevState) => {
						let {animatingData} = prevState;
						animatingData = animatingData.merge([...passEvent.out.entries()].map(([direction, data]) => [
							data,
							Immutable.Map({
								direction,
								isInward: false,
								isErasing: this.props.status === 'stop',
							}),
						]));

						return {animatingData};
					},
					// callback
					resolve
				);
			});
			await Promise.all([
				...outputAnimations,
				outwardStatePromise,
			]);

			this.setState(({animatingData, outputData}) => ({
				animatingData: animatingData.deleteAll(passEvent.out.values()),
				outputData: outputData.merge([...passEvent.out.entries()]
					.map(([direction, data]) => [
						data,
						Immutable.Map({
							direction,
							isErasing: this.props.status === 'stop',
						}),
					])),
			}));

			this.props.onPassAnimationComplete(passEvent);
		});

		this.props.block.on('put', ({direction, data}) => {
			if (this.props.boardEnds[direction]) {
				this.setState(({outputData}) => {
					assert(outputData.has(data));

					return {
						outputData: outputData.setIn([data, 'isErasing'], true),
					};
				});
			} else {
				this.setState(({outputData}) => ({
					outputData: outputData.delete(data),
				}));
			}
		});
	}

	componentDidUpdate(prevProps) {
		if (prevProps.status !== 'stop' && this.props.status === 'stop') {
			this.handleStop();
		}
	}

	handleStop() {
		const eraseAll = (map) => map.set('isErasing', true);

		this.setState(({inputData, animatingData, outputData}) => ({
			inputData: inputData.map(eraseAll),
			animatingData: animatingData.map(eraseAll),
			outputData: outputData.map(eraseAll),
		}));
	}

	handleDataAnimationComplete = (data) => {
		if (this.dataAnimationResolvers.has(data)) {
			this.dataAnimationResolvers.get(data)();
		}
	}

	handleDataEraseAnimationComplete = (data) => {
		this.setState(({inputData, animatingData, outputData}) => ({
			inputData: inputData.delete(data),
			animatingData: animatingData.delete(data),
			outputData: outputData.delete(data),
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
						...(this.state.inputData.map((map, data) => (
							<DataComponent
								key={id(data)}
								direction={map.get('direction')}
								isInward
								isAnimating={false}
								isErasing={map.get('isErasing')}
								value={data.value}
								data={data}
								onAnimationComplete={this.handleDataAnimationComplete}
								onEraseAnimationComplete={this.handleDataEraseAnimationComplete}
								isRapid={this.props.isRapid}
								viewBoxScale={this.props.viewBoxScale}
							/>
						)).values()),
						...(this.state.animatingData.map((map, data) => (
							<DataComponent
								key={id(data)}
								direction={map.get('direction')}
								isInward={map.get('isInward')}
								isAnimating
								isErasing={map.get('isErasing')}
								value={data.value}
								data={data}
								onAnimationComplete={this.handleDataAnimationComplete}
								onEraseAnimationComplete={this.handleDataEraseAnimationComplete}
								isRapid={this.props.isRapid}
								viewBoxScale={this.props.viewBoxScale}
							/>
						)).values()),
						...(this.state.outputData.map((map, data) => (
							<DataComponent
								key={id(data)}
								direction={map.get('direction')}
								isInward={false}
								isAnimating={false}
								isErasing={map.get('isErasing')}
								value={data.value}
								data={data}
								onAnimationComplete={this.handleDataAnimationComplete}
								onEraseAnimationComplete={this.handleDataEraseAnimationComplete}
								isRapid={this.props.isRapid}
								viewBoxScale={this.props.viewBoxScale}
							/>
						)).values()),
					]}
				</g>
			</g>
		);
	}
}

module.exports = BlockComponent;
