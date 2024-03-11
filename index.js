const n1 = {
    numb: 100
}

const n2 = {
    numb: 200
}

const n3 = {
    numb: 300
}

n1.next = n2;
console.log(n1);

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const node1 = new Node(100);
console.log(n1);

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}