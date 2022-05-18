/*
 * @Author: huanghq 
 * @Date: 2022-05-17 18:07:52 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-18 10:57:33
 */

function reverseWords(s: string): string {
  // 删除多余空格 '   hello   world' => 'hello world'
  function delExtraSpace(arr: string[]): void {
    let left: number = 0,
      right: number = 0,
      length: number = arr.length;
    while(right < length && arr[right] === ' ') {
      right++;
    }
    while (right < length) {
      if (arr[right] === ' ' && arr[right - 1] === ' ') {
        right++;
        continue;
      }
      arr[left++] = arr[right++];
    }
  }
  // 翻转字符串， ‘hello’ => 'olleh'
  function reverseWords(strArr: string[], start: number, end: number): void {
    let temp: string;
    while(start < end) {
      temp = strArr[start];
      strArr[start] = strArr[end];
      strArr[end] = temp;
      start++;
      end--;
    }
  }
  // main code
  let strArr: string[] = s.split('');
  delExtraSpace(strArr);
  let length: number = strArr.length;
  // 翻转整个字符串
  reverseWords(strArr, 0, length - 1);
  let start: number = 0,
      end: number = 0;
  while(start < length) {
    end = start;
    while(strArr[end] !== ' ' && end < length) {
      end++;
    }
    // 翻转单个单词
    reverseWords(strArr, start, end - 1);
    start = end + 1;
  }

  return strArr.join('');
}