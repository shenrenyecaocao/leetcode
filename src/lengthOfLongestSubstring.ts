function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  const wstr: {
    [key: string]: string[][];
  } = {};
  for (let i = 0; i < s.length; i++) {
    const w = s[i];
    if (!wstr[w]) {
      wstr[w] = [[w]];
    } else {
      wstr[w].push([w]);
    }
    for (let j = i + 1; j < s.length; j++) {
      const ww = s[j];
      let tmp = wstr[w];
      if (tmp[tmp.length - 1].includes(ww)) {
        break;
      } else {
        tmp[tmp.length - 1].push(ww);
      }
    }
  }
  // console.log(wstr);
  return Object.values(wstr).reduce((prev, next) => {
    var j = next.reduce((m, n) => {
      return m > n.length ? m : n.length;
    }, 1);
    return j > prev ? j : prev;
  }, 1);
}
// console.log(lengthOfLongestSubstring("jxdlnaaij"));

module.exports = {
  lengthOfLongestSubstring,
};
