// Given a roman numeral, convert it to an integer.

const LIBRARY = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s: string): number => {
  let cumulative = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'I':
        if (s[i + 1] === 'V') {
          cumulative += 4;
          i++;
        } else if (s[i + 1] === 'X') {
          cumulative += 9;
          i++;
        } else {
          cumulative += LIBRARY['I'];
        }
        break;
      case 'X':
        if (s[i + 1] === 'L') {
          cumulative += 40;
          i++;
        } else if (s[i + 1] === 'C') {
          cumulative += 90;
          i++;
        } else {
          cumulative += LIBRARY['X'];
        }
        break;
      case 'C':
        if (s[i + 1] === 'D') {
          cumulative += 400;
          i++;
        } else if (s[i + 1] === 'M') {
          cumulative += 900;
          i++;
        } else {
          cumulative += LIBRARY['C'];
        }
        break;
      default:
        cumulative += LIBRARY[s[i]];
        break;
    }
  }

  return cumulative;
};
