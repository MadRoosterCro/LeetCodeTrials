/*
You are given a string s and an array of strings words. All the strings of words are of the same length.
A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.
For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. 
"acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.
*/

const findSubstring = (s: string, words: string[]) => {
  // Return an empty array if the words array is empty or not provided
  if (!words || words.length === 0) return [];

  const result = [];

  // Calculate the length of each word and the total length of all words
  const wordLength = words[0].length;
  const totalWordLength = words.length * wordLength;

  // Create a map that tracks the count of each word in the words array
  const wordCounts = new Map();
  for (const word of words) {
    const count = wordCounts.get(word) || 0;
    wordCounts.set(word, count + 1);
  }

  // Loop through the string, starting from the first character
  // that can fit the concatenated words as a substring
  for (let i = 0; i <= s.length - totalWordLength; i++) {
    // Create a copy of the word counts map for this iteration
    const tempWordCounts = new Map(wordCounts);

    // Loop through the string again, starting from the current index
    // and checking each possible word of length wordLength
    for (let j = i; j <= s.length; j += wordLength) {
      const possibleWord = s.substring(j, j + wordLength);
      const count = tempWordCounts.get(possibleWord) || 0;
      if (count > 0) {
        // Decrement the count of this word in the map, and remove it
        // if the count reaches zero
        tempWordCounts.set(possibleWord, count - 1);
        if (count === 1) {
          tempWordCounts.delete(possibleWord);
        }
      }
    }

    // If all of the words were found in the substring, add the current index
    // to the result array
    if (tempWordCounts.size === 0) {
      result.push(i);
    }
  }

  // Return the result array
  return result;
};
