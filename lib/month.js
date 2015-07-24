#!/usr/bin/env node

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
  }
}

module.exports = month;