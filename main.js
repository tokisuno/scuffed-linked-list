class LinkedList {
    constructor(list) {
        this.list = list || [];
    }
    append(value) {
        if (this.list[this.list.length - 1] instanceof Node) {
            this.list[this.list.length] = new Node(value);
            this.list[this.list.length-2].next = this.list[this.list.length-1];
        } else {
            this.list[this.list.length] = new Node(value);
        }
    }
    prepend(value) {
        const tempList = this.list;
        this.list = [];
        this.append(value);
        tempList.forEach(item => {
            this.append(item.value);
        });
    }
    size() {
        let size = 0;
        for (const _ of Object.values(this.list)) size++;
        return size;
    }
    head() {
        return this.list[0];
    }
    tail() {
        return this.list[this.list.length - 1];
    }
    at(index) {
        return this.list[index];
    }
    pop() {
        this.list = this.list.slice(0, this.list.length-1);
        this.list[this.list.length - 1].next = null;
        return this.list;
    }
    contains(value) {
        for (const item of Object.values(this.list)) {
            if (item.value === value) {
                return true;
            } else {
                continue;
            }
        }
        return false;
    }
    find(value) {
        if (this.contains(value) === true) {
            let pos = 0;
            for (const item of Object.values(this.list)) {
                if (item.value !== value) {
                    pos++;
                    continue;
                }
                return pos; 
            }
        }
        console.log(pos)
    }
    toString() {
        let string = "";
        for (const item of Object.values(this.list)) {
            string += `( ${item.value} ) -> `
        }
        string += "null";
        return string;
    }
    insertAt(value, index) {
        const lhs = new LinkedList(this.list.slice(0, index));
        const rhs = new LinkedList(this.list.slice(index, this.list.length));
        
        lhs.append(value)
        for (const item of Object.values(rhs.list)) {
            lhs.append(item.value);
        }
        this.list = lhs.list;
    }
    removeAt(index) {
        const lhs = new LinkedList(this.list.slice(0, index)); 
        const rhs = new LinkedList(this.list.slice(index+1, this.list.length));
        
        for (const item of Object.values(rhs.list)) lhs.append(item.value);
        this.list = lhs.list;
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
}

const list = new LinkedList();
list.append(12);
list.append(14);
list.append(15);
list.append(23);
list.prepend(100);

list.insertAt(69, 2);
console.log(list.toString());

list.removeAt(4);
console.log(list.toString());

