require! {
  chai: {expect}
  '../../lib/util': {
    translate-date-from-unix-time,
  }
}

It = global.it

describe 'util' ->
  describe 'translateDateFromUnixTime' ->
    It 'translates unixtime to YYYY-MM-DD hh:mm:ss' ->
      process.env.TZ = 'Asia/Tokyo'

      # https://ja.wikipedia.org/wiki/UNIX%E6%99%82%E9%96%93#UNIX.E6.99.82.E5.88.BB.E3.81.AE.E8.A1.A8.E7.A4.BA.E4.BE.8B
      expect translate-date-from-unix-time 0 .to.equal '1970-01-01 09:00:00'
      expect translate-date-from-unix-time 100000000000 .to.equal '1973-03-03 18:46:40'
      expect translate-date-from-unix-time 1000000000000 .to.equal '2001-09-09 10:46:40'
      expect translate-date-from-unix-time 1234567890000 .to.equal '2009-02-14 08:31:30'

    It 'recognizes time zones other than tokyo' ->
      process.env.TZ = 'Europe/London'

      # https://ja.wikipedia.org/wiki/UNIX%E6%99%82%E9%96%93#UNIX.E6.99.82.E5.88.BB.E3.81.AE.E8.A1.A8.E7.A4.BA.E4.BE.8B
      expect translate-date-from-unix-time 0 .to.equal '1970-01-01 00:00:00'
      expect translate-date-from-unix-time 100000000000 .to.equal '1973-03-03 09:46:40'
      expect translate-date-from-unix-time 1000000000000 .to.equal '2001-09-09 01:46:40'
      expect translate-date-from-unix-time 1234567890000 .to.equal '2009-02-13 23:31:30'
