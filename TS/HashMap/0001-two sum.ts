/*
 * @Author: huanghq 
 * @Date: 2022-05-16 13:46:15 
 * @Last Modified by: huanghq
 * @Last Modified time: 2022-05-16 14:13:07
 */


function twoSum(nums: number[], target: number): number[] {
  let helperMap: Map<number, number> = new Map();
  let index: number | undefined;
  let resArr: number[] = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    index = helperMap.get(target - nums[i]);
    if (index !== undefined) {
      resArr = [i, index];
    }
    helperMap.set(nums[i], i);
  }

  return resArr;
}