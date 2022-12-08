// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

/// THIS TIME FINAL ONE FOR REALZ
// The regular expression pattern is constructed by concatenating the string p with the start and end of line anchors (^ and $),
// which ensure that the entire string s matches the pattern p from start to end. The test method is used to check if the regular expression
// pattern matches the string s. If the pattern matches the string, the function returns true, otherwise it returns false.

function isMatchTheBestSolution(s: string, p: string): boolean {
  return new RegExp('^' + p + '$').test(s);
}

// the O(n) solution with KMP algorithm

function isMatch(s: string, p: string): boolean {
  // Compute the failure table for the pattern.
  const failure = computeFailure(p);

  // Initialize the matching indices.
  let i = 0; // Index into the input string.
  let j = 0; // Index into the pattern.

  // Keep trying to match the pattern until we reach the end of the input string.
  while (i < s.length) {
    // If the current characters of s and p match, or if the current character of p is a '.',
    // we can move on to the next characters of s and p.
    if (s[i] === p[j] || p[j] === '.') {
      i++;
      j++;
    }

    // If the current character of p is a '*', we have two possible cases:
    // 1. The star stands for zero occurrences of the preceding character. In this case,
    //    we can just ignore the character and the star and move on to the next character of p.
    // 2. The star stands for one or more occurrences of the preceding character. In this case,
    //    we try to match one more character from s with the character before the star in p,
    //    and then we try to match the remaining characters of s and p.
    else if (p[j] === '*') {
      j++;
      if (j === p.length || (s[i] !== p[j] && p[j] !== '.')) {
        i++;
      }
    }

    // If the current characters of s and p do not match, and the current character of p is not
    // a '.' or a '*', we can use the failure table to skip over sub-patterns of p that are known
    // to not match the input string.
    else {
      j = failure[j - 1];
      if (j === -1) {
        i++;
        j = 0;
      }
    }
  }

  // If we reached the end of the input string and we matched the entire pattern, the string s
  // matches the pattern p. Otherwise, it does not match.
  return j === p.length;
}

// Computes the failure table for the given pattern.
function computeFailure(p: string): number[] {
  const failure = new Array(p.length);
  failure[0] = -1;

  let j = 0;
  for (let i = 1; i < p.length; i++) {
    if (p[i] === p[j] || p[j] === '.') {
      failure[i] = j + 1;
      j++;
    } else {
      j = failure[j - 1];
      while (j >= 0 && p[i] !== p[j] && p[j] !== '.') {
        j = failure[j - 1];
      }
      failure[i] = j + 1;
    }
  }

  return failure;
}

// with recursion O(n^2)
function match(s: string, p: string): boolean {
  // If the pattern is empty, the only way for the string to match is if it's also empty.
  if (p.length === 0) return s.length === 0;

  // Check if the first character in the pattern is '*'. This is a special case because
  // it can match zero characters.
  if (p[0] === '*') {
    // In this case, we need to check if the pattern without the '*' at the beginning
    // can match the string. This is equivalent to checking if the string can match the
    // pattern with the '*' and the character preceding it removed, because the '*' can
    // match zero characters.
    return (
      match(s, p.slice(2)) ||
      // If the pattern without the '*' at the beginning doesn't match the string, we
      // need to check if the pattern can match the string with the first character
      // removed. In this case, the '*' will match one character from the string.
      (s.length > 0 && match(s.slice(1), p))
    );
  }

  // If the first character in the pattern is '.', it can match any single character.
  // In this case, we need to check if the pattern without the '.' at the beginning
  // can match the string with the first character removed.
  if (p[0] === '.') {
    return s.length > 0 && match(s.slice(1), p.slice(1));
  }

  // If the first character in the pattern is not '*' or '.', it must match the first
  // character in the string. In this case, we need to check if the pattern without
  // the first character can match the string with the first character removed.
  return s.length > 0 && s[0] === p[0] && match(s.slice(1), p.slice(1));
}

// dynamic programming O(n)
function match2(s: string, p: string): boolean {
  // Create a table to store the results of previous computations.
  // The table will have m + 1 rows, where m is the length of the pattern,
  // and n + 1 columns, where n is the length of the string.
  const table = Array(p.length + 1)
    .fill(0)
    .map(() => Array(s.length + 1).fill(false));

  // The empty pattern matches the empty string, so we set the value at
  // table[0][0] to true.
  table[0][0] = true;

  // For each character in the pattern, starting from the second character
  // (because the first character has already been handled), check if it
  // can match the string.
  for (let i = 1; i <= p.length; i++) {
    // If the character is '*', it can match zero or more characters in the
    // string. In this case, we need to check if the pattern without the
    // '*' at the beginning can match the string, or if the string with the
    // first character removed can match the pattern with the '*' and the
    // character preceding it removed, because the '*' can match zero or
    // more characters in the string.
    if (p[i - 1] === '*') {
      table[i][0] = table[i - 2][0];
      for (let j = 1; j <= s.length; j++) {
        table[i][j] = table[i - 2][j] || table[i][j - 1];
      }
    }
    // If the character is '.', it can match any single character in the
    // string. In this case, we need to check if the pattern without the
    // '.' at the beginning can match the string with the first character
    // removed.
    else if (p[i - 1] === '.') {
      table[i][0] = false;
      for (let j = 1; j <= s.length; j++) {
        table[i][j] = table[i - 1][j - 1];
      }
    }
    // If the character is any other character, it must match the first
    // character in the string. In this case, we need to check if the
    // pattern without the first character can match the string with the
    // first character removed.
    else {
      table[i][0] = false;
      for (let j = 1; j <= s.length; j++) {
        table[i][j] = p[i - 1] === s[j - 1] && table[i - 1][j - 1];
      }
    }
  }

  // Return the value at table[m][n], where m is the length of the pattern
  // and n is the length of the string. This will be true if the pattern
  // matches the string, and false otherwise.
  return table[p.length][s.length];
}

// FINAL ONE WITH THESE CONSTRAINTS
//1 <= s.length <= 20
// 1 <= p.length <= 30
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

function match3(s: string, p: string): boolean {
  // Create a table to store the results of previous computations.
  // The table will have m + 1 rows, where m is the length of the pattern,
  // and n + 1 columns, where n is the length of the string.
  const table = Array(p.length + 1)
    .fill(0)
    .map(() => Array(s.length + 1).fill(false));

  // The empty pattern matches the empty string, so we set the value at
  // table[0][0] to true.
  table[0][0] = true;

  // For each character in the pattern, starting from the second character
  // (because the first character has already been handled), check if it
  // can match the string.
  for (let i = 1; i <= p.length; i++) {
    // If the character is '*', it can match zero or more characters in the
    // string. In this case, we need to check if the pattern without the
    // '*' at the beginning can match the string, or if the string with the
    // first character removed can match the pattern with the '*' and the
    // character preceding it removed, because the '*' can match zero or
    // more characters in the string.
    if (p[i - 1] === '*') {
      table[i][0] = table[i - 2][0];
      for (let j = 1; j <= s.length; j++) {
        table[i][j] = table[i - 2][j] || table[i][j - 1];
      }
    }
    // If the character is '.', it can match any single character in the
    // string. In this case, we need to check if the pattern without the
    // '.' at the beginning can match the string with the first character
    // removed.
    else if (p[i - 1] === '.') {
      table[i][0] = false;
      for (let j = 1; j <= s.length; j++) {
        table[i][j] = table[i - 1][j - 1];
      }
    }
    // If the character is any other character, it must match the first
    // character in the string. In this case, we need to check if the
    // pattern without the first character can match the string with the
    // first character removed.
    else {
      table[i][0] = false;
      for (let j = 1; j <= s.length; j++) {
        table[i][j] = p[i - 1] === s[j - 1] && table[i - 1][j - 1];
      }
    }
  }

  // Return the value at table[m][n], where m is the length of the pattern
  // and n is the length of the string. This will be true if the pattern
  // matches the string, and false otherwise.
  return table[p.length][s.length];
}
