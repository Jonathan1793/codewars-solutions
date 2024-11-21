function humanReadable(number) {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  hours = Math.floor(number / 3600);
  seconds = number % 3600;
  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return `${hours}:${minutes}:${seconds}`;
}
