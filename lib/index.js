const $ = require('jquery');
const stageConfig = require('./stages.json')[0];
const Stage = require('./stage');

$(document).ready(() => {
	const $stage = $('.stage');
	const stage = new Stage($stage, stageConfig);
});
