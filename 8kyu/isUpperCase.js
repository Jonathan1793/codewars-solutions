String.prototype.isUpperCase = function () {
  // your code here
  let word = this.toString();
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};
