/*
 * @Author: huanghq 
 * @Date: 2022-05-16 15:50:10 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-17 10:45:00
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
  let helperArr: number[] = new Array(26).fill(0);
  let base: number = 'a'.charCodeAt(0);
  let index: number;
  for (let i = 0, length = magazine.length; i < length; i++) {
    helperArr[magazine[i].charCodeAt(0) - base]++;
  }
  for (let i = 0, length = ransomNote.length; i < length; i++) {
    index = ransomNote[i].charCodeAt(0) - base;
    helperArr[index]--;
    if (helperArr[index] < 0) {
      return false;
    }
  }
  return true;
}