function removeDuplicates(nums: number[]): number {
  let s = 0, len = nums.length;

  for (let f = 1; f < len; f++) {
      if (nums[f] !== nums[f - 1]) {
          s++;
          nums[s] = nums[f];
      }
  }
  return s + 1;
};