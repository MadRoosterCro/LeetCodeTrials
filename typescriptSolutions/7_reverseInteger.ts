// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, (2^31) - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

function reverse(x: number): number {
  // Store the sign of x in a separate variable
  const sign = x < 0 ? -1 : 1;

  // Get the absolute value of x
  x = Math.abs(x);

  // Reverse the digits of x
  let rev = 0;
  while (x > 0) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // Check if the reversed value is within the signed 32-bit integer range
  if (rev > Math.pow(2, 31) - 1) return 0;

  // Return the reversed value with the original sign
  return rev * sign;
}
