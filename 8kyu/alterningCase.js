String.prototype.toAlternatingCase = function () {
  // Define your method here :
  let result = "";
  for (i = 0; i < this.length; i++) {
    if (this[i] === this[i].toLowerCase()) {
      result = result + this[i].toUpperCase();
    } else {
      result = result + this[i].toLowerCase();
    }
  }
  return result;
};
