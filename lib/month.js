#!/usr/bin/env node
var zeller = require('./zeller');

var month = {
  getFirstLines: function () {
    var date = new Date();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthYearStr = months[monthIndex] + " " + year + "\n" + "Su Mo Tu We Th Fr Sa";
    var monthLength = months[monthIndex].length;
    var spaces = Math.floor((15 - monthLength) / 2);
    var finalArr = [];
    for (var i = 0; i < spaces; i++) {
      finalArr.push(" ");
    }
    finalArr.push(monthYearStr);
    // console.log(finalArr);
    return finalArr.join('');
  },
  getDays: function() {
    var date = new Date();
    var m = date.getMonth() + 1;
    var year = date.getFullYear();
    var J = Math.floor(year / 100);
    var K = year % 100;
    var daysArr = [];

    var first = zeller(m, 1, J, K);
    // console.log("first = ",first);

    var dayCounts = [31,28,31,30,31,30,31,31,30,31,30,31];

    var yearToCheck = +(J.toString() + K.toString());
    if ((yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) ||
         yearToCheck % 400 === 0) {
      // is a leap year
      dayCounts.splice(1,1,29);
    }
    var days = dayCounts[m-1];

    // push the blank days into an array
    for (var q = 1; q < first - 1; q++) {
      daysArr.push("   ");
    }
    daysArr.push("  ");

    var dayNum;

    // add each day of the month to the array
    for (var r = 1; r <= days; r++) {
      if (r.toString().length < 2) {
        if ((first + r - 2) % 7 === 0) {
          dayNum = " " + r;
        } else {
          dayNum = "  " + r;
        }
      } else {
        if ((first + r - 2) % 7 === 0) {
          dayNum = r;
        } else {
          dayNum = " " + r;
        }
      }
      daysArr.push(dayNum);
    }

    // split array into weeks
    var weeksNum = Math.ceil(days / 7);
    // console.log("weeks = ", weeksNum);
    var linesArr = [];

    for (var s = 1; s <= weeksNum; s++) {
      linesArr.push(daysArr.slice(((s - 1) * 7), (s * 7)).join(''));
    }

    var lines = linesArr.join('\n');

    console.log(lines);
  }
}

module.exports = month;
