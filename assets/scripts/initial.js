'use strict';
/* This is basically a fail safe mechanism to ensure
our scripts default behaviour does not 
divide 0 by the number user enters on the first operation*/

let defaultValue = parseInt(prompt('Enter the 1st value of the operation !'));

// validating user input
let check = true;
while (check) {
  if (!defaultValue) {
    defaultValue = parseInt(prompt('Enter the 1st value of the operation !'));
  } else check = false;
}

alert(
  'Now add the second value in the input aree ! \nThen use the button to perform your desired calculation !'
);
