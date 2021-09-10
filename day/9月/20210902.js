// 找出数组的最大公约数
// 给你一个整数数组 nums ，返回数组中最大数和最小数的 最大公约数 。
// 两个数的 最大公约数 是能够被两个数整除的最大正整数。

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findGCD = function(nums) {
    nums.sort((a, b) => a - b)
    let a = nums[0];
    let b = nums[nums.length - 1];

    while(b !== 0) {
        let r = b;
        b = a % b;
        a = r
    }
    return a;
};