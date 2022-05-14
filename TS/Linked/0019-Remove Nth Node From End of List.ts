/*
 * @Author: huanghq 
 * @Date: 2022-05-14 19:59:58 
 * @Last Modified by:   huanghq 
 * @Last Modified time: 2022-05-14 19:59:58 
 * 删除链表的倒数第 N 个结点
 */
export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number, next: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let newHead: ListNode | null = new ListNode(0, head);
    let fastNode: ListNode | null = newHead,
        slowNode: ListNode | null = newHead;

    for (let i = 0; i < n; i++) {
        fastNode = fastNode.next;
    }

    while(fastNode.next) {
        fastNode = fastNode.next;
        slowNode = slowNode.next;
    }
    slowNode.next = slowNode.next.next;
    
    return newHead.next;
}