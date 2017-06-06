require! {
  chai: {expect}
  seedrandom
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
      clock-limit: 100

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
      expect @board.status .to.equal 'executing'

  describe '#dataCount' ->
    It 'counts data in board' ->
      @board.place-block x: 2, y: 0, type: \wireXdot, rotate: 0
      @board.input 100
      @board.step!

      expect @board.data-count .to.equal 3

  describe '#dataExists' ->
    It 'returns true if any data exist on the current board' ->
      @board.place-block x: 2, y: 0, type: \wireXdot, rotate: 0
      @board.input 100
      expect @board.data-exists .to.be.true
      @board.step!
      expect @board.data-exists .to.be.true
      @board.pass!
      expect @board.data-exists .to.be.true
      @board.step!
      expect @board.data-exists .to.be.false

  describe '#blockCount' ->
    It 'counts blocks in board' ->
      @board.place-block x: 2, y: 1, type: \wireI, rotate: 0
      @board.place-block x: 3, y: 2, type: \times-2, rotate: 0
      @board.place-block x: 0, y: 3, type: \diode, rotate: 1
      expect @board.block-count .to.equal 3

  describe '#weighedBlockCount' ->
    It 'sums up block weights in board' ->
      @board.place-block x: 2, y: 1, type: \wireI, rotate: 0
      @board.place-block x: 3, y: 2, type: \times-2, rotate: 0
      @board.place-block x: 0, y: 3, type: \diode, rotate: 1
      expect @board.weighed-block-count .to.equal 6

  describe '#boardData' ->
    It 'return JSON data of the current board state' ->
      @board.place-block x: 0, y: 3, type: \diode, rotate: 1
      @board.place-block x: 2, y: 1, type: \wireI, rotate: 0
      @board.place-block x: 3, y: 2, type: \times-2, rotate: 0

      expect @board.board-data .to.deep.equal [
        * x: 2, y: 1, type: \wireI, rotate: 0
        * x: 3, y: 2, type: \times-2, rotate: 0
        * x: 0, y: 3, type: \diode, rotate: 1
      ]

  describe '#getSeededRandom' ->
    It 'returns seeded random function with board data' ->
      @board.place-block x: 1, y: 1, type: \diode, rotate: 1

      expected-random = seedrandom '[[1,1,"diode",1]]'
      result-random = @board.get-seeded-random!

      expect result-random .to.be.a \function

      expected = expected-random!
      result = result-random!

      expect result .to.be.a \number
      expect result .to.equal expected

  describe '#run' ->
    It 'run the board until the end and report the output' ->
      @board.place-block x: 2, y: 0, type: \wireI, rotate: 0
      @board.place-block x: 2, y: 1, type: \minus-1, rotate: 0
      @board.place-block x: 2, y: 2, type: \times-2, rotate: 0
      @board.place-block x: 2, y: 3, type: \wireI, rotate: 0

      @board.run 7

      expect @board.output-value .to.equal 12
      expect @board.clock .to.equal 4

    It 'remains outputValue to null when no output was generated' ->
      @board.place-block x: 2, y: 0, type: \wireI, rotate: 0
      @board.place-block x: 2, y: 1, type: \minus-1, rotate: 0
      @board.place-block x: 2, y: 2, type: \times-2, rotate: 1 # cut
      @board.place-block x: 2, y: 3, type: \wireI, rotate: 0

      @board.run 7

      expect @board.output-value .to.be.null
      expect @board.clock .to.equal 3

    It 'limits maximum execution clocks to stage\'s clock limit' ->
      @board.place-block x: 1, y: 0, type: \wireL, rotate: 1
      @board.place-block x: 2, y: 0, type: \wireT, rotate: 3
      @board.place-block x: 1, y: 1, type: \wireL, rotate: 0
      @board.place-block x: 2, y: 1, type: \wireL, rotate: 3

      @board.run 7

      expect @board.output-value .to.be.null
      expect @board.clock .to.equal 100

    It 'limits simultaneous data count to 100' ->
      for x from 0 to 4
        for y from 0 to 2
          @board.place-block {x, y, type: \wireXdot, rotate: 0}

      @board.run 7

      expect @board.output-value .to.be.null
      expect @board.clock .to.be.above 1 .and.below 100
