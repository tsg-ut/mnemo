
class Panel{
    constructor(stage, parts){
        this.stage = stage;
        this.parts = parts;
    }

    takeAndPlace(blockName,x,y){
        if (this.parts.indexOf(blockName))
            this.stage.$board.placeBlock(x,y,blockName);
    }
}

module.exports = Panel;
