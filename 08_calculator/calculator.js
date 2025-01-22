const add = function(value1, value2) {
	return value1 + value2;
};

const subtract = function(value1, value2) {
    return value1 - value2;
};

const sum = function(array) {
	output = 0;
  array.forEach((item) => {
    output += item;
  })

  return Number(output);
};

const multiply = function(array) {
	output = 1;
  array.forEach((item) => {
    output *= item;
  })

  return Number(output);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(value) {
	let output = 1;

  for (let i=1; i <=value; i++){
    output *= i;
  }
  return output;

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
