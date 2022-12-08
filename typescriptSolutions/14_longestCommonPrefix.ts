// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function longestCommonPrefix(strings: string[]): string {
  if (strings.length === 0) {
    return '';
  }

  let prefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    const string = strings[i];
    let j = 0;
    while (j < prefix.length && j < string.length && prefix[j] === string[j]) {
      j++;
    }
    prefix = prefix.substring(0, j);
    if (prefix === '') {
      return '';
    }
  }

  return prefix;
}

// This function uses an efficient algorithm to find the longest common prefix by comparing the characters in the prefix
// and the current string one by one, and stopping as soon as it finds a mismatch. This allows the function to avoid the costly
// substring() calls. It runs in linear time and uses constant space
