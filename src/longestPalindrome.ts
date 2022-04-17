function longestPalindrome(s: string): string {
  const sMap: Map<string, number[]> = new Map();
  for (let i = 0; i < s.length; i++) {
    const chart = s[i];
    const tmp = sMap.get(chart) || [];
    tmp.push(i);
    sMap.set(chart, tmp);
  }
  // console.log(sMap);
  let maxIndex: number[] = [0, 0];
  for (let [key, indexs] of sMap.entries()) {
    let m = indexs[indexs.length - 1] - indexs[0];
    let n = maxIndex[maxIndex.length - 1] - maxIndex[0];
    maxIndex = m > n ? indexs : maxIndex;
  }
  return s.substring(maxIndex[0], maxIndex[maxIndex.length - 1] + 1);
}
// console.log(longestPalindrome("ccc"));

module.exports = {
  longestPalindrome,
};
