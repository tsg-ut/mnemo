require! {
  chai: {expect}
}

It = global.it

describe 'Game Screen' ->
  describe 'Stage 1' ->
    before ->
      @nightmare
      .refresh!
      .wait -> document.readyState is 'complete'
      .click 'button.select'
      .click '.stage-name:nth-child(1)'
      .click '.modal .close'

    It 'navigates to game screen' ->
      @nightmare
      .evaluate -> document.query-selector '.screens' .classList.contains 'gaming'
      .then -> expect it .to.be.true

    It 'can place blocks' ->
      @nightmare
      .click '.panel > .block[data-type=wireI]'
      .click '.board .block[data-x="1"][data-y="0"]'
      .then ~>
        @nightmare
        .evaluate ->
          document.query-selector '.board .block[data-x="1"][data-y="0"]'
          .get-attribute 'data-type'
      .then ~>
        expect it .to.equal 'wireI'

        @nightmare
        .evaluate ->
          document.query-selector '.board .block[data-x="1"][data-y="0"]'
          .get-attribute 'data-rotate'
      .then ->
        expect it .to.equal '0'

    It 'fails when executed' ->
      @nightmare
      .click 'button.execute'
      .wait -> document.query-selector-all '.data' .length is 0
      .evaluate -> document.query-selector '.statement' .text-content
      .then -> expect it .to.equal '入り口と出口をつなげてみよう!'

    It 'succeeds when placed more blocks correctly' ->
      @nightmare
      .click '.panel > .block[data-type=wireI]'
      .click '.board .block[data-x="1"][data-y="1"]'
      .click '.board .block[data-x="1"][data-y="2"]'
      .click 'button.execute'
      .wait -> document.query-selector-all '.data' .length is 0
      .evaluate -> document.query-selector '.result' |> get-computed-style
      .then -> expect it.display .to.equal 'block'
