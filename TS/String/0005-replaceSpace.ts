/*
 * @Author: huanghq 
 * @Date: 2022-05-17 16:47:24 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-17 17:43:31
 */

function replaceSpaces(str: string): string {
  let arr: string[] = str.split('');
  let spaceNum: number = 0;
  let oldLength: number = arr.length;
  for (let i = 0; i < oldLength; i++) {
    if (arr[i] === ' ') {
      spaceNum++;
    }
  }
  arr.length = oldLength + 2 * spaceNum;
  let cur: number = oldLength - 1;
  for (let i = arr.length - 1; i >= 0; i--, cur--) {
    if (arr[cur] !== ' ') {
      arr[i] = arr[cur];
    } else {
      arr[i] = '0';
      arr[--i] = '2';
      arr[--i] = '%';
    }
  }
  return arr.join('');
}