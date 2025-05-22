'use strict';
let value = defaultValue; // becomes result of calculation, from initial.js
const calLog = [];

// gets number from input field
function getUserInput() {
  return parseInt(userInput.value);
}

// creates & writes each operation performed
function writeLog(operator, prev, curr) {
  const output = `${prev} ${operator} ${curr}`;
  outputResult(value, output); // displays recent calculation performed
  calLog.push(output);
  console.log(calLog); // displays all calculation performed by the user
}

// performs the calculation
function calc(operator) {
  const enteredNum = getUserInput();
  const prev = value; // previous value before calculation
  if (operator == '+') {
    value += enteredNum;
  } else if (operator == '-') {
    value -= enteredNum;
  } else if (operator == '*') {
    value *= enteredNum;
  } else if (operator == '/') {
    value /= enteredNum;
  }
  writeLog(operator, prev, enteredNum);
}

function add() {
  calc('+');
}

function sub() {
  calc('-');
}

function multiply() {
  calc('*');
}

function divide() {
  calc('/');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
