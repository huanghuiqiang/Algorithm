function backspaceCompare(s: string, t: string): boolean {
  let sArr = [...s], tArr = [...t], sPoint = sArr.length - 1, tPoint = tArr.length - 1;
  let sCount = 0, tCount = 0;
  while(sPoint >= 0 || tPoint >= 0) {

      while(sPoint >= 0) {
          if (sArr[sPoint] === '#') {
              sCount++;
              sPoint--;
          } else if (sCount > 0){
              sCount--;
              sPoint--;
          } else {
              break;
          }
      }

      while(tPoint >= 0) {
          if (tArr[tPoint] === '#') {
              tCount++;
              tPoint--;
          } else if (tCount > 0){
              tCount--;
              tPoint--;
          } else {
              break;
          }
      }

      if (sArr[sPoint] !== tArr[tPoint]) {
          return false;
      }

      sPoint--;
      tPoint--;
  }
  return true;
};