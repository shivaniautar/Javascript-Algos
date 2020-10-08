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

let myStack2 = new Queue();
myStack2.enqueue(3);
myStack2.enqueue(3);
console.log(isPalindrome(myStack2));
// console.log(myStack2.checkFront());
// console.log(myStack2.isEmpty());
// myStack2.printQueue();







