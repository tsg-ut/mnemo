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
				inputData: this.state.data.concat([{direction, data}]),
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
						outputData: this.state.outputData.concat([{direction, data}]),
					});
				}

				this.props.onPassAnimationComplete(passEvent);
			});
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

	render() {
		return (
			<g transform={`translate(${this.props.x * BLOCK_SIZE}, ${this.props.y * BLOCK_SIZE})`} onClick={this.handleClick}>
				<rect
					className="block-border"
					width={BLOCK_SIZE}
					height={BLOCK_SIZE}
					x="0"
					y="0"
					onClick={this.props.onClick}
					onContextMenu={this.props.onClick}
				/>
				{
					(this.props.name !== 'empty') && (
						<image
							className="block"
							width={BLOCK_SIZE}
							height={BLOCK_SIZE}
							x="0"
							y="0"
							href={`image/${this.props.name}.png`}
							transform={`rotate(${this.props.rotate * 90})`}
							style={{
								transformOrigin: 'center',
								pointerEvents: 'none',
							}}
						/>
					)
				}
				{/* data layer */}
				<g>
					{
						this.state.data.map(({direction, data}) => (
							<DataComponent
								key={id(data)}
								direction={direction}
								isInward={true}
								value={data.value}
								onAnimationComplete={this.handleDataAnimationComplete}
							/>
						))
					}
				</g>
			</g>
		);
	}
}

module.exports = BlockComponent;
