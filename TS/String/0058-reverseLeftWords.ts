/*
 * @Author: huanghq 
 * @Date: 2022-05-18 11:05:17 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-20 14:27:39
 */


function reverseLeftWords(s: string, n: number): string {
  /** Utils */
  function reverseWords(strArr: string[], start: number, end: number): void {
    let temp: string;
    while (start < end) {
      temp = strArr[start];
      strArr[start] = strArr[end];
      strArr[end] = temp;
      start++;
      end--;
    }
  }

  /** Main code */
  let strArr: string[] = s.split('');
  let length: number = strArr.length;
  reverseWords(strArr, 0, length - 1);
  reverseWords(strArr, 0, length - n - 1);
  reverseWords(strArr, length - n, length - 1);

  return strArr.join('');
}