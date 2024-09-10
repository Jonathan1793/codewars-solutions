function printArray(array) {
  //show me the code!
  const result = array.reduce(
    (wholeString, currentLetter, index, array) =>
      index !== array.length - 1
        ? wholeString + currentLetter + ","
        : wholeString + currentLetter,
    ""
  );
  return result;

  console.log(result);
}
