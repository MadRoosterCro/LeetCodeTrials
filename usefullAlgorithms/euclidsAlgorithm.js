/*
Euclidean algorithm is based on the following property: 
the greatest common factor of two numbers a and b is the same as the greatest common factor of b and the remainder of a divided by b. 

This property can be used to recursively compute the greatest common factor of a and b as follows:

If b is equal to 0, then return a as the greatest common factor, since a is the remainder of a divided by 0.

Otherwise, return the greatest common factor of b and the remainder of a divided by b.
*/

const gcd = (a, b) => {
  // If b is 0, then a is the gcd
  if (b === 0) {
    return a;
  }

  // Otherwise, return the gcd of b and the remainder of a divided by b
  return gcd(b, a % b);
};
