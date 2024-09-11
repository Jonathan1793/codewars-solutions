function uncollapse(digits) {
  //Happy coding!
  const resultArray = [];
  const digitsArray = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (i = 0; i < digitsArray.length; i++) {
    digits = digits.split(digitsArray[i]).join(digitsArray[i] + " ");
  }

  return digits.trim();
}
