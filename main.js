class LinkedList {
    constructor(list) {
        this.list = list || [];
    }
    append(value) {
        const node = new Node();
        node.value = value;
        this.list[this.list.length] = node;
        if (this.list.length > 1) {
            console.log(this.list.length)  
        }
    }
    prepend(value) {
        console.log('prepend', value);
    }
    size() {
        console.log('size');
    }
    head() {
        console.log('head');
    }
    tail() {
        console.log('tail');
    }
    at(index) {
        console.log('at', index);
    }
    pop() {
        console.log('pop');
    }
    contains(value) {
        console.log('contains', value);
    }
    find(value) {
        console.log('find', value);
    }
    toString() {
        console.log('toString');
    }
}

class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }
}

const list = new LinkedList();
list.append(12);
list.append(14);

console.log(list);
