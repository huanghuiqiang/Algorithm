// 输入一个链表 反转链表后 输出新链表的表头

/**
 * 递归反转链表
 * @param {ListNode} head
 * @return {ListNode}
 * 时间复杂度：O（n）
 */
let reverseList = function(head) {
    // 终止递归条件
    if (head === null || head.next === null) return head;
    // 调用递归公式，反转首节点之后的所有节点
    let last = reverseList(head.next);
    // 反转首节点
    head.next.next = head;
    // 将首节点指向末尾，指向null
    head.next = null;
    return last;
}
