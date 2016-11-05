require! {
  chai: {expect}
  '../../lib/validator': {validate-submission}
}

It = global.it

fails = (expected-message, input-data) ->
  It "fails when #expected-message" ->
    inputs =
      if Array.is-array input-data
        input-data
      else
        [input-data]

    for input in inputs
      {pass, message} = validate-submission input
      expect pass .to.be.false
      expect message .to.equal expected-message

describe 'validator' ->
  describe '.validatorSubmission' ->

    fails 'stage data is missing' {}

    fails 'stage data is invalid' do
      stage: 'blahblah'

    fails 'board should be an array' [
      * stage: 'wire01'
        board: null
      * stage: 'wire01'
        board: 42
      * stage: 'wire01'
        board: 'hogehoge'
    ]

    fails 'board must at least have one block' [
      * stage: 'wire01'
        board: []
    ]

    fails 'keys of block 0 are invalid' [
      * stage: 'wire01'
        board: [{}]
      * stage: 'wire01'
        board:
          * x: 0
            y: 0
            name: 'wireI'
            ...
      * stage: 'wire01'
        board:
          * x: 0
            y: 0
            name: 'wireI'
            rotate: 0
            hoge: 'fuga'
            ...
    ]

    fails 'x position of block 0 should be an integer' [
      * stage: 'wire01'
        board:
          * x: null
            y: 0
            name: 'wireI'
            rotate: 0
            ...
      * stage: 'wire01'
        board:
          * x: 'hoge'
            y: 0
            name: 'wireI'
            rotate: 0
            ...
      * stage: 'wire01'
        board:
          * x: 0.1
            y: 0
            name: 'wireI'
            rotate: 0
            ...
      * stage: 'wire01'
        board:
          * x: Infinity
            y: 0
            name: 'wireI'
            rotate: 0
            ...
    ]

    fails 'x position of block 0 exceeds the board size' [
      * stage: 'wire01'
        board:
          * x: -1
            y: 0
            name: 'wireI'
            rotate: 0
            ...
      * stage: 'wire01'
        board:
          * x: 3
            y: 0
            name: 'wireI'
            rotate: 0
            ...
      * stage: 'wire01'
        board:
          * x: 100
            y: 0
            name: 'wireI'
            rotate: 0
            ...
    ]

    fails 'y position of block 0 should be an integer' [
      * stage: 'wire01'
        board:
          * x: 0
            y: null
            name: 'wireI'
            rotate: 0
            ...
      * stage: 'wire01'
        board:
          * x: 0
            y: 'hoge'
            name: 'wireI'
            rotate: 0
            ...
      * stage: 'wire01'
        board:
          * x: 0
            y: 0.1
            name: 'wireI'
            rotate: 0
            ...
      * stage: 'wire01'
        board:
          * x: 0
            y: Infinity
            name: 'wireI'
            rotate: 0
            ...
    ]

    fails 'y position of block 0 exceeds the board size' [
      * stage: 'wire01'
        board:
          * x: 0
            y: -1
            name: 'wireI'
            rotate: 0
            ...
      * stage: 'wire01'
        board:
          * x: 0
            y: 3
            name: 'wireI'
            rotate: 0
            ...
      * stage: 'wire01'
        board:
          * x: 0
            y: 100
            name: 'wireI'
            rotate: 0
            ...
    ]

    fails 'name of block 0 should be a string' [
      * stage: 'wire01'
        board:
          * x: 0
            y: 0
            name: null
            rotate: 0
            ...
      * stage: 'wire01'
        board:
          * x: 0
            y: 0
            name: 42
            rotate: 0
            ...
      * stage: 'wire01'
        board:
          * x: 0
            y: 0
            name: []
            rotate: 0
            ...
    ]

    fails 'name of block 0 is unknown' [
      * stage: 'wire01'
        board:
          * x: 0
            y: 0
            name: 'hoge'
            rotate: 0
            ...
    ]

    fails 'rotation of block 0 should be an integer' [
      * stage: 'wire01'
        board:
          * x: 0
            y: 0
            name: 'wireI'
            rotate: null
            ...
      * stage: 'wire01'
        board:
          * x: 0
            y: 0
            name: 'wireI'
            rotate: 'hoge'
            ...
      * stage: 'wire01'
        board:
          * x: 0
            y: 0
            name: 'wireI'
            rotate: 0.1
            ...
      * stage: 'wire01'
        board:
          * x: 0
            y: 0
            name: 'wireI'
            rotate: Infinity
            ...
    ]

    fails 'rotation of block 0 is invalid' [
      * stage: 'wire01'
        board:
          * x: 0
            y: 0
            name: 'wireI'
            rotate: -1
            ...
      * stage: 'wire01'
        board:
          * x: 0
            y: 0
            name: 'wireI'
            rotate: 4
            ...
    ]
