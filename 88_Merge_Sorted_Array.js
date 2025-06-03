// Problem Link: https://leetcode.com/problems/merge-sorted-array/description/

var merge = function (nums1, m, nums2, n) {
  if (m == 0 && n == 0) return [];
  if (m == 0 && n != 0) {
    for (let i = 0; i < m + n; i++) {
      nums1[i] = nums2[i];
    }
  }
  if (m != 0 && n != 0) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while (p1 >= 0 && p2 >= 0) {
      if (nums1[p1] > nums2[p2]) {
        nums1[p] = nums1[p1];
        p1--;
      } else {
        nums1[p] = nums2[p2];
        p2--;
      }
      p--;
    }

    while (p2 >= 0) {
      nums1[p] = nums2[p2];
      p2--;
      p--;
    }
  }
};
