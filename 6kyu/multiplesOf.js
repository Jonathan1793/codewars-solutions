function solution(number) {
  return number > 0
    ? [...Array(number - 1).keys()]
        .map((i) => i + 1)
        .filter((number) => number % 3 === 0 || number % 5 === 0)
        .reduce((sum, value) => sum + value, 0)
    : 0;
}
