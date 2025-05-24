'use strict';
let value = defaultValue; // becomes result of calculation, from initial.js
const calLog = [];

// creates & writes each operation performed
function writeLog(operator, prev, curr) {
  const output = `${prev} ${operator} ${curr}`;
  outputResult(value, output); // displays recent calculation performed
  calLog.push(output);
  console.log(calLog); // displays all calculation performed by the user
}

// performs the calculation
function calc(operator) {
  const enteredNum = parseInt(userInput.value); //get user input
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

addBtn.addEventListener('click', calc.bind(this, '+'));
subtractBtn.addEventListener('click', calc.bind(this, '-'));
multiplyBtn.addEventListener('click', calc.bind(this, '*'));
divideBtn.addEventListener('click', calc.bind(this, '/'));
