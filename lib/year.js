#!/usr/bin/env node

module.exports = function(year) {

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayCounts = [31,28,31,30,31,30,31,31,30,31,30,31];
  console.log(getLine1("March"));

  function getLine1 (month) {
    var frontSpaces = Math.floor((20 - month.length) / 2);
    var backSpaces = 20 - month.length - frontSpaces;
    var arr = [];
    // for (var j = 0; j < frontSpaces; j++) {
    //   arr.push(" ");
    // }
    arr.push(getBlankString(frontSpaces));
    arr.push(month);
    arr.push(getBlankString(backSpaces));
    console.log(arr.join(''));
    return arr.join('');
  }

  function getBlankString(length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
      arr.push(" ");
    }
    return arr.join('');
  }

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



