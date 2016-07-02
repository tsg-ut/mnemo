const EventEmitter = require('events');

class Block extends EventEmitter {
	constructor(board, $block, config) {
		super();
		this.board = board;
		this.$block = $block;
		this.x = config.x;
		this.y = config.y;
		this.config = config;
		this.queues = {
			top: [],
			left: [],
			right: [],
			bottom: [],
		};
	}

	get center() {
		return {
			x: (this.x + .5) * 50,
			y: (this.y + .5) * 50,
		};
	}

	get top() {
		return {
			x: (this.x + .5) * 50,
			y: this.y * 50,
		};
	}

	get left() {
		return {
			x: this.x * 50,
			y: (this.y + .5) * 50,
		};
	}

	get right() {
		return {
			x: (this.x + 1) * 50,
			y: (this.y + .5) * 50,
		};
	}

	get bottom() {
		return {
			x: (this.x + .5) * 50,
			y: (this.y + 1) * 50,
		};
	}

	passTo(direction, data) {
        switch (direction){
            case "top":
                if (0<= this.y-1)
                    board.getBlock(this.x,this.y-1).input("bottom", data);
                break;
            case "bottom":
                if (board.height > this.y+1)
                    board.getBlock(this.x,this.y+1).input("top", data);
                break;
            case "left":
                if (0 <= this.x-1)
                    board.getBlock(this.x-1,this.y).input("right", data);
                break;
            case "right":
                if (board.width > this.x+1)
                    board.getBlock(this.x+1,this.y).input("left", data);
                break;
            default:
                console.log("error: Block.passTo");
                break;
        }
  
	}

	input(position, data) {
		this.queues[position].push(data);
        console.log(data);
        console.log(position);
		this.checkEmission();
	}

	checkEmission() {
		for (let source in this.queues) {
			const queue = this.queues[source];
			if (queue.length !== 0 && this.config.io.plugs.includes(source)) {
				const destination = this.config.io.plugs.find((direction) => direction !== source);
				const data = queue.shift();
				// pass through
				data.$element.animate(data.getPosition('center'), 400, 'linear').promise().then(() => {
					return data.$element.animate(data.getPosition(destination), 400, 'linear').promise();
				});
			}
		}
	}
}

module.exports = Block;
