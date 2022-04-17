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
  let sum = 0;
  let remainder = 0;
  var result = new ListNode();
  var tmp = result;
  while (l1?.val || l2?.val) {
    let n1 = l1 ? l1.val : 0;
    let n2 = l2 ? l2.val : 0;
    sum = n1 + n2 + remainder;
    remainder = Math.floor(sum / 10);
    tmp.next = new ListNode(sum % 10);
    tmp = tmp.next;
    l1 = l1?.next ? l1.next : new ListNode();
    l2 = l2?.next ? l2.next : new ListNode();
  }
  if (remainder) tmp.next = new ListNode(1);
  return result.next;
}
console.log(addTwoNumbers(makeLink([2, 3, 4]), makeLink([1, 2, 3])));

console.log(addTwoNumbers(makeLink([9, 9, 9, 9, 9, 9, 9]), makeLink([9, 9, 9, 9])));

console.log(addTwoNumbers(makeLink([2, 4, 3]), makeLink([5, 6, 4])));

console.log(addTwoNumbers(makeLink([0]), makeLink([0])));
