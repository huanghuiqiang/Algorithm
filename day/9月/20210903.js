// 输入一个整数数组，实现一个函数来调整该数组中数字的排序
// 使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分

let sortArray = (nums) => {
    let odd = [];
    let event = [];
    for (let i = 0, l = nums.length; i < l; i++) {
        if (nums[i] % 2 === 0) {
            event.push(nums[i])
        } else {
            odd.push(nums[i])
        }
    }
    return odd.concat(event)
}

// 双指针方法
// 首尾双指针
let exchange = (nums) => {
    let left = 0;
    let right = nums.length;
    while(left < right) {
        if (nums[left] % 2 === 0) {
            left++;
            continue
        }
        if (nums[right] % 2 !== 0) {
            right--;
            continue;
        }
        swap(nums[left++], nums[right--])
    }
}

let swap = (left, right) => {
    let param = left;
    left = right;
    right = param;
}


// 快慢双指针