// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x) {
  // Convert the integer to a string and reverse it
  const reversed = x.toString().split('').reverse().join('');

  // Check if the reversed string is equal to the original integer
  return reversed === x.toString();
}
