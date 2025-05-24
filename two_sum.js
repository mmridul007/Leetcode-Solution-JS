// Problem Link: https://leetcode.com/problems/two-sum/description/

function Gym(nums, target) {
  var result = [];
  for (var i = 0; i <= nums.length; i++) {
    for (var j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result.push(i, j);
        break;
      }
    }
  }
  return result;
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(Gym(nums, target));
