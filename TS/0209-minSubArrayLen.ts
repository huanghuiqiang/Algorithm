function minSubArrayLen(target: number, nums: number[]): number {
  let result = Number.MAX_SAFE_INTEGER; // 字符串长度
  let sum = 0; // 窗口总和
  let j = 0; // 起始位置
  let subLength = 0;
  let len = nums.length;
  for(let i = 0; i < len; i++) {
      sum += nums[i]; // 计算窗口的和

      while(sum >= target) {
          subLength = (i - j + 1);
          result = result < subLength ? result : subLength;
          sum -= nums[j++]; // 这里体现出滑动窗口的精髓之处，不断变更i（子序列的起始位置
      }
  }

  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};