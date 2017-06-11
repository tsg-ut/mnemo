const React = require('react');
const PropTypes = require('prop-types');

class IOComponent extends React.Component {
	static propTypes = {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		value: PropTypes.string,
		correctness: PropTypes.bool,
		color: PropTypes.string.isRequired,
		filled: PropTypes.bool.isRequired,
		nullable: PropTypes.bool.isRequired,
	}

	static defaultProps = {
		value: null,
		correctness: null,
		filled: false,
		nullable: false,
	}

	render() {
		return (
			<g transform={`translate(${this.props.x}, ${this.props.y})`}>
				<rect
					width="150"
					height="50"
					rx="8"
					fill={this.props.filled ? this.props.color : 'white'}
					stroke={this.props.color}
					strokeWidth="3"
					style={{
						transition: 'fill 0.3s ease, stroke 0.3s ease',
					}}
				/>
				{this.props.correctness === true && (
					<g transform="translate(75, 25)" className="correctness">
						<circle
							cx="0"
							cy="0"
							r="35"
							fill="none"
							stroke="red"
							strokeWidth="14"
						/>
					</g>
				)}
				{this.props.correctness === false && (
					<g transform="translate(75, 25)" className="correctness">
						<line
							x1="-30"
							y1="-30"
							x2="30"
							y2="30"
							fill="none"
							stroke="blue"
							strokeWidth="14"
						/>
						<line
							x1="30"
							y1="-30"
							x2="-30"
							y2="30"
							fill="none"
							stroke="blue"
							strokeWidth="14"
						/>
					</g>
				)}
				{(!this.props.nullable || this.props.value !== null) && (
					<text
						x="75"
						y="25"
						fontSize="30"
						fontFamily="'Exo 2'"
						fontWeight="900"
						fill={this.props.filled ? 'white' : '#333'}
						textAnchor="middle"
						dominantBaseline="central"
						style={{
							textShadow: this.props.filled ? '' : '0 0 15px white',
						}}
					>
						{this.props.value === null ? '???' : this.props.value}
					</text>
				)}
			</g>
		);
	}
}

module.exports = IOComponent;
