function mySqrt(x: number): number {
  let l = 0, r = x;
  while (l <= r) {
      let mid = l + ((r - l) >> 2);
      if (mid * mid === x) {
          return mid;
      } else if (mid * mid > x) {
          r = mid - 1;
      } else {
          l = mid + 1;
      }
  }

  return r;
};