const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let result = arr.reduce((total, curr) => {
    return total += curr;
  }, 0)
  return result;
};

const multiply = function(arr) {
  let result = arr.reduce((total, curr) => {
    return total *= curr;
  })
  return result;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
	if(num <= 0){
    return 1;
  }
  return num * factorial(num-1);
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
