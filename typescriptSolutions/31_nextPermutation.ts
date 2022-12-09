/*
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of 
the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the 
sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.
*/

function nextPermutation(nums: number[]): void {
  // Find the first element from the right that is less than its successor
  let l = nums.length - 2;
  while (l >= 0 && nums[l] >= nums[l + 1]) {
    l--;
  }

  // If such element is found, find the smallest number to its right that is larger than it
  if (l >= 0) {
    let r = nums.length - 1;
    while (r > l && nums[r] <= nums[l]) {
      r--;
    }

    // Swap the two numbers
    [nums[l], nums[r]] = [nums[r], nums[l]];
  }

  // Reverse the numbers to the right of the element found above
  let left = l + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}
