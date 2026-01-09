const fibonacci = function(para1) {
  let myArray = [1];
  for (let i = 1; i < 100; i++) {
    if (myArray.length < 2) {
      myArray.push(i);
    }
    else {
      myArray.push(getLastNr() + getSecondLastNr()); 
    };
  };

  function getLastNr () {
    let myArrayLastNr = myArray[myArray.length - 1];
    return myArrayLastNr;
  };
  function getSecondLastNr () {
    let myArraySecondLastNr = myArray[myArray.length - 2];
    return myArraySecondLastNr;
  };

  console.log(myArray); 

  return myArray[para1 - 1];
};
console.log(fibonacci(246));  

// Do not edit below this line
module.exports = fibonacci;
