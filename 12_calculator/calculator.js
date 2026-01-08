
const add = function () {
  if ( (typeof para1 && typeof para2) === "number" ) {
    return para1 + para2;
  }
  else {
    return "not a number";
  };
};

const subtract = function(para1, para2) {
	if ( (typeof para1 && typeof para2) === "number" ) {
    return para1 - para2;
  }
  else {
    return "not a number";
  };
};

const sum = function(para1) {
  const sumOfAllNumbers = para1.reduce( (accumulator, item) => {
    return accumulator + item;
  }, 0);
  return sumOfAllNumbers;
};

const multiply = function(para1) {
  const multiplyAllNumbers = para1.reduce ( (accumulator, item) => {
    return accumulator * item;
  });
  return multiplyAllNumbers;
};

const power = function(para1, para2) {
  return para1 ** para2;
};

const factorial = function(para1) {
  let factorialOfPara1 = 1;
  if (para1 === 0) {
    return 1;
  }
  else if (para1 > 0) {
    const integerPara1 = Math.round(para1);
    for (let i = 1; i <= para1; i++) {
        factorialOfPara1 *= i;
    };
  }
  else {
    return "invalid input";
  };
  return factorialOfPara1;
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
