function solution(str) {
  const values = [];
  for (i = 0; i < str.length; i += 2) {
    let temp = str[i] + str[i + 1];
    if (str[i + 1] == undefined) {
      values.push(str[i] + "_");
    } else {
      values.push(str[i] + str[i + 1]);
    }
  }
  return values;
}
