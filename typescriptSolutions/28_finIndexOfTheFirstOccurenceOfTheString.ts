/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

function strStr(haystack: string, needle: string): number {
  // if the `needle` is empty, return 0
  if (needle.length === 0) {
    return 0;
  }

  // initialize the `index` variable to 0
  let index = 0;

  // loop through the `haystack` until `index` is equal to the length of the `haystack`
  while (index < haystack.length) {
    // if the substring of `haystack` starting at `index` and ending at `index` plus the length of `needle` is equal to `needle`, return `index`
    if (haystack.substring(index, index + needle.length) === needle) {
      return index;
    }
    // increment `index` by 1
    index++;
  }

  // if the loop ends without returning, return -1
  return -1;
}
