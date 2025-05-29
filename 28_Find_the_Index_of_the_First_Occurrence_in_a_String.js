// Problem Link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

var strStr = function (haystack, needle) {
  var firstFound = -1;
  var mainWord = haystack;
  var len = needle.length;
  for (let i = 0; i <= haystack.length - len; i++) {
    let sliceElement = mainWord.slice(i, i + len);
    if (sliceElement === needle) {
      firstFound = i;
      break;
    }
  }
  return firstFound;
};
