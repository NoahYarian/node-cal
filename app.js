#!/usr/bin/env node

//console.log('     July 2015\nSu Mo Tu We Th Fr Sa\n          1  2  3  4\n 5  6  7  8  9 10 11\n12 13 14 15 16 17 18\n19 20 21 22 23 24 25\n26 27 28 29 30 31\n');
var monthYearStr = require('./lib/monthYearStr');

if (!process.argv[2]) {
  console.log("no argv[2]");
  console.log(monthYearStr());
}


