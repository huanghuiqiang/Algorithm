// 输入一个链表，输出该链表中倒数第k个节点


var getKthFromEnd = function(head, k) {
    let fast = head;
    let slow = head;
    while(k > 0) {
        fast = fast.next;
        k--;
    }
    while(fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow;
};
