function generateHashtag(str) {
  if (str.length === 0 || str === " ") {
    return false;
  }

  let allWords = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
  if (allWords.length <= 0 || allWords.length >= 140) {
    return false;
  }

  allWords = "#" + allWords;
  return allWords;
}
