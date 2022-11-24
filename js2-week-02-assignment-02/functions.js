// changeEmailFromGmailToHicoders START
const changeEmailFromGmailToHicoders = (pArray) => {
   let filteredSortedArray = pArray.filter(item => item.includes("41")).sort();
   let lowerCasedConvertedNewArray = filteredSortedArray.map(item => item.toLowerCase().replace("gmail.com", "hicoders.ch"))
    return lowerCasedConvertedNewArray;
};
console.log(changeEmailFromGmailToHicoders);
// changeEmailFromGmailToHicoders END

// the finding of SuperNumbers START
const findSuperNumbers = (pArray) => {
    let superNumbersArray = [];
    pArray.map(superNumber => {
        let numberList = String(superNumber).split("").map(Number);
        //let sumArray = numberList.reduce((acc, numbers) => acc + numbers); 
        let total = 0;
       numberList.map(numbers =>{
        total +=
        Math.pow(numbers, numberList.length)
        });
        if (total === superNumber) {
       superNumbersArray.push(superNumber);
    } 
    });
    return superNumbersArray;
};
console.log(findSuperNumbers);
// the finding of SuperNumbers END


export { changeEmailFromGmailToHicoders, findSuperNumbers };
