
// 左闭右闭
function searchInsert(nums: number[], target: number): number {
  let l = 0, r = nums.length - 1, ans = -1;
  while (l <= r) {
      let mid = l + Math.floor((r - l) / 2);
      if (nums[mid] === target) {
          ans = mid;
          return ans;
      } else if (nums[mid] > target) {
          r = mid - 1;
      } else {
          l = mid + 1;
      }
  }
  return r + 1;
};