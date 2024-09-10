// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set

function trilingualDemocracy(group) {
  // implement the rules...
  let count = 0;
  const languages = {
    D: 0,
    F: 0,
    I: 0,
    K: 0,
  };
  for (const letter of group) {
    languages[letter] = languages[letter] + 1;
  }

  console.log(languages);
  for (const key in languages) {
    console.log(key);
    if (languages[key] === 3) {
      return key;
    }
    if (languages[key] === 2) {
      return Object.keys(languages).filter((key) => languages[key] === 1)[0];
    }
    if (languages[key] === 1) {
      count++;
      if (count === 3) {
        return Object.keys(languages).filter((key) => languages[key] === 0)[0];
      }
    }
  }
}
