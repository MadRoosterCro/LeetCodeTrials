// Given a string s, return the longest palindromic substring in s.
// Manacher's algorithm, which uses a modified version of the input string to find the longest palindrome in O(n) time.



function longestPalindrome(s: string): string {
    // Create the modified string
    const t = ['#'];
    for (const c of s) {
      t.push(c);
      t.push('#');
    }
  
    // Initialize the dp array
    const n = t.length;
    const dp = new Array(n).fill(0);
  
    // Calculate the values in the dp array
    let center = 0;
    let right = 0;
    for (let i = 0; i < n; i++) {
      if (i < right) {
        dp[i] = Math.min(dp[2 * center - i], right - i);
      } else {
        dp[i] = 1;
      }
  
      // Expand the palindrome at i
      while (i - dp[i] >= 0 && i + dp[i] < n && t[i - dp[i]] === t[i + dp[i]]) {
        dp[i]++;
      }
  
      // Update center and right
      if (i + dp[i] - 1 > right) {
        center = i;
        right = i + dp[i] - 1;
      }
    }
  
    // Find the longest palindrome
    let maxLen = 0;
    let centerIndex = 0;
    for (let i = 0; i < n; i++) {
      if (dp[i] > maxLen) {
        maxLen = dp[i];
        centerIndex = i;
      }
    }
  
    // Return the longest palindrome
    const start = (centerIndex - maxLen + 1) / 2;
    const end = start + maxLen - 1;
    return s.substring(start, end);
  }
  