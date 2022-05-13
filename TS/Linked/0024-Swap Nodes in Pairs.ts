/*
 * @Author: huanghq 
 * @Date: 2022-05-12 14:44:48 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-13 11:10:54
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  const dummyHead: ListNode = new ListNode(0, head);
  let cur: ListNode = dummyHead;
  while(cur.next !== null && cur.next.next !== null) {
    const tem: ListNode = cur.next;
    const tem1: ListNode = cur.next.next.next;

    cur.next = cur.next.next; // step 1
    cur.next.next = tem; // step 2
    cur.next.next.next = tem1; // step 3

    cur = cur.next.next; // cur 移动两位，准备下一轮交换
  }

  return dummyHead.next;
}