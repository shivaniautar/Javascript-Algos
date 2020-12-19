// 2. Add Two Numbers
// Medium

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//Objective is to add two linked lists, from back to front

class Node {
    constructor(data, next = null) { //if next is not given, assume it is empty
      this.data = data
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let l1 = new Node(4)
l1.next = new Node(5)
l1.next.next = new Node(6)

let l2 = new Node(5)
l2.next = new Node(6)
l2.next.next = new Node(3)


//O(n + m) solution where n and m are the lengths of the two lists respectively
//We traverse each list, add them up, then create our new linked list

let string1 = ''
let string2 = ''

//Convert both linked lists to integers, then add them
//Iterate over final integer with new linked list

while (l1) {
    string1 += l1.data
    l1 = l1.next
}

while (l2) {
    string2 += l2.data
    l2 = l2.next
}

let string = (BigInt(string1) + BigInt(string2)).toString()
let newNode = new Node(-1)
let temp = newNode

for (let char of string) {
    temp.next = new Node(char)
    temp = temp.next
}

return newNode.next