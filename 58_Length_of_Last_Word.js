// Problem link: https://leetcode.com/problems/length-of-last-word/description/

var lengthOfLastWord = function (s) {
    var trimedStr = s.trim();
    var strTokens = trimedStr.split(/\s+/);
    var finalWord = strTokens[strTokens.length - 1]
    return finalWord.length;
};