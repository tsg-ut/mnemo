require! {
  chai
  'chai-things'
  mathjs # as reference implementation
  seedrandom
  'core-js/es5'
  'core-js/es6'
  '../../stages/calc03'
  '../../stages/factorial'
  '../../stages/parity'
  '../../stages/fibonacci'
  '../../stages/power-hard'
  '../../stages/gcd'
  '../../stages/lcm'
  '../../stages/sqrt-easy'
  '../../stages/msd'
}

chai.use chai-things

{expect} = chai

It = global.it

zip = (array-A, array-B) ->
  Array.from {length: Math.min array-A.length, array-B.length}, (item, index) ->
    [array-A[index], array-B[index]]

integrality = (n) ->
  | typeof! n is \Number => Number.is-integer n
  | typeof! n is \Array => n.every integrality
  | otherwise => false

io-spec = ({input, output}) ->
  expect input .to.be.an \array
  expect output .to.be.an \array

  # Uniqueness of input
  unique-input = Array.from new Set input
  expect input .to.deep.equal unique-input

  expect input .to.all.satisfy integrality
  expect output .to.all.satisfy integrality

  expect input .to.have.length output.length

sum-of-digits = (n) -> n.to-string!split '' .map (parse-int _, 10) .reduce (+)

fibonacci-calc = (n, value = 1, prev = 0) ->
  if n is 0 then prev else fibonacci-calc n - 1, value + prev, value

describe 'Stage Data' ->
  before-each ->
    @random = seedrandom ''

  describe 'calc03 stage' ->
    It 'generates multiply of 6' ->
      io = calc03.io-generator @random

      expect io .to.satisfy io-spec

      expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
        6 * input is output

      expect io.input.0 .to.equal 1
      expect io.input.1 .to.equal 3

  describe 'factoriol stage' ->
    It 'generates factorals' ->
      io = factorial.io-generator @random

      expect io .to.satisfy io-spec

      expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
        output is mathjs.factorial input

      expect io.input.3 .to.equal 15

  describe 'parity stage' ->
    It 'generates parities' ->
      io = parity.io-generator @random

      expect io .to.satisfy io-spec

      expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
        sum-of-digits(input) % 10 is output

      expect sum-of-digits io.input.0 .to.be.below 10
      expect sum-of-digits io.input.1 .to.be.least 10 .and.below 20
      expect sum-of-digits io.input.2 .to.be.least 20

  describe 'fibonacci stage' ->
    It 'generates fibonaccis' ->
      io = fibonacci.io-generator @random

      expect io .to.satisfy io-spec

      expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
        output is fibonacci-calc input

      expect io.input.3 .to.equal 20

  describe 'power-hard stage' ->
    It 'generates powers' ->
      io = power-hard.io-generator @random

      expect io .to.satisfy io-spec

      expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
        output is Math.pow input.0, input.1

      # TODO: test input.0 ond input.1
      expect io.input.2 .to.deep.equal [2, 35]

  describe 'gcd stage' ->
    It 'generates GCDs' ->
      io = gcd.io-generator @random

      expect io .to.satisfy io-spec

      expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
        output is mathjs.gcd input.0, input.1

      expect io.input.3 .to.deep.equal [56, 1275]

  describe 'lcm stage' ->
    It 'generates LCMs' ->
      io = lcm.io-generator @random

      expect io .to.satisfy io-spec

      expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
        output is mathjs.lcm input.0, input.1

      expect io.input.3 .to.deep.equal [450, 756]

  describe 'sqrt-easy stage' ->
    It 'generates square roots' ->
      io = sqrt-easy.io-generator @random

      expect io .to.satisfy io-spec

      expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
        input is output ** 2

      expect io.output.0 .to.be.least 2 .and.most 14
      expect io.output.1 .to.be.least 2 .and.most 14
      expect io.output.2 .to.be.least 2 .and.most 14
      expect io.output.3 .to.equal 15

  describe 'msd stage' ->
    It 'generates MSDs' ->
      io = msd.io-generator @random

      expect io .to.satisfy io-spec

      expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
        output is parse-int input.to-string!0

      expect io.input.2 .to.equal 0
      expect io.input.3 .to.equal 123456789
