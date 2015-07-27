#!/usr/bin/env node

var should = require('chai').should();
var cp = require('child_process');
var getMonth = require('../lib/month');
var zeller = require('../lib/zeller');

describe('Mocha + Chai', function () {
  it('truthyness', function () {
      true.should.be.true;
      false.should.be.false;
  });
});

describe('node-cal', function () {
  describe('month display', function () {
    it('should return the current month', function () {
      cp.execFile('./app.js', function(err, stdout) {
        // console.log("err: ", err);
        // console.log("stdout: ", stdout);
        stdout.should.equal('     July 2015\nSu Mo Tu We Th Fr Sa\n          1  2  3  4\n 5  6  7  8  9 10 11\n12 13 14 15 16 17 18\n19 20 21 22 23 24 25\n26 27 28 29 30 31\n\n');
      });
    });
    it('should match cal when run with no options', function (done) {
      cp.exec('cal', function(err, stdout) {
        // console.log("cal: ", stdout);
        cp.execFile('./app.js', function(err2, stdout2) {
          // console.log("./app.js: ", stdout2);
          stdout2.should.equal(stdout);
          done();
        });
      });
    });
    it('should return the same month text as cal for 7-2015', function (done) {
      cp.exec('cal 7 2015', function(err, stdout) {
        cp.execFile('./app.js', [7, 2015], function(err2, stdout2) {
          stdout2.should.equal(stdout);
          done();
        });
      });
    });
    it('should match cal for a 4-week month like 2-2015', function (done) {
      cp.exec('cal 2 2015', function(err, stdout) {
        cp.execFile('./app.js', [2, 2015], function(err2, stdout2) {
          stdout2.should.equal(stdout);
          done();
        });
      });
    });
    it('should match cal for a 5-week month like 9-2015', function (done) {
      cp.exec('cal 9 2015', function(err, stdout) {
        cp.execFile('./app.js', [9, 2015], function(err2, stdout2) {
          stdout2.should.equal(stdout);
          done();
        });
      });
    });
    it('should match cal for a 6-week month like 8-2015', function (done) {
      cp.exec('cal 8 2015', function(err, stdout) {
        cp.execFile('./app.js', [8, 2015], function(err2, stdout2) {
          stdout2.should.equal(stdout);
          done();
        });
      });
    });
    it('should work in a leap year february like 2-2016', function (done) {
      cp.exec('cal 2 2016', function(err, stdout) {
        cp.execFile('./app.js', [2, 2016], function(err2, stdout2) {
          stdout2.should.equal(stdout);
          done();
        });
      });
    });
    it('should work in a non-leap year century february like 2-1900', function (done) {
      cp.exec('cal 2 1900', function(err, stdout) {
        cp.execFile('./app.js', [2, 1900], function(err2, stdout2) {
          stdout2.should.equal(stdout);
          done();
        });
      });
    });
    it('should work in a leap year century february like 2-2000', function (done) {
      cp.exec('cal 2 2000', function(err, stdout) {
        cp.execFile('./app.js', [2, 2000], function(err2, stdout2) {
          stdout2.should.equal(stdout);
          done();
        });
      });
    });
  });
  describe('year display', function() {
    // it('should match cal for every year 1753-2153', function (done) {
    for (var year = 1753; year <= 2153; year++) {
      it('should match cal for the year ' + year, function (done) {
        cp.exec('cal ' + year, function(err, stdout) {
          cp.execFile('./app.js', [year], function(err2, stdout2) {
            stdout2.should.equal(stdout);
            done();
          });
        });
      });
    }
    it('should match cal for a non-century leap year like 2016', function (done) {
      cp.exec('cal 2016', function(err, stdout) {
        cp.execFile('./app.js', [2016], function(err2, stdout2) {
          stdout2.should.equal(stdout);
          done();
        });
      });
    });
    it('should match cal for a non-century non-leap year like 1782', function (done) {
      cp.exec('cal 1782', function(err, stdout) {
        cp.execFile('./app.js', [1782], function(err2, stdout2) {
          stdout2.should.equal(stdout);
          done();
        });
      });
    });
    it('should match cal for a century leap year like 2000', function (done) {
      cp.exec('cal 2000', function(err, stdout) {
        cp.execFile('./app.js', [2000], function(err2, stdout2) {
          stdout2.should.equal(stdout);
          done();
        });
      });
    });
    it('should match cal for a century non-leap year like 1900', function (done) {
      cp.exec('cal 1900', function(err, stdout) {
        cp.execFile('./app.js', [1900], function(err2, stdout2) {
          stdout2.should.equal(stdout);
          done();
        });
      });
    });
  });
});

// describe('getMonth', function() {
//   it('should return the same month text as cal for 1-2015', function (done) {
//     cp.exec('cal 1 2015', function(err, stdout) {
//       stdout.should.equal(getMonth(1, 2015));
//       done();
//     });
//   });
//   it('should match cal for a 4-week month like 2-2015', function (done) {
//     cp.exec('cal 2 2015', function(err, stdout) {
//       stdout.should.equal(getMonth(2, 2015));
//       done();
//     });
//   });
//   it('should match cal for a 5-week month like 6-1753', function (done) {
//     cp.exec('cal 6 1753', function(err, stdout) {
//       stdout.should.equal(getMonth(6, 1753));
//       done();
//     });
//   });
//   it('should match cal for a 6-week month like 8-2015', function (done) {
//     cp.exec('cal 8 2015', function(err, stdout) {
//       stdout.should.equal(getMonth(8, 2015));
//       done();
//     });
//   });
//   it('should return the same month text as cal for 3-2014', function (done) {
//     cp.exec('cal 3 2014', function(err, stdout) {
//       stdout.should.equal(getMonth(3, 2014));
//       done();
//     });
//   });
//   it('should return the same month text as cal for 12-1900', function (done) {
//     cp.exec('cal 12 1900', function(err, stdout) {
//       stdout.should.equal(getMonth(12, 1900));
//       done();
//     });
//   });
// });

describe('zeller', function() {
  it('should return the correct weekday for 7-23-2015', function () {
    zeller(7, 23, 20, 15).should.equal(5);
  });
  it('should return the correct weekday for 1-1-2015', function () {
    zeller(1, 1, 20, 15).should.equal(5);
  });
  it('should return the correct weekday for 3-3-2014', function () {
    zeller(3, 3, 20, 14).should.equal(2);
  });
  it('should return the correct weekday for 12-16-1900', function () {
    zeller(12, 16, 19, 0).should.equal(1);
  });
  it('should return the correct weekday for 2-1-1900', function () {
    zeller(2, 1, 19, 0).should.equal(5);
  });
  it('should return the correct weekday for a leap year - 2-29-2012', function () {
    zeller(2, 29, 20, 12).should.equal(4);
  });
});
