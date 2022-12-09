/*
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple 
of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

1 => 2 => 3 => 4 => 5
2 => 1 => 4 => 3 => 5
*/

//  * Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;

  const rootNode = new ListNode();
  let currentNode = rootNode;

  while (head) {
    // Create an array of nodes to be reversed
    const nodes = [];
    let count = k;
    while (head && count > 0) {
      nodes.push(head);
      head = head.next;
      count--;
    }

    // If there are less than k nodes remaining, do not reverse them
    if (nodes.length < k) {
      currentNode.next = nodes[0];
      break;
    }

    // Reverse the nodes in the array and attach them to the current node
    for (let i = k - 1; i >= 0; i--) {
      currentNode.next = new ListNode(nodes[i].val);
      currentNode = currentNode.next;
    }
  }

  return rootNode.next;
}
