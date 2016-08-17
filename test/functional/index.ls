require! {
  nightmare: Nightmare
  'file-url'
  chai: {expect}
}

nightmare = Nightmare!

It = global.it

describe 'Application' ->
  before ->
    nightmare
    .viewport 1600 900
    .goto file-url 'index.html'

  describe 'Menu Screen' ->
    describe 'Start Button' ->
      before ->
        nightmare.refresh!

      It 'navigates to game screen when clicked' ->
        nightmare
        .click 'button.start'
        .evaluate -> document.query-selector '.screens' .classList.contains 'gaming'
        .then -> expect it .to.be.true

    describe 'Select Button' ->
      before ->
        nightmare.refresh!

      It 'shows stage selector when clicked' ->
        nightmare
        .click 'button.select'
        .evaluate ->
          document.query-selector '.stage-list' .{offset-width, offset-height}
        .then ->
          expect it.offset-width .to.not.equal 0
          expect it.offset-height .to.not.equal 0

      It 'hides stage selector when clicked again' ->
        nightmare
        .click 'button.select'
        .evaluate ->
          document.query-selector '.stage-list' .{offset-width, offset-height}
        .then ->
          expect it.offset-width .to.equal 0
          expect it.offset-height .to.equal 0

    describe 'Credit Button' ->
      before ->
        nightmare.refresh!

      It 'shows credit when clicked' ->
        nightmare
        .click 'button.credit'
        .evaluate ->
          document.query-selector '.credit-body' .{offset-width, offset-height}
        .then ->
          expect it.offset-width .to.not.equal 0
          expect it.offset-height .to.not.equal 0

      It 'hides credit when clicked again' ->
        nightmare
        .click 'button.credit'
        .evaluate ->
          document.query-selector '.credit-body' .{offset-width, offset-height}
        .then ->
          expect it.offset-width .to.equal 0
          expect it.offset-height .to.equal 0

  after ->
    nightmare.end!
