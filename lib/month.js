#!/usr/bin/env node
var zeller = require('./zeller');

module.exports = function(month, year) {

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthYearStr = months[month-1] + " " + year;
  var monthLength = months[month-1].length;
  var spaces = Math.floor((15 - monthLength) / 2);

  // var line1Arr = [];

  // for (var i = 0; i < spaces; i++) {
  //   line1Arr.push(" ");
  // }
  // line1Arr.push(monthYearStr);

  // var line1 = line1Arr.join('');

  // console.log("getLine1: ", getLine1(months[month-1]), year);
  var monthObj = {};
  monthObj.line1 = getLine1(months[month-1], year);
  monthObj.line2 = "Su Mo Tu We Th Fr Sa";
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

  var linesArr = [monthObj.line1, monthObj.line2];
  // linesArr.push(line1, line2);

  for (var s = 1; s <= weeksNum + 1; s++) {
    linesArr.push(daysArr.slice(((s - 1) * 7), (s * 7)).join(''));
  }
  // console.log("linesArr: ", linesArr);

  while (linesArr.length < 8) {
    linesArr.push('');
  }

  // if (weeksNum === 4) {
  //   linesArr.push('');
  // } else if (weeksNum === 5) {
  //   // linesArr.push('');
  //   // linesArr.push('\n');
  // }

  var lines = linesArr.join('\n');
  // linesArr = lines.split('');
  // linesArr.push('\n');
  // // console.log(linesArr);
  // lines = linesArr.join('');
  return lines;


  function getLine1 (month, year) {
    var remainingLength = year ? 15 : 20;
    var frontSpaces = Math.floor((remainingLength - month.length) / 2);
    var backSpaces = remainingLength - month.length - frontSpaces;
    var arr = [];
    arr.push(getBlankString(frontSpaces));
    arr.push(month);
    if (year) {
      arr.push(" ", year);
    } else {
      arr.push(getBlankString(backSpaces));
    }
    // console.log(arr.join(''));
    return arr.join('');
  }

  function getBlankString(length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
      arr.push(" ");
    }
    return arr.join('');
  }
}
