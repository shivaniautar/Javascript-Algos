// using only one extra stack for storage, check if a given stack is sorted
// return the stack back to it's original order when you are done
// assume node.data are integers
function isStackSorted(stack) {
    var tempStack = new slStack();
    var sorted = true;

    while (!stack.isEmpty()) {
        var tempNode = stack.pop();
        if (tempStack.isEmpty() || tempStack.peek().data <= tempNode.data) {
            tempStack.push(tempNode);
        } else {
            sorted = false;
            tempStack.push(tempNode);
            break;
        }
    }

    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }
    return sorted;
}

// bonus
// given two queues, return the one with the greater sum.
// return the queues to their original order
// assume node.data are integers
function greaterOfTwoQueues(queue1, queue2) {
    return sumQueue(queue1) >= sumQueue(queue2) ? queue1 : queue2;
}

function sumQueue(queue) {
    let newQueue = new Queue();
    let sum = 0;

    while (!queue.isEmpty()) {
        let node = queue.dequeue();
        sum += node.data;
        newQueue.enqueue(node);
    }

    while (!newQueue.isEmpty()) {
        queue.enqueue(newQueue.dequeue());
    }

    return sum;
}

// queue: isPalindrome
// return true or false if the queue is a palindrome:
// a palindrome is a string or number that is equal to itself when reversed

// racecar === racecar
// race !=== ecar



//            r                   f
// queue = <-(1)<-(2)<-(3)<-(2)<-(1)
// return true

//            r               f
// queue = <-(1)<-(3)<-(4)<-(40)
// return false

// you may not linearly iterate through your queue
// only use public queue methods (enqueue, dequeue, checkFront, isEmpty, length)
// return the queue back to it's original order

// you may use stacks or queues as additional storage, or even arrays
// you may create helper methods to break this challenge down into smaller parts

function isPalindrome(queue) {
    var palindrome = true;
    var stack = new slStack();  // create a stack to hold data
    var len = queue.length; // get a fixed length

    for (var i = 0; i < len; i++) {
        var node = queue.dequeue();
        stack.push(new Node(node.data)); // we must create new Nodes for the stack
        queue.enqueue(node);
    }
    for (var j = 0; j < len; j++) {
        var dequeued = queue.dequeue();
        var popped = stack.pop();

        if (popped.data !== dequeued.data) {
            palindrome = false; // even if we flip palindrome to false, keep going to fix the queue
        }
         queue.enqueue(dequeued);
    }

    return palindrome;
}




//Queue
//FIFO data structure
// First in, First out

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    //add new queue to the rear
    enqueue(num){
        let newNode = new Node(num);
        if (this.rear === null){
            this.rear = newNode;
            this.front = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }
    
    //remove and return node at front
    dequeue(){
        if(this.front === null){
            return null;
        }
        if(this.front === this.rear){
            this.rear = null;
            this.front = null;
            return;
        }
        let node = this.front;
        this.front = node.next;
        node.next = null;
        this.length--;
        return node;
    }

    //return value of front node if it exits
    checkFront(){
        // if(this.front){
        //     return this.front;
        // }
        return this.front? this.front : "Queue is empty!";
    }

    //check if empty
    isEmpty(){
        return this.length <1? true : false;
    }

    length(){
        return this.length;
    }

    printQueue(){
        if(this.front === null){
            return "Queue is empty!";
        }
        let runner = this.front;
        while (runner){
            console.log(runner.data)
            runner= runner.next;
        }
    }
}


class slStack {
    constructor() {
        this.top = null; //this.head, this.end
        this.length = 0;
    }

    //add to top
    push(num) {
        var newNode = new Node(num);
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    //remove from top
    pop() {
        if (this.top === null) return null;
        const removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        this.length--;
        return removed;
    }

    //aka check top
    peek() {
        return this.top? this.top.data : null;
    }

    //check if empty
    isEmpty() {
        if (this.top === null) {
            return true;
        }
        return false;
    }

    length() {
        return this.length;
    }
}

// let myStack1 = new slStack();
// myStack1.push(3);
// myStack1.push(2);
// myStack1.push(1);
// console.log(isStackSorted(myStack1));


let myStack2 = new Queue();
myStack2.enqueue(3);
myStack2.enqueue(3);
// console.log(isPalindrome(myStack2));
// console.log(myStack2.checkFront());
// console.log(myStack2.isEmpty());
// myStack2.printQueue();

let myStack3 = new Queue();
myStack3.enqueue(3);
myStack3.enqueue(4);

console.log(greaterOfTwoQueues(myStack3,myStack2));







