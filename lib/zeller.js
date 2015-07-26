module.exports = function(m, q, J, K) {

  if (m < 3) { // if it's January or February
    m += 12; //---- add 12 to the month number
    if (K > 0) { // if it's not a century
      K--; //-------- subtract 1 from the year
    } else { ////// but if it is a century...
      K = 99; //----- set year down to 99
      J--; //-------- and century down 1
    }
  }

  var ans =
    (q +
      Math.floor((13 * (m + 1)) / 5) +
      K +
      Math.floor(K / 4) +
      Math.floor(J / 4) +
      5 * J
    ) % 7;
  return ans === 0 ? 7 : ans; //return 7 for Saturday instead of 0
}
