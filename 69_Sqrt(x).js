// Problem Link: https://leetcode.com/problems/sqrtx/description/

var mySqrt = function (x) {
    if (x === 0) return 0;

    let testNumber = x * 0.5;
    let x1 = testNumber;
    let x2;

    while (true) {
        x2 = 0.5 * (x1 + x / x1); // Newton-Raphson method
        if (x1 === x2) break;
        x1 = x2;
    }

    return Math.floor(x1);
};