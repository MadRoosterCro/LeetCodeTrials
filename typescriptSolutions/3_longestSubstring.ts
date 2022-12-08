//Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s: string): number {
  // Create a set to store the characters in the current substring
  const set = new Set<string>();

  // Initialize start and end pointers
  let start = 0;
  let end = 0;

  // Initialize max length to 0
  let maxLength = 0;

  // Loop while the end pointer is less than the length of the string
  while (end < s.length) {
    // If the character at the end pointer is not in the set, add it to the set
    if (!set.has(s[end])) {
      set.add(s[end]);
      end++;

      // Update the max length if the current substring is longer than the previous max
      maxLength = Math.max(maxLength, end - start);
    } else {
      // If the character at the end pointer is in the set, remove the character at the start pointer from the set
      set.delete(s[start]);
      start++;
    }
  }

  // Return the max length
  return maxLength;
}
