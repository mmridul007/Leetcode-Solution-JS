// Problem Link: https://leetcode.com/problems/palindrome-number/

// Solution:
var isPalindrome = function (x) {
  var y = x.toString().split("").reverse().join("");
  var reversed = parseInt(y);
  // var reversedNum = reversed * Math.sign(x);
  if (x === reversed) {
    return true;
  } else {
    return false;
  }
};
