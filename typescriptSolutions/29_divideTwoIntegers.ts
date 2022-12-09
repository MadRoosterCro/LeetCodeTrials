/*
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
The integer division should truncate toward zero, which means losing its fractional part. 
For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
Return the quotient after dividing dividend by divisor.
Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2^31, 2^31 − 1]. 
For this problem, if the quotient is strictly greater than 2^31 - 1, then return 2^31 - 1, and if the quotient is strictly less than -2^31, then return -2^31.
*/

function divide(dividend: number, divisor: number): number {
  // Calculate the result of dividing the dividend by the divisor
  let res = dividend / divisor;

  // Check if the result is positive or negative
  if (res > 0) {
    // If the result is positive, return the minimum of the result rounded down to the nearest integer and the maximum allowed value
    return Math.min(Math.floor(res), 2147483647);
  } else {
    // If the result is negative, return the maximum of the result rounded up to the nearest integer and the minimum allowed value
    return Math.max(Math.ceil(res), -2147483648);
  }
}
