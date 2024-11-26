/**Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. */

function incrementString(str) {
  // return incrementedString
  if (str.match(/\d+/)) {
    let newString = str.split(/(\d+)/);
    newString.pop();
    let addedNumber = (
      parseInt(newString[newString.length - 1], 10) + 1
    ).toString();
    while (addedNumber.length < newString[1].length) {
      addedNumber = "0" + addedNumber;
    }
    newString[newString.length - 1] = addedNumber;
    const result = newString.join("");
    return result;
  } else {
    return (str = str + "1");
  }
}
