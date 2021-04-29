class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    newNode.next = current;
    this.root = newNode;
    return this;
  }
}

let link = new LinkedList();

link.insert(1);
link.insert(2);
link.insert(3);

console.log(link);
