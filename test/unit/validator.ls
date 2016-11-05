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

    fails 'board should be an array' do
      * stage: 'wire01'
        board: null
      * stage: 'wire01'
        board: 42
      * stage: 'wire01'
        board: 'hogehoge'

    fails 'board must at least have one block' do
      * stage: 'wire01'
        board: []
