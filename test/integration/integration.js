#!/usr/bin/env node

var cp = require('child_process');
var should = require('chai').should();

describe('node-cal', function () {
  describe('month display', function () {
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
    it('should return the same month text as cal for 3-1985', function (done) {
      cp.exec('cal 3 1985', function(err, stdout) {
        cp.execFile('./app.js', [3, 1985], function(err2, stdout2) {
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
    // it('should match cal for every year 1753-9999', function (done) {
    for (var year = 1753; year <= 1778; year++) {
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
