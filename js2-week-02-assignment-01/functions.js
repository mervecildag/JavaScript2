// finding the number of odd numbers in array START
const findTheNumberOfOddNumbers = (pArray)=> {
  return (pArray.filter((item) => item %2 !== 0).length);
};
console.log(findTheNumberOfOddNumbers);
// finding the number of odd numbers in array END


const getIndexOfFalseItem = (pArray) => {
  return pArray.findIndex((item) => item === false);
};
console.log(getIndexOfFalseItem);



const filterNumbers = (pArray) => {
  return pArray.filter((item) => typeof item === "number");
};
console.log(filterNumbers);
//console.log(filterNumbers.length);



const generateEmailAddress = (pArray) => {
  return pArray.map((item) => item.toLocaleLowerCase().replace(" ").concat("@gmail.com"));
};
console.log(generateEmailAddress);



export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};
