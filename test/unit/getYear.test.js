#!/usr/bin/env node

var cp = require('child_process');
var should = require('chai').should();
var getYear = require('../../lib/year');

describe('getYear', function() {
  it('should return the same year text as cal for 2015', function (done) {
    cp.exec('cal 2015', function(err, stdout) {
      stdout.should.equal(getYear(2015) + "\n");
      done();
    });
  });
  it('should return the same year text as cal for 9999', function (done) {
    cp.exec('cal 9999', function(err, stdout) {
      stdout.should.equal(getYear(9999) + "\n");
      done();
    });
  });
  it('should return the same year text as cal for 1753', function (done) {
    cp.exec('cal 1753', function(err, stdout) {
      stdout.should.equal(getYear(1753) + "\n");
      done();
    });
  });
  it('should return the same year text as cal for 2000', function (done) {
    cp.exec('cal 2000', function(err, stdout) {
      stdout.should.equal(getYear(2000) + "\n");
      done();
    });
  });
  it('should return the same year text as cal for 1900', function (done) {
    cp.exec('cal 1900', function(err, stdout) {
      stdout.should.equal(getYear(1900) + "\n");
      done();
    });
  });
  it('should return the same year text as cal for 2008', function (done) {
    cp.exec('cal 2008', function(err, stdout) {
      stdout.should.equal(getYear(2008) + "\n");
      done();
    });
  });
});
