// 把数组排成最小的数
// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，输出能拼接出的所有数字中最小的一个。

// 思路：本质上是一个排序问题。
// sort 排序算法用的不一定是同一个算法
// parseInt(string, radix)   解析一个字符串并返回指定基数的十进制整数

const findMinNumber = (nums) => {
    const sortArr = nums.sort((a,b) =>{
        return parseInt(String(a) + String(b)) - parseInt(String(b) + String(a))
    });
    return sortArr.join('')
}


var minNumber = function(nums) {
    const sortArr = nums.sort((a,b) =>{
        return (a + '' + b) - (b + '' + a )
    });
    return sortArr.join('')
};


var minNumber = function(nums) {
    const sortArr = nums.sort((a,b) =>{
        return Number(String(a) + String(b)) - Number(String(b) + String(a))
    });
    return sortArr.join('')
};