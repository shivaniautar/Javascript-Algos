// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

 

// Example 1:


// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
var mergeTwoLists = function(l1, l2) {
    let x = new ListNode(-1);
    let head = x;
    
    while (l1 !== null && l2 !== null){
        if(l1.val <= l2.val){
            x.next = l1;
            l1 = l1.next;
        } else{
            x.next = l2;
            l2 = l2.next;
        }
        x = x.next;
    }
    if(l1 !== null){
        x.next =l1;
    } else{
        x.next =l2;
    }
    return head.next;
};
