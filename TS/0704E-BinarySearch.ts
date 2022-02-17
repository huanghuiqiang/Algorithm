

function search(nums: Array<number>, target:number) {
  let l:number = 0, r:number = nums.length - 1, ans:number = -1;
// 左闭合，右边闭合
  while(l <= r) {
      let mid:number = Math.floor(l + (r - l)/2);
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


function search(nums: Array<number>, target: number) {
    let l = 0, r = nums.length, ans = -1;
// 左闭合，右开放
    while(l < r) {
        let mid = l + Math.floor((r - l)/2);
        if (nums[mid] === target) {
            ans = mid;
            return ans;
        } else if (nums[mid] > target) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return ans;
}