const palindromes = function (para1) {
  const splitWord = para1.split('');
  const splitWordLengthArray = splitWord.length - 1;
  let reverseSplitWord = '';
  for (let i = splitWordLengthArray; 0 <= i; i--) {
    reverseSplitWord += splitWord[i];
  };
  if (para1 === reverseSplitWord) {
    return true;
  }
  else {
    return false;
  };
};

const palindromes2 = function (para1) {
  const splitWord = para1.split('');
  const reverseWord = splitWord.reverse('').join('');
  return console.log(para1 === reverseWord);
};

palindromes2('racecar');
console.log( palindromes('racecar') );

// Do not edit below this line
module.exports = palindromes;
