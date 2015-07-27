#!/usr/bin/env node

var cp = require('child_process');
var should = require('chai').should();
var getMonth = require('../../lib/month');

describe('getMonth', function() {
  it('should return the same month text as cal for 1-2015', function (done) {
    cp.exec('cal 1 2015', function(err, stdout) {
      stdout.should.equal(getMonth(1, 2015) + "\n");
      done();
    });
  });
  it('should match cal for a 4-week month like 2-2015', function (done) {
    cp.exec('cal 2 2015', function(err, stdout) {
      stdout.should.equal(getMonth(2, 2015) + "\n");
      done();
    });
  });
  it('should match cal for a 5-week month like 6-1753', function (done) {
    cp.exec('cal 6 1753', function(err, stdout) {
      stdout.should.equal(getMonth(6, 1753) + "\n");
      done();
    });
  });
  it('should match cal for a 6-week month like 8-2015', function (done) {
    cp.exec('cal 8 2015', function(err, stdout) {
      stdout.should.equal(getMonth(8, 2015) + "\n");
      done();
    });
  });
  it('should return the same month text as cal for 3-2014', function (done) {
    cp.exec('cal 3 2014', function(err, stdout) {
      stdout.should.equal(getMonth(3, 2014) + "\n");
      done();
    });
  });
  it('should return the same month text as cal for 12-1900', function (done) {
    cp.exec('cal 12 1900', function(err, stdout) {
      stdout.should.equal(getMonth(12, 1900) + "\n");
      done();
    });
  });
});
