const React = require('react');
const PropTypes = require('prop-types');
const {id} = require('./util');
const {BLOCK_SIZE} = require('./constants');
const DataComponent = require('./data-component.jsx');

class BlockComponent extends React.Component {
	static propTypes = {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		ends: PropTypes.arrayOf(PropTypes.string).isRequired,
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

		this.props.block.on('get', ({direction, data}) => {
			this.setState({
				inputData: this.state.inputData.concat([{
					direction,
					data,
					isErasing: this.props.status === 'stop',
				}]),
			});
		});

		this.props.block.on('pass', async (passEvent) => {
			const inputAnimations = [];

			for (const [direction, data] of passEvent.in.entries()) {
				// MEMO: Immutable.js使いたい
				this.setState({
					animatingData: this.state.animatingData.concat([{
						direction,
						data,
						isInward: true,
						isErasing: this.props.status === 'stop',
					}]),
					inputData: this.state.inputData.filter((inputData) => data !== inputData.data),
				});

				inputAnimations.push(new Promise((resolve) => {
					this.dataAnimationResolvers.set(data, resolve);
				}));
			}

			await Promise.all(inputAnimations);

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
						isErasing: this.props.status === 'stop',
					}]),
				});

				outputAnimations.push(new Promise((resolve) => {
					this.dataAnimationResolvers.set(data, resolve);
				}));
			}

			await Promise.all(outputAnimations);

			for (const [direction, data] of passEvent.out.entries()) {
				this.setState({
					animatingData: this.state.animatingData.filter((animatingData) => (
						data !== animatingData.data
					)),
					outputData: this.state.outputData.concat([{
						direction,
						data,
						isErasing: this.props.status === 'stop',
					}]),
				});
			}

			this.props.onPassAnimationComplete(passEvent);
		});

		this.props.block.on('put', ({direction, data}) => {
			if (this.props.ends.includes(direction)) {
				this.state.inputData.forEach((inputData) => {
					if (inputData.data === data) {
						inputData.isErasing = true;
					}
				});

				this.state.animatingData.forEach((animatingData) => {
					if (animatingData.data === data) {
						animatingData.isErasing = true;
					}
				});

				this.state.outputData.forEach((outputData) => {
					if (outputData.data === data) {
						outputData.isErasing = true;
					}
				});

				this.setState({
					inputData: this.state.inputData,
					animatingData: this.state.animatingData,
					outputData: this.state.outputData,
				});
			} else {
				this.setState({
					outputData: this.state.outputData.filter((outputData) => (
						data !== outputData.data
					)),
				});
			}
		});

		this.props.block.on('reject', (data) => {
			this.state.inputData.forEach((inputData) => {
				if (inputData.data === data) {
					inputData.isErasing = true;
				}
			});

			this.state.animatingData.forEach((animatingData) => {
				if (animatingData.data === data) {
					animatingData.isErasing = true;
				}
			});

			this.state.outputData.forEach((outputData) => {
				if (outputData.data === data) {
					outputData.isErasing = true;
				}
			});

			this.setState({
				inputData: this.state.inputData,
				animatingData: this.state.animatingData,
				outputData: this.state.outputData,
			});
		});

		this.state = {
			inputData: [], // Data in inputQueue
			outputData: [], // Data in outputQueue
			animatingData: [], // Data in animation
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.status !== 'stop' && nextProps.status === 'stop') {
			this.handleStop();
		}
	}

	handleStop() {
		[this.state.inputData, this.state.animatingData, this.state.outputData].forEach((data) => {
			data.forEach((datum) => {
				datum.isErasing = true;
			});
		});

		this.setState({
			inputData: this.state.inputData,
			animatingData: this.state.animatingData,
			outputData: this.state.outputData,
		});
	}

	handleDataAnimationComplete = (data) => {
		if (this.dataAnimationResolvers.has(data)) {
			this.dataAnimationResolvers.get(data)();
		}
	}

	handleDataEraseAnimationComplete = (data) => {
		this.setState({
			inputData: this.state.inputData.filter((inputData) => inputData.data !== data),
			animatingData: this.state.animatingData.filter((animatingData) => animatingData.data !== data),
			outputData: this.state.outputData.filter((outputData) => outputData.data !== data),
		});
	}

	handleClick = (event) => (
		this.props.onClick(event, this.props.x, this.props.y)
	)

	render() {
		return (
			<g
				transform={`translate(${this.props.x * BLOCK_SIZE}, ${this.props.y * BLOCK_SIZE})`}
			>
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
						...(this.state.inputData.map(({direction, data, isErasing}) => (
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
						))),
						...(this.state.animatingData.map(({direction, data, isInward, isErasing}) => (
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
						))),
						...(this.state.outputData.map(({direction, data, isErasing}) => (
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
						))),
					]}
				</g>
			</g>
		);
	}
}

module.exports = BlockComponent;
