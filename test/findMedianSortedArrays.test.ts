import { describe, test, expect } from "@jest/globals";

const { findMedianSortedArrays } = require("../src/findMedianSortedArrays");

describe("测试findMedianSortedArrays", () => {
  test("测试1", () => {
    const n1 = [1, 3];
    const n2 = [2];
    const result = 2;
    expect(findMedianSortedArrays(n1, n2)).toEqual(result);
  });

  test("测试2", () => {
    const n1 = [1, 2];
    const n2 = [3, 4];
    const result = 2.5;
    expect(findMedianSortedArrays(n1, n2)).toEqual(result);
  });

  test("测试2", () => {
    const n1 = [3];
    const n2 = [-2, -1];
    const result = -1;
    expect(findMedianSortedArrays(n1, n2)).toEqual(result);
  });
});
