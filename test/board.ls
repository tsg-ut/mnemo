require! {
  chai: {expect}
  '../lib/board': Board
  '../lib/block': Block
}

It = global.it

describe 'Board' ->
  before-each ->
    @board = new Board do
      inputX: 2
      outputX: 2
      input: [1 4 9]
      output: [2 5 10]
      width: 5
      height: 4
      statement: 'Increment numbers'

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
