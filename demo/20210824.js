/**
 * 查找缺失的数字
 * 
 * 一个长度为 n-1 的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0 ~ n-1之内。在范围 0 ~n-1内的 n 个数字中有且只有一个数字不在该数组中
 * 请找出这个数字
 */

// 二分法
// 时间复杂度 O(logN)
const findMissNum = (arr) => {
    let left = 0,
        right = arr.length,
        mid;

    while(left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}


// 递归
// 时间复杂度：O(logN)
const findMissNum = (arr, left = 0, right = arr.length) => {
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        if (arr[mid] === mid) {
            return findMissNum(arr, mid + 1, right);
        } else {
            return findMissNum(arr, left, mid - 1)
        }
    }
    return left;
}

// 求和计算差值
// 时间复杂度：O(N)
const findMissNum = (arr) => {
    const arrAcc = arr.reduce((acc, cur) => acc + cur);
    const len = arr.length
    const sumAcc = (0 + len) * (len + 1) / 2;
    return sumAcc - arrAcc;
}


console.log(findMissNum([0,1,3]));
console.log(findMissNum([0,1,2,3,4,6]));
console.log(findMissNum([0,1,2,3,4,5,6,7,9]));