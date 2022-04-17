class ListNode {
    public val: number;
    public next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function makeLink(arr: Array<any>): ListNode | null {
    let head = new ListNode();
    let tmp = head;
    for (let item of arr) {
        tmp.next = new ListNode(item);
        tmp = tmp.next;
    }
    return head.next;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
    if (!l1 && !l2) return null;
    let l1Tmp: ListNode | null = l1;
    let l2Tmp: ListNode | null = l2;
    let sum = 0;
    let remainder = 0;
    var result = new ListNode();
    var tmp = result;
    while (l1Tmp || l2Tmp) {
        let n1 = l1Tmp ? l1Tmp.val : 0;
        let n2 = l2Tmp ? l2Tmp.val : 0;
        sum = n1 + n2 + remainder;
        remainder = Math.floor(sum / 10);
        tmp.next = new ListNode(sum % 10);
        tmp = tmp.next;
        l1Tmp = l1Tmp?.next ? l1Tmp.next : null;
        l2Tmp = l2Tmp?.next ? l2Tmp.next : null;
    }
    if (remainder) tmp.next = new ListNode(1);
    return result.next;
}

// const l1 = makeLink([2, 3, 4]);
// const l2 = makeLink([1, 2, 3]);
// const result = makeLink([3, 5, 7]);
// console.log(addTwoNumbers(l1, l2))

module.exports = {
    makeLink,
    addTwoNumbers
};
