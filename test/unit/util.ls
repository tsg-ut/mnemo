require! {
  chai: {expect}
  '../../lib/util': util
}

It = global.it

describe 'util' ->
  describe 'translateDateFromUnixTime' ->
    It 'translates unixtime to YYYY-MM-DD hh:mm' ->
      expect '2017-05-12 01:31' is util.translateDateFromUnixTime 1497198691166
