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
        
    }
    toString() {
        let string = "";
        for (const item of Object.values(this.list)) {
            string += `( ${item.value} ) -> `
        }
        string += "null";
        return string;
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

console.log(list.toString());
