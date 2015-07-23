#!/usr/bin/env node

var should = require('chai').should();
var cp = require('child_process');
var monthYearStr = require('../lib/monthYearStr');

describe('Mocha + Chai', function () {
  it('truthyness', function () {
      true.should.be.true;
      false.should.be.false;
  });
});

describe('node-cal', function () {
  it('should return the current month', function () {
    cp.execFile('./app.js', function(err, stdout) {
      console.log(err);
      console.log(stdout);
      stdout.should.equal('     July 2015\nSu Mo Tu We Th Fr Sa\n          1  2  3  4\n 5  6  7  8  9 10 11\n12 13 14 15 16 17 18\n19 20 21 22 23 24 25\n26 27 28 29 30 31\n\n');
    });
  });
});

describe('getMonthYearStr', function() {
  it('should return the same as the first line of cal', function (done) {
    cp.exec('cal', function(err, stdout) {
      stdout.slice(0, stdout.indexOf('Su')).should.equal(monthYearStr());
      done();
    });
  });
});
