/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 10^4.
*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeKLists = (lists: ListNode[]): ListNode | null => {
  // Create an array to hold the values of all nodes in the input lists.
  const values: number[] = [];

  // Iterate over the input lists.
  for (const list of lists) {
    // Start at the head of the current list.
    let current: ListNode | null = list;
    // While there are still nodes in the current list...
    while (current !== null) {
      // Add the value of the current node to the values array.
      values.push(current.val);
      // Move to the next node in the list.
      current = current.next;
    }
  }

  // If the values array is empty, return null.
  if (!values.length) {
    return null;
  }

  // Sort the values in ascending order.
  values.sort((a, b) => a - b);

  // Create a new ListNode with the first value in the sorted array.
  const head: ListNode = new ListNode(values[0]);
  // Keep a reference to the current node, starting at the head.
  let previous: ListNode = head;

  // Iterate over the remaining values in the sorted array.
  for (let i = 1; i < values.length; i++) {
    // Get the current value.
    const value: number = values[i];
    // Create a new ListNode with the current value.
    previous.next = new ListNode(value);
    // Move the current node reference to the new node.
    previous = previous.next;
  }

  // Return the head of the merged linked list.
  return head;
};
