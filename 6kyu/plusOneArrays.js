function upArray(arr) {
  // ...

  if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    arr.some((num) => num < 0 || num > 9)
  ) {
    return null;
  }
  console.log(`original array ${arr}`);
  let numString = arr.join("");
  let bigNumber = BigInt(numString);
  bigNumber = bigNumber + BigInt(1);
  let resultString = bigNumber.toString();
  let resultArray = resultString.split("").map((digit) => parseInt(digit));
  let i = 0;

  while (arr[i] === 0) {
    resultArray.splice(i, 0, 0);
    i++;
  }
  console.log(`final result: ${resultArray}`);

  return resultArray;
}
