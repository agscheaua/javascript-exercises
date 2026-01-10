
const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

const findTheOldest = function(para1) {
  for ( let i = 0; i <= para1.length - 1; i++){
    if (para1[i].yearOfDeath === 0 || undefined || null || "") {
      para1[i].yearOfDeath = new Date().getFullYear();
    }
    else{};
    let yearsLived = para1[i].yearOfDeath - para1[i].yearOfBirth;
    if (!para1[i].yearsLived) {
      para1[i].yearsLived = yearsLived;
    }
    else {};
  };

  const peopleSorted = people.sort( (a, b) => {
    return b.yearsLived - a.yearsLived;
  } );
  return peopleSorted[0];
};

console.log(findTheOldest(people));  

// Do not edit below this line
module.exports = findTheOldest;
