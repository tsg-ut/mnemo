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

  It 'carries input data to output when plugged input and output by wires' ->
    resolve, reject <~ new Promise _

    for y from 0 til 4
      @board.place-block x: 2, y: y, type: \wireI, rotate: 0

    @board.on 'output' (output-value) ->
      expect output-value .to.equal 100
      resolve!

    @board.input 100

    for x from 0 til 4
      @board.step!
      @board.pass!

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

  describe '#blockCount' ->
    It 'counts blocks in board' ->
      @board.place-block x: 2, y: 1, type: \wireI, rotate: 0
      @board.place-block x: 3, y: 2, type: \times-2, rotate: 0
      @board.place-block x: 0, y: 3, type: \diode, rotate: 1
      expect @board.block-count .to.equal 3
