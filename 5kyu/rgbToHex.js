function rgb(r, g, b) {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  let number = (1 << 24) + (r << 16) + (g << 8) + b;
  let word = number.toString(16).slice(1).toUpperCase();
  return word;
}
