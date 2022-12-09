/*
Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring
*/

// Solution 1:
function longestValidParentheses(tape: string): number {
  // Initialize max to 0. This variable will be used to track the
  // longest sequence of valid parentheses that we find.
  let max = 0;

  // Initialize the index variable to -1. This variable will be used
  // to keep track of the current position in the input string.
  let idx = -1;

  // The char function takes a terminal string as input and returns
  // true if the next character in the input string is the expected
  // character. Otherwise, it returns false.
  function char(terminal: string): boolean {
    // If the current index is within the bounds of the input string
    // and the character at the current index is the expected character,
    // then increment the index and return true.
    if (idx < tape.length && tape[idx] === terminal) {
      idx++;
      return true;
    }
    // Otherwise, return false.
    return false;
  }
  // The S function is the main parsing function. It returns the length
  // of the longest sequence of valid parentheses that it finds.
  function S(): number {
    // Initialize the count variable to 0. This variable will be used
    // to track the length of the current sequence of valid parentheses.
    let cnt = 0;
    // If the next character is not an open parenthesis, then return 0
    // because there is no valid sequence of parentheses starting with
    // a closing parenthesis.
    if (!char('(')) return 0;
    // Recursively parse the next sequence of parentheses. If this returns
    // -1, then there is no valid sequence of parentheses starting at
    // this point, so return -1.
    cnt += S();
    // The next character must be a closing parenthesis, otherwise the
    // sequence of parentheses is not valid, so return -1.
    if (!char(')')) return -1;
    // Increment the count by 1 to account for the closing parenthesis
    // that we just matched.
    cnt++;
    // Defines a local variable next to keep track of the result of the next recursive call to S.
    let next = S();
    // While the next recursive call to S returns a value greater than 0,
    while (next > 0) {
      // Increment the count by the value returned by the next recursive call to S.
      cnt += next;
      // Recursively call S again to see if there is another valid sequence of parentheses
      next = S();
    }
    // If the next recursive call to S returns -1, then there is no valid sequence of parentheses
    max = Math.max(cnt, max);
    // Return the count of the current sequence of parentheses.
    return cnt;
    // This loop ensures that the max variable always contains the longest sequence of valid parentheses found so far
  }
  // While the current index is within the bounds of the input string,
  while (idx < tape.length) {
    // Recursively call the S function to parse the next sequence of parentheses.
    S();
    // Increment the index to move to the next character in the input string.
    idx++;
  }
  // Return the longest sequence of valid parentheses found.
  // We multiply by 2 because the cnt variable only counts the number of valid pairs of parentheses,
  // but the length of the longest sequence of valid parentheses will actually be twice this value
  // (since each pair consists of an opening and closing parenthesis).
  return max * 2;
}

// A BIT SHORTER SOLUTION
function longestValidParentheses2(s: string): number {
  const last: number[] = new Array(s.length).fill(-1); // an array 'last' of length equal to the length of string 's' is initialized with -1 at each index
  let maxL = 0,
    cur = -1; // 'maxL' is initialized to 0 and 'cur' is initialized to -1

  for (let i = 0; i < s.length; i++) {
    // loop through each character in 's'
    if (s[i] === ')' && cur >= 0 && s[cur] === '(') {
      // if current character is ')' and the character at the index stored in 'cur' is '(',
      cur = last[cur]; // update 'cur' to the value stored at the index of 'last' that is equal to the current value of 'cur'
      maxL = Math.max(maxL, i - cur); // update 'maxL' to the maximum of its current value and the difference between the index 'i' and the current value of 'cur'
    } else {
      last[i] = cur; // if the current character is not ')' or the character at the index stored in 'cur' is not '(', store the current value of 'cur' at index 'i' of 'last'
      cur = i; // update 'cur' to the current index 'i'
    }
  }
  return maxL; // return 'maxL'
}
