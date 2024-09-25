function ipsBetween(start, end) {
  //TODO
  const firstIP = start.split(".");
  const targetIP = end.split(".");
  let power = 24;
  for (let i = 0; i < firstIP.length; i++) {
    firstIP[i] = firstIP[i] * Math.pow(2, power);
    targetIP[i] = targetIP[i] * Math.pow(2, power);
    power -= 8;
  }
  const firstIPinBase32 = firstIP.reduce((acc, el) => acc + el, 0);
  const targetIPinBase32 = targetIP.reduce((acc, el) => acc + el, 0);
  return targetIPinBase32 - firstIPinBase32;
}
