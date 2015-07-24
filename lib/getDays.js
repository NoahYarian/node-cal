var zeller = require('./zeller');

function getDays() {
  var date = new Date();
  var yearMod = 0;
  var m = convertMonth(date.getMonth() + 1);
  var year = date.getFullYear();
  var J = Math.floor(year / 100);
  var K = (year % 100) + yearMod;

  var dayCounts = [31,28,31,30,31,30,31,31,30,31,30,31];
  var daysArr = [];
  var days = dayCounts[m-1];

  var first = zeller(m, 1, J, K);
  // console.log("first = ",first);

  function convertMonth(month) {
    if (month < 3) {
      yearMod = -1
      return month + 12
    }
  }

  var yearToCheck = +(J.toString() + (K - yearMod).toString());
  if ((yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) ||
       yearToCheck % 400 === 0) {
    // is a leap year
    dayCounts.splice(1,1,29);
  }

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



  // // insert newline characters for each week
  // for (var s = 1; s <= weeksNum; s++) {
  //   daysArr.splice((s * 7), 0, "\n");
  // }
  // console.log("daysArr :", daysArr);

  // var week1Arr = [];
  // for (var i = 0; i < first - 1; i++) {
  //   week1Arr.push('   ');
  // }
  // for (var n = first, p = 1; n < 8; n++) {
  //   if (p.toString().length < 2) {
  //     week1Arr.push(" ");
  //   }
  //   week1Arr.push(p, " ");
  //   p++;
  // }
  // console.log(week1Arr.join(''));
  //  var week2Arr = [];
  //  var sunday = 7 - first + 2;

}

module.exports = getDays;

// h is the day of the week (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)
// // q is the day of the month
// // m is the month (3 = March, 4 = April, 5 = May, ..., 14 = February)
// // K the year of the century (year \mod 100).
// // J is the zero-based century (actually \lfloor year/100 \rfloor) For example, the zero-based centuries for 1995 and 2000 are 19 and 20 respectively
