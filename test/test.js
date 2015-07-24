#!/usr/bin/env node

var should = require('chai').should();
var cp = require('child_process');
var month = require('../lib/month');
var zeller = require('../lib/zeller');

describe('Mocha + Chai', function () {
  it('truthyness', function () {
      true.should.be.true;
      false.should.be.false;
  });
});

describe('node-cal', function () {
  it('should return the current month', function () {
    cp.execFile('./app.js', function(err, stdout) {
      console.log("err: ", err);
      console.log("stdout: ", stdout);
      stdout.should.equal('     July 2015\nSu Mo Tu We Th Fr Sa\n          1  2  3  4\n 5  6  7  8  9 10 11\n12 13 14 15 16 17 18\n19 20 21 22 23 24 25\n26 27 28 29 30 31\n\n');
    });
  });
});

describe('month.getfirstLines', function() {
  it('should return the same as the first two lines of cal', function (done) {
    cp.exec('cal', function(err, stdout) {
      stdout.slice(0, stdout.indexOf('Sa\n') + 2).should.equal(month.getFirstLines());
      done();
    });
  });
});

describe('zeller', function() {
  it('should return the correct weekday for 7-23-2015', function () {
    zeller(7, 23, 20, 15).should.equal(5);
  });
  it('should return the correct weekday for 1-3-2015', function () {
    zeller(1, 3, 20, 15).should.equal(7);
  });
  it('should return the correct weekday for 3-3-2014', function () {
    zeller(3, 3, 20, 14).should.equal(2);
  });
  it('should return the correct weekday for 12-16-1900', function () {
    zeller(12, 16, 19, 0).should.equal(1);
  });
  it('should return the correct weekday for 2-29-2012', function () {
    zeller(2, 29, 20, 12).should.equal(4);
  });
});
