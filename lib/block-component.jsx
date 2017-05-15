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
		onDataAnimationComplete: PropTypes.func.isRequired,
	}

	constructor(props, state) {
		super(props, state);

		this.props.block.on('get', ({direction, data}) => {
			this.setState({
				data: this.state.data.concat([{direction, data}]),
			});
		});

		this.state = {
			data: [],
		};
	}

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
								onAnimationComplete={this.props.onDataAnimationComplete.bind(null, data)}
							/>
						))
					}
				</g>
			</g>
		);
	}
}

module.exports = BlockComponent;
