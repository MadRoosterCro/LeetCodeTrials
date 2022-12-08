// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b); // sort the input array of numbers in ascending order

  const result = []; // array to store the resulting triplets that sum to 0

  // loop through the array, starting at the first element (index 0)
  // and ending at the third-to-last element (index length - 2)
  for (let i = 0; i < nums.length - 2; i++) {
    const ni = nums[i]; // get the current element at index i

    // if the current index is greater than 0 (i.e. not the first element)
    // and the current element is the same as the previous element,
    // skip this iteration
    if (i > 0 && ni == nums[i - 1]) continue;

    let s = i + 1; // start at the next element (index i + 1)
    let e = nums.length - 1; // end at the last element (index length - 1)

    // loop through the array, starting at the element after the current element (s)
    // and ending at the element before the last element (e)
    while (s < e) {
      const ns = nums[s]; // get the element at index s
      const ne = nums[e]; // get the element at index e
      const sum = ni + ns + ne; // calculate the sum of the three elements

      // if the sum is less than 0, increment the start index (s)
      // and continue to the next iteration
      if (sum < 0) {
        s++;
      }
      // if the sum is greater than 0, decrement the end index (e)
      // and continue to the next iteration
      else if (sum > 0) {
        e--;
      }
      // if the sum is 0, add the triplet [ni, ns, ne] to the result array
      // increment the start index (s) and skip over any duplicate values of ns
      else {
        result.push([ni, ns, ne]);
        s++;
        while (nums[s] === ns) s++;
      }
    }
  }

  return result; // return the resulting triplets that sum to 0
}
