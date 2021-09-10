// 给定一个正整数 n， 将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。
// 返回你可以获得的最大乘积。

// 动态规划
var integerBreak = function(n) {
    const dp = new Array(n + 1).fill(1);

    for (let i = 3; i <= n; ++i) {
        for (let j = 1; j < i; ++j) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n];
}

// 贪心法
// 算法整体思路：
// n 除 3 的结果为 a，余数是 b
// 当 b 为 0，直接将 a 个 3 相乘
// 当 b 为 1，将（a-1）个3 相乘，再乘以 4
// 当 b 为 2，将 a 个 3 相乘，再乘以 2

// 空间复杂度是 O（1），时间复杂度是O（1）。代码实现如下

var integerBreak = function (n) {
    if (n === 2) return 1;
    if (n === 3) return 2;
    // a 的含义，n 能拆成的3的个数
    const a = Math.floor(n/3);
    const b = n % 3;

    // n 是3 个倍数
    if (b === 0) return Math.pow(3, a);
    // n 是 3k + 1， 例如7，拆成 3/3/1
    if (b === 1) return Math.pow(3, a - 1) * 4;
    return Math.pow(3, a) * 2;
}