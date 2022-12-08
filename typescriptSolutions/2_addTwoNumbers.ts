// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const addTwoNumbers = (l1: ListNode, l2: ListNode): ListNode => {
  // Create a dummy head node to hold the result
  const dummyHead = new ListNode(0);

  // Set current to the dummy head node
  let current = dummyHead;

  // Set carry to 0
  let carry = 0;

  // Loop until one of the linked lists is empty
  while (l1 !== null || l2 !== null) {
    // Set x to the value of the current node in l1, or 0 if l1 is empty
    let x = l1 !== null ? l1.val : 0;

    // Set y to the value of the current node in l2, or 0 if l2 is empty
    let y = l2 !== null ? l2.val : 0;

    // Set sum to the sum of x, y, and carry
    let sum = x + y + carry;

    // Set carry to the quotient of the sum and 10
    carry = Math.floor(sum / 10);

    // Set the value of the current node to the remainder of the sum and 10
    current.next = new ListNode(sum % 10);

    // Move current to the next node
    current = current.next;

    // Move l1 and l2 to the next nodes
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  // If there is a carry, add it to the result
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  // Return the result
  return dummyHead.next;
};
