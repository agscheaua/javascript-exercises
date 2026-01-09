const fibonacci = function(para1) {
  
  if (para1 === 0) {
    return 0;
  }
  else if (para1 < 0) {
    return false;
  }
  else{};

  let myArray = [1,1];
 
  function getLastNr () {
    return myArray[myArray.length - 1];
  };
  function getSecondLastNr () {
    return myArray[myArray.length - 2];
  };

  if (para1 > myArray.length) {
    for (let i = myArray.length; i <= para1; i++) {
      myArray.push( getLastNr() + getSecondLastNr() );
    };  
  };

  return myArray[para1 - 1];
};
console.log(fibonacci());  



// Do not edit below this line
module.exports = fibonacci;
