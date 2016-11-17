require! {
  '../lib/board': Board
  microtime: {now-double}
}

board = new Board do
  inputX: 15
  outputX: 15
  width: 31
  height: 31
  clock-limit: 2000

board.place-block {x: 0, y: 0, type: \wireL, rotate: 1}

for x from 1 to 29
  board.place-block {x, y: 0, type: \wireI, rotate: 1}

board.place-block {x: 30, y: 0, type: \wireL, rotate: 2}

for y from 1 to 29
  board.place-block {x: 30, y, type: \wireI, rotate: 0}

board.place-block {x: 30, y: 30, type: \wireL, rotate: 3}

for x from 1 to 29
  board.place-block {x, y: 30, type: \wireI, rotate: 1}

board.place-block {x: 0, y: 30, type: \wireL, rotate: 0}

for y from 1 to 29
  board.place-block {x: 0, y, type: \wireI, rotate: 0}

board.place-block {x: 15, y: 0, type: \wireT, rotate: 0}

start-time = now-double!
board.run 1
end-time = now-double!

console.log """
  Board: #{board.width}x#{board.height}
  Blocks: #{board.block-count}
  Clocks: #{board.clock}
  Time: #{end-time - start-time}s
"""
