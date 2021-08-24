// 从扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这五张牌是不是连续的。
// 2 ~ 10 为数字本身，A 为 1，J 为11，Q 为12，K 为13，而大小王为 0，可以看成任意数字。A 不能视为 14.

// 思路：1.没有重复的牌，2.最大和最小差值小于4

/**
 * @param Array
 * @reutrn Boolean
 */


// Set 用于存储非0数字，并且判断有无重复的数字
// 遍历的同时需要找出最小值和最大值

// 遍历了两次，时间复杂度 O（n）;
const isStraight = (arr) => {
    let joker = 0;
    // 计算卡牌数量，并计算joker数量
    const straightArr = Array.from(
        new Set(
            arr.filter(item => {
                if (item === 0) {
                    joker++;
                    return false
                } else {
                    return true;
                }
            })
        )
    ).sort((a, b) => a - b);

    // 重复卡牌，返回false
    if (straightArr.length + joker !== 5) {
        return false;
    } else {
        // 卡牌间隔等于间隔数加上joker数量，返回true
       return Boolean(straightArr[straightArr.length - 1] - straightArr[0] >= straightArr.length - 1 + joker);
    }
}


const isStraight = (arr) => {
    let setObj = new Set();
    let min;
    let max;
    const joker = 0;

    for (let i = 0, l = arr.length; i < l; i++) {
        if (arr[i] === 0) joker++;

        if (setObj.has(arr[i])) {
            return false;
        }

        setObj.add(arr[i])
    }

    max = Math.max([...setObj]);
    min = Math.min([...setObj]);

    return max - min < 5;
}



console.log(isStraight([2,3,4,5,6]));
console.log(isStraight([0,0,1,2,5]));
