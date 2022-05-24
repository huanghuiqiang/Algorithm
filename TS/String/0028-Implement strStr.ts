/*
 * @Author: huanghq 
 * @Date: 2022-05-20 14:40:21 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-24 10:39:49
 */


function strStr(haystack: string, needle: string): number {
  function getNext(str: string): number[] {
    let next: number[] = [];
    let j: number = -1;
    next[0] = j;
    for (let i = 1, length = str.length; i < length; i++) {
      while (j >= 0 && str[i] !== str[j + 1]) {
        j = next[j];
      }
      if (str[i] === str[j + 1]) {
        j++;
      }
      next[i] = j;
    }
    return next;
  }
  if (needle.length === 0) return 0;
  let next: number[] = getNext(needle);
  let j: number = -1;
  for (let i = 0, length = haystack.length; i < length; i++) {
    while(j >= 0 && haystack[i] !== needle[j + 1]) {
      j = next[j];
    };

    if (haystack[i] === needle[j + 1]) {
      if (j === needle.length - 2) {
        return i - j - 1;
      }
      j++;
    }
  }
  
  return -1;
};