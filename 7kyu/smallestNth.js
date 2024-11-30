function nthSmallest(arr, pos) {
  //your code here
  const res = arr.sort((a, b) => a - b);
  return res[pos - 1];
}
