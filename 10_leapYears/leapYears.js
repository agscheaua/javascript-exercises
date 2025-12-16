function leapYears(para1){
    if (para1 % 4 === 0){
        console.log(`${para1}, is a leap year!`);
        return true;
    }
    else { 
        console.log(`${para1}, is not a leap year!`);
        return false;
    };
    if (para1 % 100 === 0 && para1 % 400 === 0){
        console.log(`${para1}, is a leap year!`);
        return true;
    }
    else {
        console.log(`${para1}, is not a leap year!`);
        return false;
    };
}
leapYears(1985);      
      

// Do not edit below this line
module.exports = leapYears;
