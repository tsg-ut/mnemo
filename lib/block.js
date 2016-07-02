const EventEmitter = require('events');

class Block extends EventEmitter {
	constructor(config) {
		super();
	}
}

module.exports = Block;
