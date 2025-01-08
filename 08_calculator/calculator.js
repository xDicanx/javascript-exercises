const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  return Array.isArray(array) 
    ? array.reduce((totalSum, actualNumber) => totalSum + actualNumber, 0)
    : 0;
};

const multiply = function(array) {
  return Array.isArray(array) 
  ? array.reduce((totalSum, actualNumber) => totalSum * actualNumber, 1)
  : 0;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  let result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
