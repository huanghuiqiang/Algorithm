/*
 * @Author: huanghq 
 * @Date: 2022-05-17 14:38:19 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-17 14:42:23
 */

function reverseString(s: string[]): void {
  let length: number = s.length;
  let left: number = 0,
      right: number = length - 1;
  let tempStr: string;
  while (left < right) {
    tempStr = s[left];
    s[left] == s[right];
    s[right] = tempStr;
    left++;
    right--;
  }
}