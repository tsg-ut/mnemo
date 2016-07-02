
class Panel {
    constructor(stage, parts) {
        this.stage = stage;
        this.parts = parts;
    }

    takeAndPlace(blockName, x, y) {
        const index = this.parts.indexOf(blockName);
        if (index !== -1) {
            this.parts.splice(index, 1);
            this.stage.board.placeBlock(x, y, blockName);
        }
    }
}

module.exports = Panel;
