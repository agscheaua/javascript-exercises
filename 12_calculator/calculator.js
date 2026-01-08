
const add = function (para1, para2) {
  if ( (typeof para1 && typeof para2) === "number") {
    return para1 + para2
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

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
