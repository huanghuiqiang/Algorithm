
/**
 * 如何构建二叉树
 * 先建立一个节点
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root

    let isFound = false // insertion point

    while (!isFound) {
      if (current.value === value) {
        isFound = true // found
        return undefined
      }
      if (current.value > value) {
        if (!current.left) {
          current.left = newNode
          isFound = true // found and updated
          return this
        } else {
          current = current.left
        }
      } else {
        if (!current.right) {
          current.right = newNode
          isFound = true // found and updated
          return this
        } else {
          current = current.right
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false

    let current = this.root

    let found = false

    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = current
      }
    }

    if (!found) return undefined;
    return found


  }
}

let newTree = new BinarySearchTree();
newTree.insert(3)
newTree.insert(1)
newTree.insert(4)
newTree.insert(5)
newTree.insert(1)
// console.log(newTree);

console.log(newTree.find(4));





