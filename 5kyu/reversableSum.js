/**The number 45 is the first integer in having this interesting property: the sum of the number with its reversed is divisible by the difference between them(absolute Value).

45 + 54 = 99 
abs(45 - 54) = 9
99 is divisible by 9.
The first terms of this special sequence are :

n        a(n)
1        45
2        54
3        495
4        594
Make the function that receives n, the ordinal number of the term and may give us, the value of the term of the sequence. Let's see some cases (input ----> output):

1 -----> 45
3 -----> 495
"Important: Do not include numbers which, when reversed, have a leading zero, e.g.: 1890 reversed is 0981, so 1890 should not be included."

Your code will be tested up to the first 65 terms, so you should think to optimize it as much as you can.

(Hint: I memoize, you memoize, he memoizes, ......they (of course) memoize) */

function sumDifRev(n) {
  // Good Luck!
  const sequence = {};

  if (sequence[n]) {
    return sequence[n];
  }
  let counter = 1;
  let stopper = 111;

  for (let i = 10; i < stopper; i++) {
    let string = i;
    let reverse = i.toString().split("").reverse().join("");
    if (reverse[0] == 0) {
      continue;
    }
    reverse = Number(reverse);
    let sum = string + reverse;
    let subs = Math.abs(string - reverse);
    if (sum % subs === 0) {
      if (
        Object.values(sequence).includes(reverse) ||
        Object.values(sequence).includes(string)
      ) {
        continue;
      } else {
        sequence[counter] = string;
        sequence[counter + 1] = reverse;
        counter += 2;
        stopper = stopper + counter * reverse * reverse;
      }
    }
    if (counter >= 66) {
      break;
    }
  }
  let result = Object.values(sequence);
  result.sort((a, b) => a - b);
  Object.keys(sequence).forEach((key, index) => {
    sequence[key] = result[index];
  });
  return sequence[n];
}
