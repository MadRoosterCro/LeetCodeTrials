/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Constraints:
1 <= n <= 8
*/

function generateParenthesis(n: number): string[] {
  // check if the input is valid
  if (n < 1 || n > 8) {
    throw new Error('n must be between 1 and 8 inclusive');
  }

  const result: string[] = [];

  // this inner function will recursively generate all combinations
  // of well-formed parentheses
  function generate(str: string, open: number, closed: number): void {
    // base case: if we have used up all pairs of parentheses,
    // add the resulting string to the result array
    if (open === 0 && closed === 0) {
      result.push(str);
      return;
    }

    // if we have more open parentheses available, we can add one
    // to the string and continue recursing
    if (open > 0) {
      generate(str + '(', open - 1, closed + 1);
    }

    // if we have more closed parentheses available, we can add one
    // to the string and continue recursing
    if (closed > 0) {
      generate(str + ')', open, closed - 1);
    }
  }

  // start generating all combinations by calling the inner function
  // with the initial state
  generate('', n, 0);

  return result;
}
