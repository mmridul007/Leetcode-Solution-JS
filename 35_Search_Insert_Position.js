// Problem Link: https://leetcode.com/problems/search-insert-position/description/?source=submission-ac

var searchInsert = function (nums, target) {
  let position = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      position = i;
      break;
    } else if (nums[i] != target && nums[i] < target) {
      position = i + 1;
    } else if (nums[i] != target && nums[i] > target) {
      position = i;
      break;
    }
  }
  return position;
};
