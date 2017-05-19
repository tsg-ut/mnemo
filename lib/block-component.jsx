const React = require('react');
const PropTypes = require('prop-types');
const {id} = require('./util');
const {BLOCK_SIZE} = require('./constants');
const DataComponent = require('./data-component');

class BlockComponent extends React.Component {
	static propTypes = {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		rotate: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		block: PropTypes.object.isRequired,
		onClick: PropTypes.func.isRequired,
		onPassAnimationComplete: PropTypes.func.isRequired,
	}

	constructor(props, state) {
		super(props, state);

		this.dataAnimationResolvers = new WeakMap();

		this.props.block.on('get', ({direction, data}) => {
			this.setState({
				inputData: this.state.inputData.concat([{
					direction,
					data,
					isErasing: false,
				}]),
			});
		});

		this.props.block.on('pass', (passEvent) => {
			const inputAnimations = [];

			for (const [direction, data] of passEvent.in.entries()) {
				// MEMO: Immutable.js使いたい
				this.setState({
					animatingData: this.state.animatingData.concat([{
						direction,
						data,
						isInward: true,
						isErasing: false,
					}]),
					inputData: this.state.inputData.filter((inputData) => data !== inputData.data),
				});

				inputAnimations.push(new Promise((resolve) => {
					this.dataAnimationResolvers.set(data, resolve);
				}));
			}

			// MEMO: async/await使いたい
			Promise.all(inputAnimations).then(() => {
				const outputAnimations = [];

				for (const data of passEvent.in.values()) {
					this.setState({
						animatingData: this.state.animatingData.filter((animatingData) => (
							data !== animatingData.data
						)),
					});
				}

				for (const [direction, data] of passEvent.out.entries()) {
					this.setState({
						animatingData: this.state.animatingData.concat([{
							direction,
							data,
							isInward: false,
							isErasing: false,
						}]),
					});

					outputAnimations.push(new Promise((resolve) => {
						this.dataAnimationResolvers.set(data, resolve);
					}));
				}

				return Promise.all(outputAnimations);
			}).then(() => {
				for (const [direction, data] of passEvent.out.entries()) {
					this.setState({
						animatingData: this.state.animatingData.filter((animatingData) => (
							data !== animatingData.data
						)),
						outputData: this.state.outputData.concat([{
							direction,
							data,
							isErasing: false,
						}]),
					});
				}

				this.props.onPassAnimationComplete(passEvent);
			});
		});

		this.props.block.on('hand', (data) => {
			this.setState({
				outputData: this.state.outputData.filter((outputData) => (
					data !== outputData.data
				)),
			});
		});

		this.props.block.on('erase', (data) => {

		});

		this.state = {
			inputData: [], // Data in inputQueue
			outputData: [], // Data in outputQueue
			animatingData: [], // Data in animation
		};
	}

	handleDataAnimationComplete = (data) => {
		if (this.dataAnimationResolvers.has(data)) {
			this.dataAnimationResolvers.get(data)();
		}
	};

	handleDataEraseAnimationComplete = (data) => {
		this.setState({
			inputData: this.state.inputData.filter((inputData) => inputData.data !== data),
			animatingData: this.state.animatingData.filter((animatingData) => animatingData.data !== data),
			outputData: this.state.outputData.filter((outputData) => outputData.data !== data),
		});
	};

	render() {
		return (
			<g
				transform={`translate(${this.props.x * BLOCK_SIZE}, ${this.props.y * BLOCK_SIZE})`}
				onClick={this.handleClick}
			>
				{/* click event capture */}
				<rect
					className="block-click-capture"
					width={BLOCK_SIZE}
					height={BLOCK_SIZE}
					x="0"
					y="0"
					fill="transparent"
					onClick={this.props.onClick}
					onContextMenu={this.props.onClick}
				/>
				{/* data layer */}
				<g>
					{[
						...(this.state.inputData.map(({direction, data, isErasing}) => (
							<DataComponent
								key={id(data)}
								direction={direction}
								isInward={true}
								isAnimating={false}
								isErasing={isErasing}
								value={data.value}
								onAnimationComplete={this.handleDataAnimationComplete.bind(null, data)}
								onEraseAnimationComplete={this.handleDataEraseAnimationComplete.bind(null, data)}
							/>
						))),
						...(this.state.animatingData.map(({direction, data, isInward, isErasing}) => (
							<DataComponent
								key={id(data)}
								direction={direction}
								isInward={isInward}
								isAnimating={true}
								isErasing={isErasing}
								value={data.value}
								onAnimationComplete={this.handleDataAnimationComplete.bind(null, data)}
								onEraseAnimationComplete={this.handleDataEraseAnimationComplete.bind(null, data)}
							/>
						))),
						...(this.state.outputData.map(({direction, data, isErasing}) => (
							<DataComponent
								key={id(data)}
								direction={direction}
								isInward={false}
								isAnimating={false}
								isErasing={isErasing}
								value={data.value}
								onAnimationComplete={this.handleDataAnimationComplete.bind(null, data)}
								onEraseAnimationComplete={this.handleDataEraseAnimationComplete.bind(null, data)}
							/>
						))),
					]}
				</g>
			</g>
		);
	}
}

module.exports = BlockComponent;
