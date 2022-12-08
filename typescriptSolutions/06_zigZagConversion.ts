// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:

// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const zigzag = new Array(numRows);
  for (let i = 0; i < zigzag.length; i++) {
    zigzag[i] = '';
  }

  let row = 0;
  let step = 1;
  for (let i = 0; i < s.length; i++) {
    zigzag[row] += s[i];

    if (row === 0) {
      step = 1;
    } else if (row === numRows - 1) {
      step = -1;
    }

    row += step;
  }

  return zigzag.join('');
}

// This implementation first checks if numRows is 1, in which case it returns the original string (there is no zigzag pattern if there is only one row).
// Otherwise, it creates an array of empty strings representing the zigzag pattern, and iterates over the characters of the input string, adding each character to the appropriate row in the zigzag pattern.
// The row is determined by keeping track of the current row and the step (either 1 or -1), which changes whenever the current row reaches the top or the bottom of the zigzag pattern.
// Finally, the function returns the concatenation of the rows in the zigzag pattern.
