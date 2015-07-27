#!/usr/bin/env node

var getMonth = require('./month');
var _ = require('lodash');

module.exports = function(year) {

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayCounts = [31,28,31,30,31,30,31,31,30,31,30,31];

  var monthsArr = [];
  var i,j,m,lineArr;

  for (i = 1; i <= months.length; i++) {  // for each month
    m = getMonth(i, year, "year");  // set month's array of lines to m
    for (j = 0; j < m.length; j++) {  // for each line in the month
      while (m[j].length < 20) { // while the string length is less than a full line..
        lineArr = m[j].split('');
        lineArr.push(' ');  // add spaces to the end
        m[j] = lineArr.join('');
      }
    }
    monthsArr.push(m);
  }

  // console.log(monthsArr);
  // cut into 3 month chunks
  var chunkedMonths = _.chunk(monthsArr, 3);
  // console.log(chunkedMonths);

  var yearArr = ['                             ' + year + '\n\n'];
  // transform each chunk into calendar output
  chunkedMonths.forEach(function(chunk, k) {
    var rightMonthLine = _.trimRight(chunk[2][0]);
    yearArr.push([chunk[0][0], '  ', chunk[1][0], '  ', rightMonthLine, '\n'].join(''));

    // yearArr.push([chunk[0][7], '  ', chunk[1][7], '  ', chunk[2][7], '\n'].join(''));
    // console.log(chunk[1][7]);
    if (k === 3) {
      for (var n = 1; n < 7; n++) {
        yearArr.push([chunk[0][n], '  ', chunk[1][n], '  ', _.trimRight(chunk[2][n]), '\n'].join(''));
      }
      yearArr.push([chunk[0][7], '  ', chunk[1][7], '  ', _.trimRight(chunk[2][7])].join(''));
    } else {
      for (var n = 1; n < 8; n++) {
        yearArr.push([chunk[0][n], '  ', chunk[1][n], '  ', _.trimRight(chunk[2][n]), '\n'].join(''));
      }
      // yearArr.push([chunk[0][7], '  ', chunk[1][7], '  ', _.trimRight(chunk[2][7]), '\n'].join(''));
    }
  });
  // yearArr.pop();
  // console.log(yearArr);
  return yearArr.join('');

  function getYearLine (year) {
    var frontSpaces = Math.floor((64 - 4) / 2);
    var backSpaces = 64 - month.length - frontSpaces;
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
// function MonthInYear() {
//   return {
//     this.months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//     // this.getLine1 : function(month) {

//     // }
//   }
// }
 // for (var i = 1; i <= month.dayNum; i++) {
 //    if (i.toString().length < 2) {
 //      arr.push(" " + i.toString());
 //    } else {
 //      arr.push(i.toString());
 //    }
 //  }



