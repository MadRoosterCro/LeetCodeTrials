/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

Constraints:

1 <= nums.length <= 200
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9

*/

function uniqueQuadruplets(nums: number[], target: number): number[][] {
  // Sort the input array
  nums.sort((a, b) => a - b);

  // Initialize a list to hold the results
  const result: number[][] = [];

  // Loop through the elements in the input array, taking four at a time
  for (let i = 0; i < nums.length - 3; i++) {
    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Loop through the remaining elements in the input array, taking three at a time
    for (let j = i + 1; j < nums.length - 2; j++) {
      // Skip duplicates
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      // Loop through the remaining elements in the input array, taking two at a time
      for (let k = j + 1; k < nums.length - 1; k++) {
        // Skip duplicates
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          continue;
        }

        // Loop through the remaining elements in the input array, taking one at a time
        for (let l = k + 1; l < nums.length; l++) {
          // Skip duplicates
          if (l > k + 1 && nums[l] === nums[l - 1]) {
            continue;
          }

          // If the sum of the current four elements equals the target, add them to the result list
          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            result.push([nums[i], nums[j], nums[k], nums[l]]);
          }
        }
      }
    }
  }

  // Return the list of quadruplets
  return result;
}

// OPTIMIZED SOLUTION

function fourSum(nums: number[], target: number): number[][] {
  // Sort the input array
  nums.sort((a, b) => a - b);

  // Initialize a list to hold the results
  const result: number[][] = [];

  // Loop through the elements in the input array, taking three at a time
  for (let i = 0; i < nums.length - 3; i++) {
    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Loop through the remaining elements in the input array, taking two at a time
    for (let j = i + 1; j < nums.length - 2; j++) {
      // Skip duplicates
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      // Initialize two pointers: one at the current index and one at the end of the input array
      let left = j + 1;
      let right = nums.length - 1;

      // Loop until the pointers meet
      while (left < right) {
        // Calculate the sum of the current three elements and the element at the left pointer
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        // If the sum equals the target, add the current quadruplet to the result list and move the pointers
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;

          // Skip duplicates
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        }

        // If the sum is less than the target, move the left pointer to the right
        else if (sum < target) {
          left++;
        }

        // If the sum is greater than the target, move the right pointer to the left
        else {
          right--;
        }
      }
    }
  }

  // Return the list of quadruplets
  return result;
}

/*
This solution has a time complexity of O(n^3), which is much more efficient than the previous solution for large input arrays. 
The key to improving the time complexity is using the two-pointer technique to avoid nested loops and instead loop through the input array once, 
using two pointers to iterate through the remaining elements in the array.
*/
