// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

function threeSumClosest(nums: number[], target: number): number {
  // Sort the array of numbers in ascending order
  nums.sort((a, b) => a - b);

  // Initialize deltaMin with the maximum safe integer value
  // This will be used to track the minimum difference between the current sum and the target value
  let deltaMin = Number.MAX_SAFE_INTEGER;

  // Initialize result with 0
  // This will be used to track the closest sum to the target value that is found
  let result = 0;

  // Loop through each element in the array (except the last two)
  for (let i = 0; i < nums.length - 2; i++) {
    // Set the left pointer to the element after the current element
    let left = i + 1;

    // Set the right pointer to the last element in the array
    let right = nums.length - 1;

    // Loop while the left pointer is less than the right pointer
    while (left < right) {
      // Calculate the sum of the current element, the element at the left pointer, and the element at the right pointer
      const currentSum = nums[i] + nums[left] + nums[right];

      // If the current sum is equal to the target value, return the current sum
      if (currentSum === target) {
        return currentSum;
      }

      // If the absolute difference between the current sum and the target value is less than the current minimum difference,
      // update deltaMin and result with the new minimum difference and the current sum, respectively
      if (Math.abs(currentSum - target) < deltaMin) {
        deltaMin = Math.abs(currentSum - target);
        result = currentSum;
      }

      // If the current sum is greater than the target value, decrement the right pointer
      if (currentSum > target) {
        right--;
        // Continue to the next iteration of the loop without executing any further code in the current iteration
        continue;
      }

      // If the current sum is less than the target value, increment the left pointer
      if (currentSum < target) {
        left++;
        // Continue to the next iteration of the loop without executing any further code in the current iteration
        continue;
      }
    }
  }

  // Return the result (the closest sum to the target value that was found)
  return result;
}
