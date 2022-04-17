function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  var newArr: number[] = nums1.concat(nums2).sort(function (a, b) {
    return a - b;
  });
  // console.log(newArr);
  var result: number;
  if (newArr.length % 2 === 0) {
    result = (newArr[newArr.length / 2 - 1] + newArr[newArr.length / 2]) / 2;
  } else {
    result = newArr[Math.floor(newArr.length / 2)];
  }
  return result;
}

// const n1 = [3];
// const n2 = [-2, -1];
// console.log(findMedianSortedArrays(n1, n2));

module.exports = {
  findMedianSortedArrays,
};
