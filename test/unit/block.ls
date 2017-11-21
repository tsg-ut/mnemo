require! {
  chai: {expect}
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
    until (iterator = entries.next!).done
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
    It 'conveys data from left to right and top' ->
      io-test do
        type: \wireT
        in:
          left: 334
        out:
          right: 334
          top: 334

    It 'conveys data from top to right and left' ->
      io-test do
        type: \wireT
        in:
          top: 334
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

  describe 'WireXdot block' ->
    It 'conveys data from top to left, right, and bottom' ->
      io-test do
        type: \wireXdot
        in:
          top: 334
        out:
          right: 334
          left: 334
          bottom: 334

    It 'conveys data from left to top, right, and bottom' ->
      io-test do
        type: \wireXdot
        in:
          left: 334
        out:
          right: 334
          top: 334
          bottom: 334

    It 'conveys data from bottom to top, right, and left' ->
      io-test do
        type: \wireXdot
        in:
          bottom: 334
        out:
          right: 334
          top: 334
          left: 334

  describe 'JunctionR block' ->
    context 'without rotation' ->
      It 'conveys data from top to right' ->
        io-test do
          type: \junctionR
          in:
            top: 334
          out:
            right: 334

      It 'conveys data from left to right' ->
        io-test do
          type: \junctionR
          in:
            left: 334
          out:
            right: 334

      It 'conveys data from right to top and left' ->
        io-test do
          type: \junctionR
          in:
            right: 334
          out:
            top: 334
            left: 334

      It 'erases any data put on the bottom' ->
        @board.place-block x: 0, y: 0, type: \junctionR, rotate: 0
        @block = @board.get-block 0, 0

        resolve, reject <~ new Promise _

        data = new Data @board, 334
        @block.input 'bottom', data

        @block.on 'erase' (erased-data) ->
          expect erased-data .to.equal data
          resolve!

        @block.step!

    context 'with 90deg rotated' ->
      It 'conveys data from bottom to top and right' ->
        io-test do
          type: \junctionR
          rotate: 1
          in:
            bottom: 334
          out:
            top: 334
            right: 334

  describe 'JunctionL block' ->
    It 'conveys data from top to left' ->
      io-test do
        type: \junctionL
        in:
          top: 334
        out:
          left: 334

    It 'conveys data from right to left' ->
      io-test do
        type: \junctionL
        in:
          right: 334
        out:
          left: 334

    It 'conveys data from left to top and right' ->
      io-test do
        type: \junctionL
        in:
          left: 334
        out:
          top: 334
          right: 334

  describe 'JunctionT block' ->
    It 'conveys data from top to left and right' ->
      io-test do
        type: \junctionT
        in:
          top: 334
        out:
          left: 334
          right: 334

    It 'conveys data from right to top' ->
      io-test do
        type: \junctionT
        in:
          right: 334
        out:
          top: 334

    It 'conveys data from left to top' ->
      io-test do
        type: \junctionT
        in:
          left: 334
        out:
          top: 334

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

  describe 'times-10 block' ->
    It 'converts data by multiplying 10' ->
      io-test do
        type: \times-10
        in: top: 334
        out: bottom: 3340

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

  describe 'div-10 block' ->
    It 'converts data by dividing by 10' ->
      io-test do
        type: \div-10
        in: top: 330
        out: bottom: 33

    It 'omits remainder of the division' ->
      io-test do
        type: \div-10
        in: top: 334
        out: bottom: 33

    It 'rounds remainder into zero' ->
      io-test do
        type: \div-10
        in: top: -334
        out: bottom: -33

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

  describe 'log10 block' ->
    It 'converts data into the logarithm of it with base 10' ->
      io-test do
        type: \log10
        in: top: 100
        out: bottom: 2

    It 'truncates decimal places' ->
      io-test do
        type: \log10
        in: top: 334
        out: bottom: 2

    It 'calculates log_10 1000 correctly' ->
      io-test do
        type: \log10
        in: top: 1000
        out: bottom: 3

    It 'calculates log_10 1e15 correctly' ->
      io-test do
        type: \log10
        in: top: 1e15
        out: bottom: 15

    It 'calculates log_10 (1e15 - 1) correctly' ->
      io-test do
        type: \log10
        in: top: 1e15 - 1
        out: bottom: 14

    It 'ignores sign of input data' ->
      io-test do
        type: \log10
        in: top: -334
        out: bottom: 2

  describe 'log2 block' ->
    It 'converts data into the logarithm of it with base 2' ->
      io-test do
        type: \log2
        in: top: 1024
        out: bottom: 10

    It 'truncates decimal places' ->
      io-test do
        type: \log2
        in: top: 334
        out: bottom: 8

    It 'ignores sign of input data' ->
      io-test do
        type: \log2
        in: top: -334
        out: bottom: 8

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

  describe 'const-3 block' ->
    It 'converts any input data into 3' ->
      io-test do
        type: \const-3
        in: top: 334
        out: bottom: 3

  describe 'const-10 block' ->
    It 'converts any input data into 10' ->
      io-test do
        type: \const-10
        in: top: 334
        out: bottom: 10

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

    It 'returns Infinity when dividing by zero' ->
      io-test do
        type: \div
        in:
          left: 33
          right: 0
        out:
          bottom: Infinity

    It 'returns -Infinity when dividing by minus zero' ->
      io-test do
        type: \div
        in:
          left: 33
          right: -0
        out:
          bottom: -Infinity

    It 'can output integer for large numbers' ->
      io-test do
        type: \div
        in:
          left: 130e100
          right: 18e100
        out:
          bottom: 7

  describe 'pow block' ->
    It 'powers left by right and send it to bottom' ->
      io-test do
        type: \pow
        in:
          left: 3
          right: 4
        out:
          bottom: 81

    It 'deletes numbers after the decimal point' ->
      io-test do
        type: \pow
        in:
          left: 2
          right: -3
        out:
          bottom: 0

    It 'deletes numbers after the decimal point' ->
      io-test do
        type: \pow
        in:
          left: -2
          right: -3
        out:
          bottom: 0

    It 'returns 1 when left is 1 and right is an infinity' ->
      io-test do
        type: \pow
        in:
          left: 1
          right: Infinity
        out:
          bottom: 1

    It 'returns infinity when left is an infinity and right is 1' ->
       io-test do
        type: \pow
        in:
          left: Infinity
          right: 1
        out:
          bottom: Infinity

    It 'returns -infinity when left is -0 and right is -1' ->
      io-test do
        type: \pow
        in:
          left: -0
          right: -1
        out:
          bottom: -Infinity

  describe 'log block' ->
    It 'sends to bottom the logarithm of right with base of left' ->
      io-test do
        type: \log
        in:
          left: 3
          right: 81
        out:
          bottom: 4

    It 'truncates decimal places' ->
      io-test do
        type: \log
        in:
          left: 4
          right: 33
        out:
          bottom: 2

    It 'calculates log_10 1000 correctly' ->
      io-test do
        type: \log
        in:
          left: 10
          right: 1000
        out:
          bottom: 3

    It 'calculates log_10 Infinity correctly' ->
      io-test do
        type: \log
        in:
          left: 10
          right: Infinity
        out:
          bottom: Infinity

    It 'calculates log_Infinity 10 correctly' ->
      io-test do
        type: \log
        in:
          left: Infinity
          right: 10
        out:
          bottom: 0

    It 'returns -Infinity when right is 0' ->
      io-test do
        type: \log
        in:
          left: 334
          right: 0
        out:
          bottom: -Infinity

    It 'ignores signs of input data' ->
      io-test do
        type: \log
        in:
          left: -4
          right: -33
        out:
          bottom: 2

  describe 'c-contact block' ->
    context 'without rotation' ->
      It 'receives nonzero data from top and sends 1 to right' ->
        io-test do
          type: \c-contact
          in: top: 334
          out: right: 1

      It 'receives zero from top and sends 1 to left' ->
        io-test do
          type: \c-contact
          in: top: 0
          out: left: 1

    context 'with 90deg rotated' ->
      It 'receives nonzero data from right and sends 1 to bottom' ->
        io-test do
          type: \c-contact
          rotate: 1
          in: right: 334
          out: bottom: 1

      It 'receives zero from right and sends 1 to top' ->
        io-test do
          type: \c-contact
          rotate: 1
          in: right: 0
          out: top: 1

  describe 'transistor block' ->
    context 'without rotation' ->
      It 'receives nonzero data from top and conveys data from left to right' ->
        io-test do
          type: \transistor
          in:
            top: 33
            left: 4
          out:
            right: 4

      It 'receives zero from top and conveys data from left to bottom' ->
        io-test do
          type: \transistor
          in:
            top: 0
            left: 334
          out:
            bottom: 334

    context 'with 90deg rotated' ->
      It 'receives nonzero data from right and conveys data from top to bottom' ->
        io-test do
          type: \transistor
          rotate: 1
          in:
            top: 33
            right: 4
          out:
            bottom: 33

  describe 'and block' ->
    It 'calculates logical and' ->
      io-test do
        type: \and
        in:
          left: 0
          right: 0
        out:
          bottom: 0

      io-test do
        type: \and
        in:
          left: 1
          right: 0
        out:
          bottom: 0

      io-test do
        type: \and
        in:
          left: 0
          right: 1
        out:
          bottom: 0

      io-test do
        type: \and
        in:
          left: 1
          right: 1
        out:
          bottom: 1

  describe 'or block' ->
    It 'calculates logical or' ->
      io-test do
        type: \or
        in:
          left: 0
          right: 0
        out:
          bottom: 0

      io-test do
        type: \or
        in:
          left: 1
          right: 0
        out:
          bottom: 1

      io-test do
        type: \or
        in:
          left: 0
          right: 1
        out:
          bottom: 1

      io-test do
        type: \or
        in:
          left: 1
          right: 1
        out:
          bottom: 1

  describe 'nand block' ->
    It 'calculates logical nand' ->
      io-test do
        type: \nand
        in:
          left: 0
          right: 0
        out:
          bottom: 1

      io-test do
        type: \nand
        in:
          left: 1
          right: 0
        out:
          bottom: 1

      io-test do
        type: \nand
        in:
          left: 0
          right: 1
        out:
          bottom: 1

      io-test do
        type: \nand
        in:
          left: 1
          right: 1
        out:
          bottom: 0

  describe 'nor block' ->
    It 'calculates logical nor' ->
      io-test do
        type: \nor
        in:
          left: 0
          right: 0
        out:
          bottom: 1

      io-test do
        type: \nor
        in:
          left: 1
          right: 0
        out:
          bottom: 0

      io-test do
        type: \nor
        in:
          left: 0
          right: 1
        out:
          bottom: 0

      io-test do
        type: \nor
        in:
          left: 1
          right: 1
        out:
          bottom: 0

  describe 'xor block' ->
    It 'calculates logical xor' ->
      io-test do
        type: \xor
        in:
          left: 0
          right: 0
        out:
          bottom: 0

      io-test do
        type: \xor
        in:
          left: 1
          right: 0
        out:
          bottom: 1

      io-test do
        type: \xor
        in:
          left: 0
          right: 1
        out:
          bottom: 1

      io-test do
        type: \xor
        in:
          left: 1
          right: 1
        out:
          bottom: 0

  describe 'not block' ->
    It 'calculates logical not' ->
      io-test do
        type: \not
        in: top: 0
        out: bottom: 1

      io-test do
        type: \not
        in: top: 1
        out: bottom: 0

  describe 'sqrt block' ->
    It 'calculates square root' ->
      io-test do
        type: \sqrt
        in: top: 1
        out: bottom: 1

      io-test do
        type: \sqrt
        in: top: 80
        out: bottom: 8

      io-test do
        type: \sqrt
        in: top: 81
        out: bottom: 9

      io-test do
        type: \sqrt
        in: top: 334
        out: bottom: 18

      io-test do
        type: \sqrt
        in: top: Infinity
        out: bottom: Infinity

    It 'returns zero when negative numbers were given' ->
      io-test do
        type: \sqrt
        in: top: 0
        out: bottom: 0

      io-test do
        type: \sqrt
        in: top: -334
        out: bottom: 0

      io-test do
        type: \sqrt
        in: top: -Infinity
        out: bottom: 0
