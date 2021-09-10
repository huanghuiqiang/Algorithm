// 两个链表的第一个公共节点
// 如果两个链表没有交点，返回 null.
// 在返回结果后，两个链表仍须保持原有的结构。
// 可假定整个链表结构中没有循环。
// 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let visited = new Set();
    let temp = headA;

    while(temp) {
        visited.add(temp);
        temp = temp.next;
    }
    while(headB) {
        if (visited.has(headB)) {
            return headB
        }
        headB = headB.next;
    }
    return null;
};


var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null
    };

    let tempA = headA, tempB = headB;
    while(tempA !== tempB) {
        tempA = tempA === null ? headB : tempA.next;
        tempB = tempB === null ? headA : tempB.next;
    }
    return tempA;
};