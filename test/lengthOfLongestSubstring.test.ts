import { describe, test, expect } from "@jest/globals";

const { lengthOfLongestSubstring } = require("../src/lengthOfLongestSubstring");

describe("测试lengthOfLongestSubstring", () => {
  test("测试1", () => {
    const str = "pwwkew";
    const result = 3;
    expect(lengthOfLongestSubstring(str)).toEqual(result);
  });

  test("测试2", () => {
    const str = "bbbbb";
    const result = 1;
    expect(lengthOfLongestSubstring(str)).toEqual(result);
  });

  test("测试3", () => {
    const str = "abcabcbb";
    const result = 3;
    expect(lengthOfLongestSubstring(str)).toEqual(result);
  });

  test("测试4", () => {
    const str = "jxdlnaaij";
    const result = 6;
    expect(lengthOfLongestSubstring(str)).toEqual(result);
  });
});
