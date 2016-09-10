require! {
  chai: {expect}
  # Shims for phantomjs environment
  'core-js/es5'
  'core-js/es6'
  '../../lib/board': Board
  '../../lib/block': Block
  '../../lib/data': Data
}

It = global.it

describe 'Block' ->
  before-each ->
    @board = new Board do
      inputX: 0
      outputX: 0
      width: 1
      height: 1

  describe 'WireI block' ->
    context 'without rotation' ->
      before-each ->
        @board.place-block x: 0, y: 0, type: \wireI, rotate: 0
        @block = @board.get-block 0, 0

      It 'conveys data from top to bottom' ->
        data = new Data @board, 334
        @block.input 'top', data
        @block.step!

        expect @block.output-queues.get \bottom .to.deep.equal [data]

      It 'conveys data from bottom to top' ->
        data = new Data @board, 334
        @block.input 'bottom', data
        @block.step!

        expect @block.output-queues.get \top .to.deep.equal [data]

      It 'erases any data put on the right side' ->
        resolve, reject <~ new Promise _

        data = new Data @board, 334
        @block.input 'right', data

        @block.on 'erase' (erased-data) ->
          expect erased-data .to.equal data
          resolve!

        @block.step!

    context 'with rotation' ->
      before-each ->
        @board.place-block x: 0, y: 0, type: \wireI, rotate: 1
        @block = @board.get-block 0, 0

      It 'conveys data from left to right' ->
        data = new Data @board, 334
        @block.input 'left', data
        @block.step!

        expect @block.output-queues.get \right .to.deep.equal [data]
