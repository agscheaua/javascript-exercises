function reverseString(paraString){
    let splitStr = paraString.split('');
    let reverseSplitStr = splitStr.reverse();
    let joinedReverseSplitStr = reverseSplitStr.join("");
    console.log(joinedReverseSplitStr);
    return joinedReverseSplitStr;
}
reverseString("hello there"); 

// Do not edit below this line
module.exports = reverseString;
