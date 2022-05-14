/*
 * @Author: huanghq 
 * @Date: 2022-05-13 18:24:23 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-14 21:04:08
 */

function intersection(num1: number[], nums2: number[]): number[] {
  let resSet: Set<number> = new Set(),
      nums1Set: Set<number> = new Set(num1);
    for (let i of nums2) {
      if (nums1Set.has(i)) {
        resSet.add(i);
      }
    }
  return Array.from(resSet);
}