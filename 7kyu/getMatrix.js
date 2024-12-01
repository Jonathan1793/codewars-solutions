function getMatrix(number) {
  // good luck
  const mainArr = [];
  for (let i = 0; i < number; i++) {
    mainArr.push([]);
  }
  for (let i = 0; i < mainArr.length; i++) {
    for (let j = 0; j < number; j++) {
      if (i === j) {
        mainArr[i][j] = 1;
      } else {
        mainArr[i][j] = 0;
      }
    }
  }
  return mainArr;
}
