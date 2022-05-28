/*
 * @Author: huanghq 
 * @Date: 2022-05-24 10:58:13 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-27 15:01:11
 */

function repeatedSubstringPattern(s: string): boolean {
  function getNext(str: string): number[] {
    let next: number[] = [];
    let j: number = -1;
    next[0] = j;
    for (let i = 1, length = str.length; i < length; i++) {
      while(j >=0 && str[i] !== str[j + 1]) {
        j = next[j];
      }
      if (str[j] === str[j + 1]) {
        j++;
      }
      next[i] = j;
    }
    return next;
  }
  let next: number[] = getNext(s);
  let sLength: number = s.length;
  let nextLength: number = next.length;
  let suffixLength: number = next[nextLength - 1] + 1;
  if (suffixLength > 0 && sLength % (sLength - suffixLength) === 0) {
    return true;
  }
  return false;
}