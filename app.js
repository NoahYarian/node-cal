#!/usr/bin/env node

var getMonth = require('./lib/month');
var getYear = require('./lib/year');

var opt1 = process.argv[2];
var opt2 = process.argv[3];

if (!opt1) {
  getMonth(thisMonth, thisYear);
} else if (opt2) {
  if (opt1 <= 12 &&
      opt1 >= 1 &&
      opt1 % 1 === 0 &&
      opt2 <= 9999 &&
      opt2 >= 1753 &&
      opt2 % 1 === 0) {
    getMonth(opt1, opt2);
  } else {
    //display help
  }
} else { // opt1 && !opt2
  if (opt1 <= 9999 &&
      opt1 >= 1753 &&
      opt1 % 1 === 0) {
    getYear(opt1);
  } else {
    //display help
  }
}


