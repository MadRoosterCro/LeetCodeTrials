/*
Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

1=>2=>3=>4
2=>1=>4=>3
*/

// Definition for singly-linked list
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  // check if the input head is null
  if (head == null) return null;
  // check if the next property of the head node is null. If it is, this means that the list only has one node, so there are no pairs of nodes to swap.
  if (head.next == null) return head;

  // initialize temp1 and temp2 to the head node and the next node of the head node, respectively.
  let temp1 = head;
  let temp2 = head.next;

  while (true) {
    // initializes t to the value of the first node in the current pair of nodes being processed
    let t = temp1.val;
    // set the value of the first node in the current pair to the value of the second node.
    temp1.val = temp2.val;
    // set the value of the second node in the current pair to the value stored in t
    temp2.val = t;
    // check if there are any more pairs of nodes to process by checking if the next property of the second node in the current pair is null,
    // and also checking if the next property of that node is null. If both of these checks are true, it means that there are no more pairs
    // of nodes to process, so the break statement is called to exit the while loop
    if (temp2.next != null && temp2.next.next != null) {
      temp1 = temp1.next.next;
      temp2 = temp2.next.next;
    } else {
      break;
    }
  }
  // return the modified list
  return head;
}
