// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the i^th line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

function maxArea(height: number[]): number {
  let len = height.length;
  let low = 0;
  let high = len - 1;
  let maxArea = 0;
  while (low < high) {
    maxArea = Math.max(
      maxArea,
      (high - low) * Math.min(height[low], height[high])
    );
    if (height[low] < height[high]) {
      low++;
    } else {
      high--;
    }
  }
  return maxArea;
}

// This is a function that takes in an array of numbers (representing the heights of bars in a bar graph),
// and it returns the maximum possible area that can be formed by a rectangle with the bars as its sides.
// The rectangle is formed by choosing two bars (one on the left and one on the right) and calculating the area
// as the product of the height of the shorter bar and the distance between the two bars.
// The function iteratively moves the left and right bars towards each other, keeping track of the maximum area seen so far,
// until the left and right bars meet, at which point it returns the maximum area.
