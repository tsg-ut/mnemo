require! {
  chai: {expect}
  '../../lib/board': Board
  '../../lib/block': Block
}

It = global.it

describe 'Board' ->
  before-each ->
    @board = new Board do
      inputX: 2
      outputX: 2
      width: 5
      height: 4

  describe 'constructor' ->
    It 'creates height x width numbers of empty blocks' ->
      expect @board.blocks .to.have.length-of 4

      @board.blocks.for-each (row) ->
        expect row .to.have.length-of 5

        row.for-each (block) ->
          expect block .to.be.an.instanceof Block
          expect block.config.type .to.equal 'empty'

  describe '#input' ->
    It 'executes the board' ->
      @board.input 100
      expect @board.executing .to.be.true

    It 'is wireI only board and carries data to output' ->
      resolve, reject <~ new Promise _
      
      for y in [0,1,2,3]
        @board.place-block 2, y, 'wireI', 0
      
      @board.on 'output' (output-value) ->
          expect output-value .to.equal 100
          resolve!
      
      @board.input 100
      for x in [0,1,2,3]
        @board.step!
        @board.pass!
