/*
 * @Author: huanghq 
 * @Date: 2022-05-06 14:44:08 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-09 10:04:25
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?:number, next?:ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class MyLinkedList {
  size: number;
  head: ListNode | null;
  tail: ListNode | null;
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // 获取链表中第 index个节点的值
  get(index: number): number {
    // 索引无效的情况
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let curNode = this.getNode(index);
    return curNode.val;
  }

  // 在链表的第一个元素之前添加一个值为 val的节点。插入后，新节点将成为链表的第一个节点。
  addAtHead(val:number): void {
    let node: ListNode = new ListNode(val, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    this.size++;
  }

  // 将值为 val 的节点追加到链表的最后一个元素。
  addAtTail(val: number): void {
    let node: ListNode = new ListNode(val, null);
    if (this.tail) {
      this.tail.next = node;
    } else {
      // 还没有尾节点，说明一个节点都还没有
      this.head = node;
    }
    this.tail = node;
    this.size++;
  }

  // 在链表中的第 index个节点之前添加值为 val的节点。
  // 如果 index等于链表的长度，则该节点将附加到链表的末尾。如果 index大于链表长度，则不会插入节点。如果 index小于0，则在头部插入节点。
  addAtIndex(index: number, val: number): void {
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }
  }

  // 如果索引 index有效，则删除链表中的第 index个节点。
  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return;
    }
    // 处理头节点
    if (index === 0) {
      this.head = this.head!.next;
      this.size--;
      return;
    }
    // 索引有效
    let curNode: ListNode = this.getNode(index - 1);
    curNode.next = curNode.next!.next;
    // 处理尾节点
    if (index === this.size - 1) {
      this.tail = curNode;
    }
    this.size--;
  }

  // 获取指定 Node节点
  private getNode(index: number): ListNode {
    // 这里不存在没办法获取到节点的情况，都已经在前置方法做过判断
    // 创建虚拟头节点
    let curNode: ListNode = new ListNode(0, this.head);
    for (let i = 0; i <= index; i++) {
      curNode = curNode.next;
    }
    return curNode;
  }
}