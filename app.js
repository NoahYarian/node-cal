#!/usr/bin/env node

var getMonth = require('./lib/month');
var getYear = require('./lib/year');

var opt1 = process.argv[2];
var opt2 = process.argv[3];

if (!opt1) {
  var date = new Date();
  var thisMonth = date.getMonth() + 1;
  var thisYear = date.getFullYear();
  console.log(getMonth(thisMonth, thisYear, "month"));
} else if (opt2) {
  opt1 = convertMonth(opt1);
  if (opt1 <= 12 &&
      opt1 >= 1 &&
      opt1 % 1 === 0 &&
      opt2 <= 9999 &&
      opt2 >= 1753 &&
      opt2 % 1 === 0) {
    console.log(getMonth(opt1, opt2, "month"));
  // } else {
    //display help
  }
} else { // opt1 && !opt2
  if (opt1 <= 9999 &&
      opt1 >= 1753 &&
      opt1 % 1 === 0) {
    console.log(getYear(opt1));
  // } else {
    //display help
  }
}

function convertMonth(str) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (!isNaN(+str)) {
    return str;
  } else {
    for (var i = 0; i < months.length; i++) {
      if (str.toLowerCase() === months[i].toLowerCase() || str.toLowerCase() === shortMonths[i].toLowerCase()) {
        return i + 1;
      // } else if (months[i].indexOf(str)) {

      }
    }
  }
}
