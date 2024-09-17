function capitalize(s) {
  let sEven = "";
  let sOdd = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      sEven = sEven + s[i].toUpperCase();
      sOdd = sOdd + s[i].toLowerCase();
    } else {
      sEven = sEven + s[i].toLowerCase();
      sOdd = sOdd + s[i].toUpperCase();
    }
  }
  return [sEven, sOdd];
}
