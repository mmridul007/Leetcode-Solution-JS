// Problem Link: https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
  var commonPrefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(commonPrefix)) {
      commonPrefix = commonPrefix.slice(0, -1);
      if (commonPrefix === "") break;
    }
  }

  return commonPrefix;
};
