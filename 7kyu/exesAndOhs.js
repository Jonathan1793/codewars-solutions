function XO(str) {
  //code here
  let counterX = 0;
  let counterO = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == "x") {
      counterX++;
    }
    if (str[i].toLowerCase() == "o") {
      counterO++;
    }
  }
  if (counterX + counterO === 0) {
    return true;
  }
  if (counterX === counterO) {
    return true;
  }
  return false;
}
