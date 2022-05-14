/*
 * @Author: huanghq 
 * @Date: 2022-05-06 11:45:27 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-06 15:04:44
 * 移除链表元素 203
 */

// 定义链表结构
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

// 在原链表上直接删除
function removeElement(head: ListNode | null, val: number): ListNode | null {

  // 删除头部节点
  while(head !== null && head.val === val) {
    head = head.next;
  }
  if (head === null) {return head}

  let pre: ListNode = head, cur: ListNode | null = head.next;
  // 删除非头部节点
  while(cur) {
    if (cur.val === val) {
      pre.next = cur.next;
    } else {
      pre = pre.next;
    }
    cur = cur.next;
  }

  return head;
}



// 虚拟头节点
function removeElement_(head: ListNode | null, val: number): ListNode | null {
  let dummyHead = new ListNode(0, head);
  let pre: ListNode = dummyHead, cur: ListNode | null = dummyHead.next;
  // 删除非头部节点
  while(cur) {
    if (cur.val === val) {
      pre.next = cur.next;
    } else {
      pre = cur;
    }
    cur = cur.next;
  }
  return head.next;
}