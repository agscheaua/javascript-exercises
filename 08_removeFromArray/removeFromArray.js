
function removeFromArray(para1, para2){
    let para1Filtered = para1.filter((item) => {
        if (item !== 3){
            return item;
        }
        else{}
    });
    if (para2 !== 3){
        return para2;
    }
    else{}  
    return para1Filtered;                     
};
console.log(removeFromArray([1,2,3,4], 3));    
  
  

// Do not edit below this line
module.exports = removeFromArray;
