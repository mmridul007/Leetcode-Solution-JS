// Problem Link: https://leetcode.com/problems/remove-element/submissions/1646883423/

var removeElement = function (nums, val) {
    if (nums.length != 0 && val.length != 0) {
        var k = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    } else {
        return []
    }
};