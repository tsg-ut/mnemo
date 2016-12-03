require! {
  chai: {expect}
  mathjs # as reference implementation
  seedrandom
  'core-js/es5'
  'core-js/es6'
  '../../stages/factorial'
}

It = global.it

zip = (array-A, array-B) ->
  Array.from {length: Math.min array-A.length, array-B.length}, (item, index) ->
    [array-A[index], array-B[index]]

uniqueness = (array) ->
  unique-array = Array.from new Set array
  expect array .to.deep.equal unique-array
  return true

describe 'Stage Data' ->
  before-each ->
    @random = seedrandom ''

  describe 'factoriol stage' ->
    It 'generates factorals' ->
      {input, output} = factorial.io-generator @random

      expect input .to.satisfy uniqueness

      for [input, output] in zip input, output
        expect output .to.equal mathjs.factorial input
