/**
 * 最长子字符串
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度
 */

// 暴力求解
// 时间复杂度：O（n^2）
const findMaxLength = (str) => {
    let arr = Array.from(str), max = 0;

    for (let i = 0, l = arr.length; i < l; i++) {
        for (let j = i, k = 0, tmp = new Set(); j < l; j++) {
            k++;
            tmp.add(arr[j]);
            if (tmp.size !== k) {
                max = Math.max(tmp.size, max);
                break;
            } else {
                max = Math.max(tmp.size, max);
            }
        }
    }

    return max;
}


// 滑动窗口

console.log(findMaxLength("abcabcbb"));
console.log(findMaxLength("bbbbb"));
console.log(findMaxLength("pwwkew"));
console.log(findMaxLength(" "));
console.log(findMaxLength("au"));
