function totalFruit(fruits: number[]): number {
  let l = 0; // 左指针
  let len = fruits.length;
  let n = 0; // 记录每次遇到水果时，上一种水果的起始位置
  let maxLen = 0; // 记录最大长度
  let arr = [fruits[l]]; // 存两种水果篮子的数组
  
  for (let r = 0; r < len; r++) {
      if (!arr.includes(fruits[r])) {
          // arr 中只有一种水果
          if (arr.length <= 1) {
              arr[1] = fruits[r];
          } else {
          // 遇到第三种水果，更新第一种水果的起始位置
              l = n;
          // 更新arr中的两种水果
          // r 时第三种水果的品种
          // r -1 是上一种水果的品种
              arr[0] = fruits[r-1];
              arr[1] = fruits[r];
          }
      }
      
      // n 存的是水果每次变化出现的索引
      if (fruits[r] !== fruits[n]) {
          n = r;
      }
      
      maxLen = Math.max(maxLen, r - l + 1);
  }
  return maxLen;
};