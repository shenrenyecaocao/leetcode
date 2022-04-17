import { describe, test, expect } from "@jest/globals";

const { twoSum } = require("../src/nums")

describe("测试twoSum", () => {
  test("测试1", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = [0, 1];
    expect(twoSum(nums, target)).toEqual(result);
  });

  test("测试2", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = [1, 2];
    expect(twoSum(nums, target)).toEqual(result);
  });

  test("测试3", () => {
    const nums = [3, 3];
    const target = 6;
    const result = [0, 1];
    expect(twoSum(nums, target)).toEqual(result);
  });
});
