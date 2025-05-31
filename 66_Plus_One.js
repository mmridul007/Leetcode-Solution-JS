// Problem Link: https://leetcode.com/problems/plus-one/description/

var plusOne = function (digits) {
    var strNumbers = digits.join('');
    var intNumbers = BigInt(strNumbers);
    var finalResult = intNumbers + 1n;
    var finalString = String(finalResult);
    var resultArr = [];
    for (let i = 0; i < finalString.length; i++) {
        resultArr[i] = Number(finalString[i])
    }
    return resultArr;
};