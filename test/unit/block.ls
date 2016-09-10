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
  board = null

  before-each ->
    board := @board = new Board do
      inputX: 0
      outputX: 0
      width: 1
      height: 1

  io-test = (io) ->
    board.place-block x: 0, y: 0, type: io.type, rotate: (io.rotate or 0)
    block = board.get-block 0, 0

    for own source, value of io.in
      data = new Data board, value
      block.input source, data

    block.step!

    entries = block.output-queues.entries!
    while iterator = entries.next!
      break if iterator.done
      [destination, queue] = iterator.value

      if io.out[destination] is undefined
        expect queue .to.be.an \array
        expect queue .to.have.length-of 0
      else
        expect queue .to.be.an \array
        expect queue .to.have.length-of 1
        expect queue.0 .to.be.instanceof Data
        expect queue.0.value .to.equal io.out[destination]

  describe 'WireI block' ->
    context 'without rotation' ->
      It 'conveys data from top to bottom' ->
        io-test do
          type: \wireI
          in: top: 334
          out: bottom: 334

      It 'conveys data from bottom to top' ->
        io-test do
          type: \wireI
          in: bottom: 334
          out: top: 334

      It 'erases any data put on the right side' ->
        @board.place-block x: 0, y: 0, type: \wireI, rotate: 0
        @block = @board.get-block 0, 0

        resolve, reject <~ new Promise _

        data = new Data @board, 334
        @block.input 'right', data

        @block.on 'erase' (erased-data) ->
          expect erased-data .to.equal data
          resolve!

        @block.step!

    context 'with rotation' ->
      It 'conveys data from left to right' ->
        io-test do
          type: \wireI
          rotate: 1
          in: left: 334
          out: right: 334

  describe 'WireL block' ->
    It 'conveys data from top to right' ->
      io-test do
        type: \wireL
        in: top: 334
        out: right: 334

    It 'conveys data from right to top' ->
      io-test do
        type: \wireL
        in: right: 334
        out: top: 334

  describe 'WireT block' ->
    It 'conveys data from left to right and bottom' ->
      io-test do
        type: \wireT
        in:
          left: 334
        out:
          right: 334
          bottom: 334

    It 'conveys data from bottom to right and left' ->
      io-test do
        type: \wireT
        in:
          bottom: 334
        out:
          right: 334
          left: 334

  describe 'WireX block' ->
    It 'conveys data from top to bottom' ->
      io-test do
        type: \wireX
        in: top: 334
        out: bottom: 334

    It 'conveys data from left to right' ->
      io-test do
        type: \wireX
        in: left: 334
        out: right: 334

  describe 'times-2 block' ->
    It 'converts data by multiplying 2' ->
      io-test do
        type: \times-2
        in: top: 334
        out: bottom: 668

  describe 'times-3 block' ->
    It 'converts data by multiplying 3' ->
      io-test do
        type: \times-3
        in: top: 334
        out: bottom: 1002

  describe 'plus-1 block' ->
    It 'converts data by adding 1' ->
      io-test do
        type: \plus-1
        in: top: 334
        out: bottom: 335

  describe 'plus-2 block' ->
    It 'converts data by adding 2' ->
      io-test do
        type: \plus-2
        in: top: 334
        out: bottom: 336

  describe 'div-2 block' ->
    It 'converts data by dividing by 2' ->
      io-test do
        type: \div-2
        in: top: 334
        out: bottom: 167

    It 'omits remainder of the division' ->
      io-test do
        type: \div-2
        in: top: 17
        out: bottom: 8

    It 'rounds remainder into zero' ->
      io-test do
        type: \div-2
        in: top: -17
        out: bottom: -8

  describe 'div-3 block' ->
    It 'converts data by dividing by 3' ->
      io-test do
        type: \div-3
        in: top: 33
        out: bottom: 11

    It 'omits remainder of the division' ->
      io-test do
        type: \div-3
        in: top: 17
        out: bottom: 5

    It 'rounds remainder into zero' ->
      io-test do
        type: \div-3
        in: top: -17
        out: bottom: -5

  describe 'minus-1 block' ->
    It 'converts data by subtracting 1' ->
      io-test do
        type: \minus-1
        in: top: 334
        out: bottom: 333

  describe 'minus-2 block' ->
    It 'converts data by subtracting 2' ->
      io-test do
        type: \minus-2
        in: top: 334
        out: bottom: 332

  describe 'const-0 block' ->
    It 'converts any input data into 0' ->
      io-test do
        type: \const-0
        in: top: 334
        out: bottom: 0

  describe 'const-1 block' ->
    It 'converts any input data into 1' ->
      io-test do
        type: \const-1
        in: top: 334
        out: bottom: 1

  describe 'const-2 block' ->
    It 'converts any input data into 2' ->
      io-test do
        type: \const-2
        in: top: 334
        out: bottom: 2

  describe 'add block' ->
    It 'adds up left and right and send it to bottom' ->
      io-test do
        type: \add
        in:
          left: 33
          right: 4
        out:
          bottom: 37

  describe 'sub block' ->
    It 'subtract left by right and send it to bottom' ->
      io-test do
        type: \sub
        in:
          left: 33
          right: 4
        out:
          bottom: 29

  describe 'mul block' ->
    It 'multiplies left and right and send it to bottom' ->
      io-test do
        type: \mul
        in:
          left: 33
          right: 4
        out:
          bottom: 132

  describe 'div block' ->
    It 'divides left by right and send it to bottom' ->
      io-test do
        type: \div
        in:
          left: 33
          right: 4
        out:
          bottom: 8

    It 'rounds remainder into zero' ->
      io-test do
        type: \div
        in:
          left: -33
          right: 4
        out:
          bottom: -8
