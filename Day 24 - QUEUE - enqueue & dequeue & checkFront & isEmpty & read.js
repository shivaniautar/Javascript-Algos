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


let myStack2 = new Queue();
myStack2.enqueue(10);
myStack2.enqueue(30);
myStack2.enqueue(50);
myStack2.dequeue();
console.log(myStack2.checkFront());
console.log(myStack2.isEmpty());
myStack2.printQueue();