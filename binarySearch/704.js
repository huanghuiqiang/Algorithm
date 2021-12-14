// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
// 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while(l <= r) {
        let mid = l + Math.floor((r - l) / 2),
        num = nums[mid];
        if (num === target) {
            return mid;
        } else if (num < target) {
            l = mid + 1;
        } else if (num > target) {
            r = mid - 1;
        }
    }
    return -1
};