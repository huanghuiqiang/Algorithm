/*
 * @Author: huanghq 
 * @Date: 2022-05-13 17:47:11 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-13 18:03:09
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let helperArr: number[] = new Array(26).fill(0);
  let pivot: number = 'a'.charCodeAt(0);
  for(let i = 0, length = s.length; i < length; i++) {
    helperArr[s.charCodeAt(i) - pivot]++;
    helperArr[t.charCodeAt(i) - pivot]--;
  }
  return helperArr.every(i => i === 0);
}