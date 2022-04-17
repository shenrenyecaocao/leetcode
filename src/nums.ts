function twoSum(num: number[], target: number): number[] {
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === target) return [i, j];
        }
    }
    return [];
}

module.exports = {
    twoSum
}
