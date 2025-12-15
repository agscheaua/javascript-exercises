
function removeFromArray(para1, para2){
    let newArr = [];
    para1.forEach( (item) => {
        if(!(item === para2)){
            newArr.push(item);
        }
        else{}
    }) 
    console.log(newArr);
    return newArr;  
};
removeFromArray([1,2,3,4,5,6,2,3,4,5], 3);         
  
    
  

// Do not edit below this line
module.exports = removeFromArray;
