function twoSum(num: number[], target: number): number[] {
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === target) return [i, j]
        }
    }
    return []
}

const result = twoSum([2, 7, 11, 15], 9);
console.log(result)
module.exports = {twoSum};
