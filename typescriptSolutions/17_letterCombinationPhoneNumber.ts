// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

function letterCombinations(digits: string): string[] {
  // Map each digit to its corresponding letters.
  // 1 is not included because it does not map to any letters.
  const map: { [key: string]: string } = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  // If the input string is empty, return an empty array.
  if (digits.length === 0) {
    return [];
  }

  // Create a queue to hold the letter combinations and add the first digit's letters to it.
  const queue: string[] = map[digits[0]].split('');

  // Iterate over the remaining digits in the input string.
  for (let i = 1; i < digits.length; i++) {
    // Get the current digit's letters.
    const letters = map[digits[i]];

    // Keep track of the number of letter combinations in the queue.
    // We will use this to determine when to stop adding new combinations.
    const size = queue.length;

    // Iterate over the current digit's letters.
    for (const letter of letters) {
      // Add the current letter to each of the letter combinations in the queue.
      // Stop adding new combinations when we have reached the end of the queue.
      for (let j = 0; j < size; j++) {
        queue.push(queue[j] + letter);
      }
    }

    // Remove the old letter combinations from the queue.
    queue.splice(0, size);
  }

  // Return the letter combinations in the queue.
  return queue;
}

// optimized solution with recursion, reducing the time complexity from O(n * 4^n) to O(4^n), since we no longer need to iterate over the queue for each digit.
// This function has a time complexity of O(4^n), where n is the number of digits in the input string, since we need to generate 4^n combinations and each combination requires O(n) time to construct.
// It also has a space complexity of O(4^n), since we need to store all the combinations in a list.

function letterCombinations2(digits: string): string[] {
  // Map each digit to its corresponding letters.
  // 1 is not included because it does not map to any letters.
  const map: { [key: string]: string } = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  // If the input string is empty, return an empty array.
  if (digits.length === 0) {
    return [];
  }

  // Create a list to hold the letter combinations.
  const combinations: string[] = [];

  // Define a recursive function to generate the combinations.
  // This function takes a combination string and a list of remaining digits.
  function generateCombinations(
    combination: string,
    remaining: string[]
  ): void {
    // If there are no remaining digits, add the current combination to the list.
    if (remaining.length === 0) {
      combinations.push(combination);
      return;
    }

    // Get the first remaining digit and its corresponding letters.
    const digit = remaining[0];
    const letters = map[digit];

    // Iterate over the letters and generate new combinations by appending each letter to the current combination.
    // Then, call the recursive function with the new combination and the remaining digits without the first digit.
    for (const letter of letters) {
      generateCombinations(combination + letter, remaining.slice(1));
    }
  }

  // Start the recursive process with an empty combination string and the list of digits in the input string.
  generateCombinations('', digits.split(''));

  // Return the list of letter combinations.
  return combinations;
}

// clean
function letterCombinations3(digits: string): string[] {
  // Return empty array if input is empty or null
  if (!digits) {
    return [];
  }

  // Map digits to corresponding letters
  const dict: { [key: string]: string[] } = {
    '1': null, // Digit 1 has no corresponding letters
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  // Initialize result array with empty string
  let res: string[] = [''];

  // Iterate over each digit in input
  for (const c of digits) {
    // Skip iteration if digit has no corresponding letters
    const list = dict[c];
    if (!list) {
      continue;
    }
    // Create temporary array to store new combinations
    const temp: string[] = [];
    // Generate new combinations by appending each letter in list to each string in result
    for (const l of list) {
      for (const str of res) {
        temp.push(str + l);
      }
    }
    // Set result to new combinations
    res = temp;
  }

  return res;
}

/*
Here is a brief explanation of what the code does:

The input digits is checked if it is empty or null. If it is, the function returns an empty array.
The dict object maps digits to the corresponding letters. For example, the digit 2 maps to ['a', 'b', 'c'].
The res array is initialized with an empty string. This will be used to store the resulting letter combinations.
The code then iterates over each digit in digits. If a digit has no corresponding letters (i.e. it maps to null in dict), the iteration is skipped.
For each digit, a new array temp is created to store the new letter combinations that will be generated by appending each letter in the digit's corresponding letter list to each string in res.
The temp array is then set as the new res array, and the process repeats for the next digit in digits.
Finally, the res array is returned, which now contains all the letter combinations.

*/
