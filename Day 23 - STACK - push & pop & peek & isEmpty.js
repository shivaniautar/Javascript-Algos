//Stack

//A stack is a LIFO data structure
//LAST IN, FIRST OUT like a stack of paper
//Fact, we can't see whats inside our stack without taking it apart.

class arrStack{
    constructor(){
        this.items = [];
    }

    push(item){
        this.items.push(item);
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        if (this.items.length === 0){
            return true;
        }
        return false;
    }
}

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class slStack{
    constructor(){
        this.top = null; //this.head, this.end
        this.length = 0;
    }

    //add to top
    push(newNode){
        if (this.top === null){
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    //remove from top
    pop(){
        if (this.top === null) return null;
        const removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        this.length--;
        return this.top;
    }

    //aka check top
    peek(){
        return this.head? this.head.data : null;
    }

    //check if empty
    isEmpty(){
        if (this.top === null){
            return true;
        }
        return false;
    }

    length(){
        return this.length;
    }
}

//BONUS CHALLENGE: countStack
//Write the standalone function countStack
//given a slStack, count the nodes
//return the count
//you may use one stack or array as additional storage
//the given stack must be returned back to its original order
//you may only use public stack methods push pop peek isEmpty

function countStack(stack){
    let newStack = new slStack();
    let count = 0;
    while(!stack.isEmpty()){
        let node = stack.pop();
        newStack.push(node);
        count++;
    }
    while(!newStack.isEmpty()){
        stack.push(newStack.pop());
    }
    return count;
};

let myStack1 = new slStack();
myStack1.push(10);
myStack1.push(12);
// myStack1.push(13);
// console.log(myStack1);
console.log(countStack(myStack1));