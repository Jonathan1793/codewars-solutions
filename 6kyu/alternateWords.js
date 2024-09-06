function isAlt(word) {
  // happy codinggg
  let counter = 0;
  for (i = 0; i < word.length; i++) {
    if (i + 1 == word.length) {
      return true;
    }
    if (
      word[i].match("[aeiouAEIOU]") &&
      word[i + 1].match("[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]")
    ) {
      counter++;
      continue;
    }
    if (
      word[i].match("[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]") &&
      word[i + 1].match("[aeiouAEIOU]")
    ) {
      counter++;
      continue;
    } else {
      return false;
    }
  }
  return true;
}
