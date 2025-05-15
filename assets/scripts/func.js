let value = parseInt(defaultValue); // changes with each operation
const calLog = [];

function getUserInput() {
  return parseInt(userInput.value);
}

// creates and writes the each operation
function writeLog(operator, prev, curr) {
  output = `${prev} ${operator} ${curr}`;
  outputResult(value, output); // vendor.js
  calLog.push(output);
  console.log(calLog);
}

function calc(operator) {
  const enteredNum = getUserInput();
  const prev = value; // previous value before calculation
  if (operator == '+') {
    value += enteredNum;
    writeLog(operator, prev, enteredNum);
  } else if (operator == '-') {
    value -= enteredNum;
    writeLog(operator, prev, enteredNum);
  } else if (operator == '*') {
    value *= enteredNum;
    writeLog(operator, prev, enteredNum);
  } else if (operator == '/') {
    value /= enteredNum;
    writeLog(operator, prev, enteredNum);
  }
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
