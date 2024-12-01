const reverseSum = (num) => {
  const sequence = {};
  let counter = 1;
  let number = 10;

  while (counter <= 65) {
    let reverse = number.toString().split("").reverse().join("");
    if (reverse[0] == 0) {
      number++;
      continue;
    }
    reverse = Number(reverse);
    let sum = number + reverse;
    let subs = Math.abs(number - reverse);
    let divisible = sum % subs === 0;
    if (divisible) {
      if (Object.values(sequence).includes(reverse)) {
        number++;
        continue;
      } else {
        sequence[counter] = number;
        sequence[counter + 1] = Number(reverse);
        counter += 2;
        number++;
      }
    }
    number++;
  }
  let result = Object.values(sequence);
  result.sort((a, b) => a - b);
  Object.keys(sequence).forEach((key, index) => {
    sequence[key] = result[index];
  });
  console.log(sequence);
};

reverseSum();
