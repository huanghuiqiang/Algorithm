/*
 * @Author: huanghq 
 * @Date: 2022-05-09 16:25:23 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-10 14:34:38
 * 反转链表，双指针和递归两种方法
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next); 
  }
}


// 双指针法
function reverseList(head: ListNode | null): ListNode | null {
  let preNode: ListNode | null = null,
      curNode: ListNode | null = head,
      tempNode: ListNode | null;

  while(curNode) {
    tempNode = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = tempNode;
  }

  return preNode;
}

// 递归（从前往后翻转）
function reverseList_1(head: ListNode | null): ListNode | null {
  function recur(preNode: ListNode | null, curNode: ListNode | null): ListNode | null{
    if (curNode === null) return preNode;
    let tempNode: ListNode | null = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = tempNode;
    return recur(preNode, curNode);
  }
  return recur(null, head);
}



// 递归（从后往前翻转）
function reverseList_2(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let newHead: ListNode | null;
  function recur(node: ListNode | null, preNode: ListNode | null): void {
    if (node.next === null) {
      newHead = node;
      newHead.next = preNode;
    } else {
      recur(node.next, node);
      node.next = preNode;
    }
  }
  recur(head, null);
  return newHead;
}
