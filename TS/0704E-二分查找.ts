
// 左闭合，右边闭合

function search(nums: Array<number>, target:number) {
  let l = 0, r = nums.length - 1, ans = -1;
  while(nums[l] <= nums[r]) {
      let mid = Math.floor(l + (r - l)/2);
      if (nums[mid] === target) {
          ans = mid
          return ans;
      } else if (nums[mid] > target) {
          r = mid - 1;
      } else {
          l = mid + 1;
      }
  }
  return ans;
}
