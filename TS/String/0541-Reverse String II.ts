/*
 * @Author: huanghq 
 * @Date: 2022-05-17 14:57:17 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-17 16:45:49
 */


function reverseStr(s: string, k: number): string {
  let left: number, right: number;
  let arr: string[] = s.split('');
  let temp: string;
  for (let i = 0, length = arr.length; i < length; i += 2 * k) {
    left = i;
    right = (i + k - 1) >= length ? length - 1 : i + k - 1;
    while(left < right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr.join('');
}
