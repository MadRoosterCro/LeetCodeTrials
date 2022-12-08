/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
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

function mergeTwoLists(list1: ListNode, list2: ListNode): ListNode {
  // Create a dummy node to hold the result
  const dummy = new ListNode();

  // Create a pointer to traverse the list
  let curr = dummy;

  // Traverse both lists in parallel and add the smaller element
  // to the result list at each step
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  // Add the remaining elements of the longer list to the result
  curr.next = list1 || list2;

  // Return the result, skipping the dummy node
  return dummy.next;
}
