function moveZeros(arr) {
  const arrOfZeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arrOfZeros.push(arr[i]);
      arr.splice(i, 1);
      i--;
    }
  }
  arr.push(...arrOfZeros);
  return arr;
}
