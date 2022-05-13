function sortedSquares(nums: number[]): number[] {
  let result: number[] = [], l = 0, r = nums.length - 1;
  while(l <= r) {
      let sqrL = nums[l] * nums[l], sqrR = nums[r] * nums[r];
      if (sqrL > sqrR) {
          result.unshift(sqrL);
          l++;
      } else {
          result.unshift(sqrR);
          r--;
      }
  }
  return result;
};