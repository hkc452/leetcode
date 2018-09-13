/**
 * Definition for singly-linked list.

 */
var ListNode = function (val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var temp = 0, first, store
    while(l1.val >= 0 || l2.val >= 0 || temp) {
        var total = ( l1.val || 0 ) + ( l2.val || 0 ) + temp
        if (total >= 10) {
            total = total - 10
            temp = 1
        } else {
            temp = 0
        }
        var current = new ListNode(total)
        if (!first) {
            first = current
        } 
        else {
            store.next = current
        }
        store = current
        l1 = l1.next ? l1.next : {}
        l2 = l2.next ? l2.next : {}
    }
    return first
};

module.exports = addTwoNumbers