function spinWords(string) {
  //TODO Have fun :)
  let words = string.split(" "); //splits the string by space may it contain more than one word
  return words
    .map((word) => (word.length >= 5 ? [...word].reverse().join("") : word)) //loops through the array of words created by split and for each word in the array if the length is more or equal to five
    .reduce((acc, val) => acc + " " + val); // it will reverse the word by character and then join it to make it a full word again, after that we use reduce just to get all the words together
}

spinWords("Welcome");
