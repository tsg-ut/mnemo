require('core-js/shim');

const $ = require('jquery');
const stageConfigs = require('./stages.json');
const Game = require('./game');

$(document).ready(() => {
    const game = new Game($('.stage'), stageConfigs);
});
