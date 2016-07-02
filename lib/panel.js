
class Panel{
    constructor(stage, parts){
        this.stage = stage;
        this.parts = parts;
    }

    takeAndPlace(blockName,x,y){
        this.stage.$board.placeBlock(x,y,blockName);
    }
}
        

module.exports = Panel;
