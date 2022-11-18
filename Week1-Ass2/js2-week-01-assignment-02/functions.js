// the sum of the 3 numbers START.
const calculateTotal = (pNumber1,pNumber2,pNumber3) => {
  let sumOfTheNumbers = pNumber1+pNumber2+pNumber3;
  return sumOfTheNumbers;
};
console.log(calculateTotal(4,2,7));
// the sum of the 3 numbers END.

// sum the elements of the given array START.
const calculateTotalOfItemsOfArray = (pArray) => {
  let calculateTotalOfArray = 0;
  for (let index = 0; index < pArray.length; index++) {
  calculateTotalOfArray = calculateTotalOfArray + pArray[index];
  }
  return calculateTotalOfArray;
};
console.log(calculateTotalOfItemsOfArray ([4, 2, 14]));
// sum the elements of the given array END.

// writing the given string value in reverse and lowercase START.
const reverseTheString = (pString) => {
  let newString = "";
  for (let i = pString.length - 1; i >= 0; i--) { 
    newString += pString[i]; // or newString = newString + pString[i];
  }
   return newString.toLowerCase();
};
reverseTheString("HiCoders");
// writing the given string value in reverse and lowercase END.

// whether the variable is a palindrome START.
const isPalindrome = (stringPalindrome) => {
  for (let i = 0; i < stringPalindrome.length / 2; i++) {
    // check if first and last string are same
    if (stringPalindrome[i] !== stringPalindrome[stringPalindrome.length - 1 - i]) {
        //return 'It is not a palindrome';
        return false;
    }
  }
  //return 'It is a palindrome';
    return true;

};
console.log(isPalindrome("kek"));
// whether the variable is a palindrome END.

export {
  calculateTotal,
  calculateTotalOfItemsOfArray,
  reverseTheString,
  isPalindrome,
};
