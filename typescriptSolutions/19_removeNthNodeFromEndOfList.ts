// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function removeNthFromEnd(head: ListNode, n: number): ListNode {
  // Create two pointers, p1 and p2, that point to the head of the list.
  let p1 = head;
  let p2 = head;

  // Move p1 n nodes ahead of p2.
  for (let i = 0; i < n; i++) {
    p1 = p1.next;
  }

  // If p1 is null, that means n is equal to the length of the list,
  // so we need to remove the head.
  if (!p1) {
    return head.next;
  }

  // Move both pointers forward until p1 reaches the end of the list.
  while (p1.next) {
    p1 = p1.next;
    p2 = p2.next;
  }

  // Remove the node that p2 points to.
  p2.next = p2.next.next;

  // Return the head of the list.
  return head;
}

/*
possible optimization
Use a single pointer instead of two pointers to reduce memory usage.
Use a sentinel node to simplify the code for removing the head of the list.
Use a variable to store the length of the list, and then use this variable to calculate the position of the node to remove, rather than iterating over the list to move the pointers.
*/

function removeNthFromEnd2(head: ListNode, n: number): ListNode {
  // Create a sentinel node to simplify the code for removing the head.
  const sentinel = new ListNode(0);
  sentinel.next = head;

  // Use a single pointer, p, that points to the sentinel node.
  let p = sentinel;

  // Use a variable, len, to store the length of the list.
  let len = 0;

  // Iterate over the list to calculate its length and move the pointer to the end.
  while (p.next) {
    len++;
    p = p.next;
  }

  // Calculate the position of the node to remove.
  const pos = len - n;

  // Move the pointer back to the sentinel node.
  p = sentinel;

  // Move the pointer to the node before the one to remove.
  for (let i = 0; i < pos; i++) {
    p = p.next;
  }

  // Remove the node.
  p.next = p.next.next;

  // Return the head of the list.
  return sentinel.next;
}
