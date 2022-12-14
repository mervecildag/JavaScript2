const isTheWordSplit = (pArray) => {
    let firstElement = pArray[0] 
  let secondElement = pArray[1] 

  // Array of split strings   
  let singleStrings = secondElement.split(',')
  // Hold Answers   
  let answerWords = ""

  singleStrings.map((firstWord) => {

    let splitMainWordArray = firstElement.split(firstWord)

    if(splitMainWordArray.length > 0){

      splitMainWordArray.map((word)=>{

        let joinedWord = firstWord + word
        let reversedWord = [joinedWord].reverse().toString()

        if(joinedWord === firstElement || reversedWord === firstElement){
          // console.log(firstWord, word, 'winner')
          answerWords = "" + firstWord + "," + word + ""
        } else {
          return 'not possible'
        }

      })
    }

  })

  return answerWords
};

console.log(isTheWordSplit(['hellocat','apple,bat,cat,goodbye,hello,yellow,why']))
console.log(isTheWordSplit(['baseball','a,all,b,ball,bas,base,cat,code,d,e,quit,z']))
console.log(isTheWordSplit(['abcgefd', 'a,ab,abc,abcg,b,c,dog,e,efd,zzzz']))
console.log(isTheWordSplit(['hicoders','code,coder,hi,hicode,hicoder,hicoders']))





export { isTheWordSplit };
