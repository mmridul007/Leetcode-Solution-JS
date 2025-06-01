// Problem Link: https://leetcode.com/problems/add-binary/description/

var addBinary = function(a, b) {
    let sum = BigInt(`0b${a}`)+BigInt(`0b${b}`);
    sum = sum.toString(2);
    return sum;
};