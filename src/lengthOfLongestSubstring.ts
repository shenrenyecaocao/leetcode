function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  var max: number[] = [];
  var tmp: string[] = [];
  for (let i = 0; i < s.length; i++) {
    var maxLength = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (tmp.includes(s[i + 1])) {
        break;
      }
      var tmpLength;
      if (s[i] === s[j]) {
        tmpLength = j - i;
        break;
      }
      if (j === s.length - 1) {
        tmpLength = s.length - i;
      }
    }
    maxLength = tmpLength > maxLength ? tmpLength : maxLength;
    max.push(maxLength);
    tmp.push(s[i]);
  }
  return max.sort()[0];
}

// console.log(lengthOfLongestSubstring('abcabcbb'))
//
// console.log(lengthOfLongestSubstring('bbbbb'))
//
console.log(lengthOfLongestSubstring("pwwkew"));
//
// console.log(lengthOfLongestSubstring(''))
//
// console.log(lengthOfLongestSubstring(' '))
// console.log(lengthOfLongestSubstring('ab'))
