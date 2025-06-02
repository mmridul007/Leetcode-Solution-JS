// Problem Link: https://leetcode.com/problems/climbing-stairs/

var climbStairs = function (n) {
  if (n == 0) return 0;
  if (n => 1 && n <= 45) {
    let a = 1;
    let b = 1;
    for (let i = 1; i < n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
};
