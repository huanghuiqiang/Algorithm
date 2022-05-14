/*
 * @Author: huanghq 
 * @Date: 2022-05-14 21:07:47 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-14 21:29:28
 */

function isHappy(n: number): boolean {
  // 计算val各位的平方和
  function calcSum(val: number): number {
    return String(val).split(' ').reduce((pre, cur) => (pre + Number(cur) * Number(cur)), 0);
  }

  let storeSet: Set<number> = new Set();
  while(n !== 1 && !storeSet.has(n)) {
    storeSet.add(n);
    n = calcSum(n);
  }
  return n === 1;
}