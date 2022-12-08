//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// One possible solution is to use a divide and conquer approach to find the median of the two sorted arrays in O(log(m+n)) time complexity.
// This can be done by first partitioning the two arrays into two subarrays of equal length, such that one subarray contains the elements with
// smaller values and the other subarray contains the elements with larger values. We can then compare the maximum value of the left subarray
// of nums1 with the minimum value of the right subarray of nums2, and vice versa, to determine which subarrays we need to consider in the next step of the algorithm.

// If the maximum value of the left subarray of nums1 is less than or equal to the minimum value of the right subarray of nums2,
// and the sum of the lengths of the left subarrays of nums1 and nums2 is equal to the total length of the arrays, then we have found the median.
// Otherwise, we can discard one of the subarrays and continue the process on the remaining subarrays until we find the median.

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let m = nums1.length;
  let n = nums2.length;

  // Make sure nums1 is the shorter array
  if (m > n) {
    [nums1, nums2] = [nums2, nums1];
    [m, n] = [n, m];
  }

  // The indices of the partitions
  let iMin = 0;
  let iMax = m;
  const halfLen = Math.floor((m + n + 1) / 2);

  // Binary search for the partition of nums1
  while (iMin <= iMax) {
    const i = Math.floor((iMin + iMax) / 2);
    const j = halfLen - i;

    if (i < m && nums2[j - 1] > nums1[i]) {
      // i is too small, must increase it
      iMin = i + 1;
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      // i is too big, must decrease it
      iMax = i - 1;
    } else {
      // i is perfect

      // Get the max of the left subarray of nums1
      let maxOfLeft: number;
      if (i === 0) {
        maxOfLeft = nums2[j - 1];
      } else if (j === 0) {
        maxOfLeft = nums1[i - 1];
      } else {
        maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]);
      }

      if ((m + n) % 2 === 1) {
        // The total number of elements is odd, the median is the max of left
        return maxOfLeft;
      }

      // Get the min of the right subarray of nums1
      let minOfRight: number;
      if (i === m) {
        minOfRight = nums2[j];
      } else if (j === n) {
        minOfRight = nums1[i];
      } else {
        minOfRight = Math.min(nums1[i], nums2[j]);
      }

      // The total number of elements is even, the median is the average of the
      // max of left and min of right
      return (maxOfLeft + minOfRight) / 2;
    }
  }

  // Should never reach here
  return 0;
}
