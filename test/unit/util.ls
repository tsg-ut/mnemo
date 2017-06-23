require! {
  chai: {expect}
  '../../lib/util': util
}

It = global.it

describe 'util' ->
  describe 'translateDateFromUnixTime' ->
    It 'translates unixtime to YYYY-MM-DD hh:mm:ss' ->
      expect '2017-06-12 01:31:31' .to.equal util.translateDateFromUnixTime 1497198691166
