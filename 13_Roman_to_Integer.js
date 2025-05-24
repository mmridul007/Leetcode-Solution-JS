// Problem Link: https://leetcode.com/problems/roman-to-integer/

var romanToInt = function (s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var sum = 0;
  for (var i = 0; i < s.length; i++) {
    var current = values[s[i]];
    var next = values[s[i + 1]];
    if (next > current) {
      sum += next - current;
      i++;
    } else {
      sum += current;
    }
  }
  return sum;
};
