require! {
  nightmare: Nightmare
  chai: {expect}
  'mocha-logger'
  'file-url'
}

It = global.it

describe 'Application' ->
  before ->
    @timeout 10000

    start-time = Date.now!

    @nightmare = Nightmare do
      show: false
      width: 1600
      height: 900
      center: true

    @nightmare
    .goto file-url('index.html') + '?fx=off'
    .then -> mocha-logger.log "It took #{Date.now! - start-time}ms to launch app"

  require './menu'

  after ->
    @nightmare.end!
