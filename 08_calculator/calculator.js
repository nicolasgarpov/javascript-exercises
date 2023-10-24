const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
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
