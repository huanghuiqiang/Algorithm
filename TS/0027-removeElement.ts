function removeElement(nums: number[], val: number): number {
  let l = 0, len = nums.length;

  for (let r = 0; r < len; r++) {
    if (nums[r] !== val) {
      nums[l] = nums[r];
      l++;
    }
  }
  return  l;
}