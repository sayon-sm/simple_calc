value = parseInt(defaultValue); // changes with each operation

function getUserInput() {
  return parseInt(userInput.value);
}

// creates and writes the each operation
function writeLog(operator, prev, curr) {
  output = `${prev} ${operator} ${curr}`;
  outputResult(value, output); // vendor.js
}
function add() {
  const enteredNum = getUserInput();
  const prev = value; // previous value before calculation
  value += enteredNum;
  writeLog('+', prev, enteredNum);
}

function sub() {
  const enteredNum = getUserInput();
  const prev = value; // previous value before calculation
  value -= enteredNum;
  writeLog('-', prev, enteredNum);
}

function multiply() {
  const enteredNum = getUserInput();
  const prev = value; // previous value before calculation
  value *= enteredNum;
  writeLog('*', prev, enteredNum);
}

function divide() {
  const enteredNum = getUserInput();
  const prev = value; // previous value before calculation
  value /= enteredNum;
  writeLog('/', prev, enteredNum);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
