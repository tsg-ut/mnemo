require! {
  nightmare: Nightmare
  chai: {expect}
  'mocha-logger'
  'file-url'
}

It = global.it

describe 'Application' ->
  @retries 5

  before ->
    @timeout 30000

    start-time = Date.now!

    @nightmare = Nightmare do
      show: false
      width: 1600
      height: 900
      center: true

    @nightmare.on 'console', (type, text) ->
      switch type
        | \log \arguments => mocha-logger.log text
        | \warn => mocha-logger.pending text
        | \error => mocha-logger.error text

    @nightmare
    .goto file-url('index.html') + '?fx=off'
    .then -> mocha-logger.log "It took #{Date.now! - start-time}ms to launch app"

  require './menu'
  require './game'

  after ->
    @nightmare.end!
