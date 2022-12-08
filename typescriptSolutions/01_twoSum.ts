// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; i++) {
    const diffIndex = nums.indexOf(target - nums[i]);
    if (diffIndex >= 0 && diffIndex !== i) {
      return [i, diffIndex];
    }
  }
  return [];
};
