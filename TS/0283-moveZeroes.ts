/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
  let s = 0, len = nums.length;
  for (let f = 0; f < len; f++) {
      if (nums[f] !== 0) {
          swap(nums, s, f);
          s++;
      }
  }
};

function swap(nums: number[], l: number, r:number) {
  let temp = nums[l];
  nums[l] = nums[r];
  nums[r] = temp;
}