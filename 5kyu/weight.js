/*
Input: a String containing weights --> "56 65 74 100 99 68 86 180 90"

Output: a new String with values ordered from min to max depending on the sum of each character of any given number:
for example: the first number in the given string is going to be 56 the sum of this will be 5+6=11, and the 5th element is
99 which translates to 9+9 = 18

edge cases: if the sum of the numbers is equal to another number we should go by alphabetical order instead. this means that
if we got the third, second, and first values of the string given for this example (74,65,56) they all have a sum of 11 as
the result of their inner sum. so in this case we should go by alphabetical order instead. this means give back (56,65,75)
since 5 in 56 comes first that 6 in number 65 and so on...

*/

function orderWeight(strng) {
  const values = strng.split(" ").map((number) => ({
    number,
    sum: [...number].reduce(
      (addition, currentValue) => addition + Number(currentValue),
      0
    ),
  }));

  console.log(values);

  values.sort((a, b) => {
    if (a.sum === b.sum) {
      return a.number.localeCompare(b.number);
    }
    return a.sum - b.sum;
  });

  console.log("The sorted values will be: ", values);

  const sortedString = values.map((value) => value.number).join(" ");

  return sortedString;
}
