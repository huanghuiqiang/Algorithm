// 复杂链表的复制
// 请实现 copyRandomList 函数，复制一个复杂链表。
// 在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 使用哈希表存储原节点-复制节点之间的对应关系
// 第一次遍历对链表进行复制，存储到Map对象中
// 第二次遍历，更新复制节点的random指针

var copyRandomList = function(head) {
    if (!head) {
        return head;
    }
    let node = head;
    let map = new Map();

    while(node) {
        map.set(node, new Node(node.val));
        node = node.next;
    }
    node = head;

    while(node) {
        map.get(node).next = map.get(node.next) === undefined ? null : map.get(node.next);
        map.get(node).random = map.get(node.random);
        node = node.next;
    }
    return map.get(head);
}