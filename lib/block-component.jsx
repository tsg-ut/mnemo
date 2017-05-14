const React = require('react');
const PropTypes = require('prop-types');
const {BLOCK_SIZE} = require('./constants');

class BlockComponent extends React.Component {
	static propTypes = {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		rotate: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		block: PropTypes.object.isRequired,
		onClick: PropTypes.func.isRequired,
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

					}
				</g>
			</g>
		);
	}
}

module.exports = BlockComponent;
