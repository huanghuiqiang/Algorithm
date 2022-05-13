
function searchRange(nums: number[], target: number): number[] {
  let l = 0, r = nums.length - 1;
  let rightBorder = -2, leftBorder = -2;
  // 寻找右边界
  while(l <= r) {
      let mid = l + ((r - l) >> 1);
      if (nums[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
        rightBorder = l;
      }
  }

  // 寻找左边界
  l = 0, r = nums.length - 1;
  while(l <= r) {
      let mid = l + ((r - l) >> 1);
      if (nums[mid] >= target) {
        r = mid - 1;
        leftBorder = r;
      } else {
        l = mid + 1;
      }
  }

  if (leftBorder === -2 || rightBorder === -2) {return [-1, -1]};
  if((rightBorder - leftBorder) > 1) {return [leftBorder + 1, rightBorder - 1]};
  return [-1, -1];
};