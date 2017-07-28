require! {
  chai
  'chai-things'
  mathjs # as reference implementation
  seedrandom
  'core-js'
  '../../stages/calc03'
  '../../stages/conditional01'
  '../../stages/conditional02'
  '../../stages/conditional03'
  '../../stages/factorial'
  '../../stages/parity'
  '../../stages/fibonacci'
  '../../stages/power-hard'
  '../../stages/gcd'
  '../../stages/lcm'
  '../../stages/sqrt-easy'
  '../../stages/sqrt-hard'
  '../../stages/msd'
  '../../stages/mod3-hard'
  '../../stages/the-fifth-max'
  '../../stages/repeat-self'
  '../../stages/fibonacci-hard'
  '../../stages/factorization'
  '../../stages/spaceship'
  '../../stages/10000th-digit': ten-thousandth-digit
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

io-spec-seq = ({input, output}) ->
  expect {input, output} .to.satisfy io-spec

  expect input .to.all.satisfy (i) ->
    expect i .to.be.an \array .that.has.length-of 2
    expect i.1 .to.be.an \array .that.has.length-of i.0

test-many-times-with-random = (test) ->
  # 100 is many!
  for i from 0 til 100
    random = seedrandom i
    test random

sum-of-digits = (n) -> n.to-string!split '' .map (parse-int _, 10) .reduce (+)

fibonacci-calc = (n, value = 1, prev = 0) ->
  if n is 0 then prev else fibonacci-calc n - 1, value + prev, value

conditional1-calc = (x) ->
  if x % 2 is 0 then 2 * x else 3 * x

conditional2-calc = (x) ->
  if x is 5
    10
  else if x is 6
    18
  else x

factorization-calc = (n) ->
  for i from 2 to n - 1
    if n % i is 0
      return i
  0

spaceship-calc = (a, b) -> Math.sign a - b

ten-thousandth-digit-calc = (n) ->
  mathjs.config precision: 20000
  x = mathjs.divide mathjs.bignumber(1), mathjs.bignumber(n)
  return x.to-string!split '.' .1.9999 |> parse-int

describe 'Stage Data' ->
  describe 'calc03 stage' ->
    It 'generates multiply of 6' ->
      test-many-times-with-random (random) ->
        io = calc03.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          6 * input is output

        expect io.input.0 .to.equal 1
        expect io.input.1 .to.equal 3

  describe 'conditional01 stage' ->
    It 'generates 2x if even, 3x otherwise' ->
      test-many-times-with-random (random) ->
        io = conditional01.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is conditional1-calc input

        expect io.input.0 .to.equal 5
        expect io.input.1 .to.equal -10
        expect io.input.2 .to.be.below 200
        expect io.input.3 .to.be.below 200

  describe 'conditional02 stage' ->
    It 'generates 2*5 if 5, 3*6 else if 6, 1 otherwise' ->
      test-many-times-with-random (random) ->
        io = conditional02.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is conditional2-calc input

        expect io.input.0 .to.equal 5
        expect io.input.1 .to.equal 6
        expect io.input.2 .to.be.below 200
        expect io.input.3 .to.be.below 200

  describe 'conditional03 stage' ->
    It 'generates two addition in modulo 7' ->
      test-many-times-with-random (random) ->
        io = conditional03.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is (input + 2) % 7

        expect io.input.0 .to.equal 5
        expect io.input.1 .to.equal 3
        expect io.input.2 .to.be.below 200
        expect io.input.3 .to.be.below 200
        expect io.input.4 .to.be.below 200

  describe 'factorial stage' ->
    It 'generates factorials' ->
      test-many-times-with-random (random) ->
        io = factorial.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is mathjs.factorial input

        expect io.input.3 .to.equal 15

  describe 'parity stage' ->
    It 'generates parities' ->
      test-many-times-with-random (random) ->
        io = parity.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          sum-of-digits(input) % 10 is output

        expect sum-of-digits io.input.0 .to.be.below 10
        expect sum-of-digits io.input.1 .to.be.least 10 .and.below 20
        expect sum-of-digits io.input.2 .to.be.least 20

  describe 'fibonacci stage' ->
    It 'generates fibonaccis' ->
      test-many-times-with-random (random) ->
        io = fibonacci.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is fibonacci-calc input

        expect io.input.3 .to.equal 20

  describe 'power-hard stage' ->
    It 'generates powers' ->
      test-many-times-with-random (random) ->
        io = power-hard.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is Math.pow input.0, input.1

        # TODO: test input.0 ond input.1
        expect io.input.2 .to.deep.equal [2, 35]

  describe 'gcd stage' ->
    It 'generates GCDs' ->
      test-many-times-with-random (random) ->
        io = gcd.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is mathjs.gcd input.0, input.1

        expect io.input.3 .to.deep.equal [56, 1275]

  describe 'lcm stage' ->
    It 'generates LCMs' ->
      test-many-times-with-random (random) ->
        io = lcm.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is mathjs.lcm input.0, input.1

        expect io.input.3 .to.deep.equal [450, 756]

  describe 'sqrt-easy stage' ->
    It 'generates square roots' ->
      test-many-times-with-random (random) ->
        io = sqrt-easy.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          input is output ** 2

        expect io.output.0 .to.be.least 2 .and.most 14
        expect io.output.1 .to.be.least 2 .and.most 14
        expect io.output.2 .to.be.least 2 .and.most 14
        expect io.output.3 .to.equal 15

  describe 'sqrt-hard stage' ->
    It 'generates hard square roots' ->
      test-many-times-with-random (random) ->
        io = sqrt-hard.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          input is output ** 2

        expect io.output.0 .to.equal 3
        expect io.output.1 .to.be.least 10 .and.below 100
        expect io.output.2 .to.be.least 1000 .and.below 5000
        expect io.output.3 .to.equal 5103

  describe 'msd stage' ->
    It 'generates MSDs' ->
      test-many-times-with-random (random) ->
        io = msd.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is parse-int input.to-string!0

        expect io.input.2 .to.equal 0
        expect io.input.3 .to.equal 123456789

  describe 'mod3-hard stage' ->
    It 'generates moduloes of 3' ->
      test-many-times-with-random (random) ->
        io = mod3-hard.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is input % 3

        expect io.input.0 .to.be.least 10000000 .and.below 90000000
        expect io.input.1 .to.be.least 10000000 .and.below 90000000
        expect io.input.2 .to.be.least 10000000 .and.below 90000000
        expect io.input.3 .to.be.least 10000000 .and.below 90000000
        expect io.input.4 .to.be.least 99990000 .and.below 100000000

        expect io.output.0 .to.equal 0
        expect io.output.1 .to.equal 1
        expect io.output.2 .to.equal 2

  describe 'the-fifth-max stage' ->
    It 'generates medians' ->
      test-many-times-with-random (random) ->
        io = the-fifth-max.io-generator random

        expect io .to.satisfy io-spec-seq

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is mathjs.median input.1 and input.1.filter (is output) .length is 1

        expect io.input.0 .to.deep.equal [5, [1, 2, 3, 4, 5]]

        expect io.input.1.0 .to.equal 5
        expect io.input.2.0 .to.equal 7
        expect io.input.3.0 .to.equal 7
        expect io.input.4.0 .to.equal 7

        expect io.input.4.1.6 .to.equal mathjs.median io.input.4.1

  describe 'repeat-self stage' ->
    It 'generates valid io' ->
      test-many-times-with-random (random) ->
        io = repeat-self.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is (input.to-string!repeat input |> parse-int)

        expect io.input.0 .to.equal 1
        expect io.input.3 .to.equal 9

  describe 'fibonacci-hord stage' ->
    It 'generates fibonaccis' ->
      test-many-times-with-random (random) ->
        io = fibonacci-hard.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is fibonacci-calc input

        expect io.input.3 .to.equal 30

  describe 'factorization stage' ->
    It 'generates factorization' ->
      test-many-times-with-random (random) ->
        io = factorization.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is factorization-calc input

        expect io.input.3 .to.equal 211
        expect io.input.4 .to.equal 221

  describe 'spaceship stage' ->
    It 'generates spaceship' ->
      test-many-times-with-random (random) ->
        io = spaceship.io-generator random

        expect io .to.satisfy io-spec

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          output is spaceship-calc ...input

        expect io.output.0 .to.equal 0
        expect io.output.1 .to.equal -1
        expect io.output.2 .to.equal 1

  describe '10000th-digit stage' ->
    It 'generates 10000th-digit' ->
      test-many-times-with-random (random) ->
        io = ten-thousandth-digit.io-generator random

        expect io .to.satisfy io-spec

        # Uniqueness of output
        unique-output = Array.from new Set io.output
        expect io.output .to.deep.equal unique-output

        expect zip io.input, io.output .to.all.satisfy ([input, output]) ->
          mathjs.is-prime input
          and output is ten-thousandth-digit-calc input

        expect io.input.4 .to.equal 107
