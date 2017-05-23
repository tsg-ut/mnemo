require('./analytics');

require('core-js/es5');
require('core-js/es6');

const querystring = require('querystring');
const $ = require('jquery');
const stageConfigs = require('../stages');
const Game = require('./game');
const {isiOS, isMac} = require('./util');

// parse GET parameters of the location
const params = querystring.parse(location.search.slice(1));

if (params.fx === 'off') {
	$.fx.off = true;
}

// Modernizr-like OS detection
if (isiOS()) {
	$('html').addClass('ios');
} else {
	$('html').addClass('no-ios');
}

if (isMac()) {
	$('html').addClass('mac');
} else {
	$('html').addClass('no-mac');
}

$(() => {
	new Game(stageConfigs);
});
