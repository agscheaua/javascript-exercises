const repeatString = function(str, num){
    let greeting = "";  
    for (i = 1; i <= num; i++){
        greeting += str;
    }
    console.log(greeting);
    return greeting;
};
repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
   