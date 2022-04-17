import { describe, test, expect } from "@jest/globals";

const { longestPalindrome } = require("../src/longestPalindrome");

describe("测试longestPalindrome", () => {
  test("测试1", () => {
    const str = "babad";
    const result = "bab";
    expect(longestPalindrome(str)).toEqual(result);
  });

  test("测试2", () => {
    const str = "cbbd";
    const result = "bb";
    expect(longestPalindrome(str)).toEqual(result);
  });
});
