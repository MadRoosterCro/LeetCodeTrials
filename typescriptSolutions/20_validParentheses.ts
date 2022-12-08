/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

To solve this problem, we can use a stack data structure to keep track of the open brackets as we iterate through the string.
Whenever we encounter an open bracket, we push it onto the stack. When we encounter a closing bracket, we check to see if it matches
the most recently added open bracket on the stack. If it does, we pop the open bracket from the stack. If it doesn't, then the string is not valid
*/
function isValid(s: string): boolean {
    // Initialize a stack to keep track of open brackets
    const stack = [];

    // Iterate through the string
    for (const c of s) {
        // If the character is an open bracket, push it onto the stack
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        }
        // If the character is a closing bracket, check if it matches the
        // most recently added open bracket
        else if (c === ')' && stack[stack.length - 1] === '(' ||
                 c === '}' && stack[stack.length - 1] === '{' ||
                 c === ']' && stack[stack.length - 1] === '[') {
            // If it does, pop the open bracket from the stack
            stack.pop();
        }
        // If it doesn't match the most recent open bracket, the string is not valid
        else {
            return false;
        }
    }

    // If the stack is empty at the end, then the string is valid
    return stack.length === 0;
}
