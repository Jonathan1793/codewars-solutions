/*This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));*/

function zero(cb) {
  return cb ? cb(0) : 0;
}
function one(cb) {
  return cb ? cb(1) : 1;
}
function two(cb) {
  return cb ? cb(2) : 2;
}
function three(cb) {
  return cb ? cb(3) : 3;
}
function four(cb) {
  return cb ? cb(4) : 4;
}
function five(cb) {
  return cb ? cb(5) : 5;
}
function six(cb) {
  return cb ? cb(6) : 6;
}
function seven(cb) {
  return cb ? cb(7) : 7;
}
function eight(cb) {
  return cb ? cb(8) : 8;
}
function nine(cb) {
  return cb ? cb(9) : 9;
}

function plus(numberRight) {
  return function (numberLeft) {
    return numberLeft + numberRight;
  };
}
function minus(numberRight) {
  return function (numberLeft) {
    return numberLeft - numberRight;
  };
}
function times(numberRight) {
  return function (numberLeft) {
    return numberLeft * numberRight;
  };
}
function dividedBy(numberRight) {
  return function (numberLeft) {
    return Math.floor(numberLeft / numberRight);
  };
}
