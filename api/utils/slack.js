const Slack = require('node-slack');
const slack = new Slack(process.env.SLACK_WEBHOOK);

module.exports.send = ({text}) => {
	slack.send({
		text,
		channel: '#mnemo',
	});
};
