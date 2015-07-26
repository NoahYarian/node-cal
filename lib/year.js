#!/usr/bin/env node

var getMonth = require('./month');

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

  console.log(monthsArr);

  function assembleReturnArray() {
    var retArr = [];

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



