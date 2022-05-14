function isPerfectSquare(num: number): boolean {
  let l = 0, r = num;
  while(l <= r) {
      let mid = l + ((r - l) >> 1);
      if (mid * mid === num) {
          return true;
      } else if (mid * mid > num) {
          r = mid - 1;
      } else {
          l = mid + 1;
      }
  }
  return false;
};