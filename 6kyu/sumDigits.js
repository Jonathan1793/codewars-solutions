function digitalRoot(n) {
  const digits = [];
  while (n > 0) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }
  let result = digits.reduce((acc, curr) => acc + curr, 0);
  if (result >= 9) {
    try {
      return digitalRoot(result);
    } catch (err) {
      return 9;
    }
  } else return result;
}
