#!/usr/bin/env node
var zeller = require('./zeller');

module.exports = function(month, year) {

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthYearStr = months[month-1] + " " + year;
  var monthLength = months[month-1].length;
  var spaces = Math.floor((15 - monthLength) / 2);

  var line1Arr = [];

  for (var i = 0; i < spaces; i++) {
    line1Arr.push(" ");
  }
  line1Arr.push(monthYearStr);
  var line1 = line1Arr.join('');
  var line2 = "Su Mo Tu We Th Fr Sa";
  ///////////////////////////////////

  var J = Math.floor(year / 100);
  var K = year % 100;

  var firstWeekdayOfMonth = zeller(+month, 1, J, K); // returns 1-7

  var dayCounts = [31,28,31,30,31,30,31,31,30,31,30,31];

  // check for leap year
  if ((year % 4 === 0 && year % 100 !== 0) ||
       year % 400 === 0) {
    dayCounts.splice(1,1,29);
  }

  var dayCount = dayCounts[month-1];


  // push the blank days into an array
  var daysArr = [];
  for (var q = 1; q < firstWeekdayOfMonth; q++) {
    if (q === firstWeekdayOfMonth -1) {
      daysArr.push("  ");
    } else {
      daysArr.push("   ");
    }
  }
  // daysArr.push("  ");

  var dayNum;

  // add each day of the month to the array
  for (var r = 1; r <= dayCount; r++) {
    if (r.toString().length < 2) { // if number is one digit...
      if ((firstWeekdayOfMonth + r - 2) % 7 === 0) {
        dayNum = " " + r;
      } else {
        dayNum = "  " + r;
      }
    } else {
      if ((firstWeekdayOfMonth + r - 2) % 7 === 0) {
        dayNum = r;
      } else {
        dayNum = " " + r;
      }
    }
    daysArr.push(dayNum);
  }
  // console.log("daysArr: ", daysArr);

  // split array into weeks
  var weeksNum = Math.ceil(dayCount / 7);
  // console.log("weeksNum: ", weeksNum);

  var linesArr = [];
  linesArr.push(line1, line2);

  for (var s = 1; s <= weeksNum + 1; s++) {
    linesArr.push(daysArr.slice(((s - 1) * 7), (s * 7)).join(''));
  }

  // console.log(linesArr);
  if (weeksNum === 4) {
    linesArr.push('');
  } else if (weeksNum === 5) {
    // linesArr.push('');
    // linesArr.push('\n');
  }

  var lines = linesArr.join('\n');
  linesArr = lines.split('');
  linesArr.push('\n');
  lines = linesArr.join('');
  return lines;
}
