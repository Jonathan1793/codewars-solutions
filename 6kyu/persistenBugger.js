function persistence(num) {
  const arrayOfNumbers = [];
  while (num > 9) {
    let sum = 1;
    const digits = num.toString().split("");
    digits.forEach((digit) => (sum = sum * parseInt(digit)));
    num = sum;
    arrayOfNumbers.push(num);
  }
  return arrayOfNumbers.length;
}
