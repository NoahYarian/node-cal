#!/usr/bin/env node

var should = require('chai').should();
var zeller = require('../../lib/zeller');

describe('zeller', function() {
  it('should return the correct weekday for 7-23-2015', function () {
    zeller(7, 23, 20, 15).should.equal(5);
  });
  it('should return the correct weekday for 8-1-2015', function () {
    zeller(8, 1, 20, 15).should.equal(7);
  });
  it('should return the correct weekday for 3-3-2014', function () {
    zeller(3, 3, 20, 14).should.equal(2);
  });
  it('should return the correct weekday for 12-16-1900', function () {
    zeller(12, 16, 19, 0).should.equal(1);
  });
  it('should return the correct weekday for 2-2-1900', function () {
    zeller(2, 2, 19, 0).should.equal(6);
  });
  it('should return the correct weekday for a leap year - 2-29-2012', function () {
    zeller(2, 29, 20, 12).should.equal(4);
  });
});
