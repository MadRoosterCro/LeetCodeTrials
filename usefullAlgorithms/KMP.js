/*
The Knuth-Morris-Pratt (KMP) algorithm is a string matching algorithm that is used to find the occurrence of a pattern within a larger string. 
It is a faster and more efficient alternative to the brute-force string matching algorithm, which simply checks every possible substring of 
the larger string to see if it matches the pattern.
*/

function KMPSearch(pattern, text) {
  // Create an array to store the computed prefix-suffix values for the pattern
  let lps = new Array(pattern.length);

  // Initialize the first element of the array to 0
  lps[0] = 0;

  // Initialize variables to keep track of the current position in the pattern and text
  let j = 0;
  let i = 1;

  // Loop through the pattern and compute the prefix-suffix values
  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      // If the current characters in the pattern and text match, increment j and lps[i]
      j++;
      lps[i] = j;
      i++;
    } else {
      // If the current characters don't match, check if j is greater than 0
      if (j !== 0) {
        // If j is greater than 0, set j to the value of lps[j - 1] and continue the loop
        j = lps[j - 1];
      } else {
        // If j is 0, set lps[i] to 0 and increment i
        lps[i] = 0;
        i++;
      }
    }
  }

  // Initialize variables to keep track of the current position in the pattern and text
  i = 0;
  j = 0;

  // Loop through the text and search for the pattern
  while (i < text.length) {
    if (pattern[j] === text[i]) {
      // If the current characters in the pattern and text match, increment i and j
      i++;
      j++;
    }

    // If all characters in the pattern have been matched, return the starting index of the pattern in the text
    if (j === pattern.length) {
      return i - j;
    } else if (i < text.length && pattern[j] !== text[i]) {
      // If the current characters don't match and i is less than the length of the text, check if j is greater than 0
      if (j !== 0) {
        // If j is greater than 0, set j to the value of lps[j - 1] and continue the loop
        j = lps[j - 1];
      } else {
        // If j is 0, increment i and continue the loop
        i++;
      }
    }
  }

  // If the pattern is not found in the text, return -1
  return -1;
}

/*USAGE:
 To use this function, you can pass in a pattern string and a text string as arguments, and it will return the starting
 index of the first occurrence of the pattern within the text, or -1 if the pattern is not found.
*/
