import {describe, test, expect} from "@jest/globals";

const {makeLink, addTwoNumbers} = require("../src/addTwoNumbers");

describe("测试addTwoNumbers", () => {
    test("测试1", () => {
        const l1 = makeLink([2, 3, 4]);
        const l2 = makeLink([1, 2, 3]);
        const result = makeLink([3, 5, 7]);
        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });

    test("测试2", () => {
        const l1 = makeLink([9, 9, 9, 9, 9, 9, 9]);
        const l2 = makeLink([9, 9, 9, 9]);
        const result = makeLink([8, 9, 9, 9, 0, 0, 0, 1]);
        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });

    test("测试3", () => {
        const l1 = makeLink([2, 4, 3]);
        const l2 = makeLink([5, 6, 4]);
        const result = makeLink([7, 0, 8]);
        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });

    test("测试4", () => {
        const l1 = makeLink([0]);
        const l2 = makeLink([0]);
        const result = makeLink([0]);
        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });
});
