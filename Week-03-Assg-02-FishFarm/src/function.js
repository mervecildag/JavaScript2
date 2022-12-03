// FIRST QUESTION START
const fishStocksOver500Kg = fishFarm.filter (fishes => fishes.stockVolumeInKg > 500).map ((fishes) => {
    return {theNamesOfTheFishWithStocksOver500Kg : fishes.fishType }
})
// FIRST QUESTION END

// SECOND QUESTION START
const fishPriceBetween9And12 = fishFarm.filter (fishes => fishes.price > 9 && fishes.price < 12).map ((fishes) => {
    return {theFishWithAPriceRangeBetween9FrAnd12Fr : fishes.fishType }
})
// SECOND QUESTION END

// THIRD QUESTION START // I couldn't do it..
// const fishOnlyInBernAndInWinter = (pFishFarm) => {
//     const fishListInBernInWinter = [];
//    pFishFarm.filter(fish => {
//        if (fish.season === "Winter" && fish.saleLocations.filter (fish=> fish === "BE")) {
//            fishListInBernInWinter.push(fish.fishType)
//        }
//        return fishListInBernInWinter;
//    })
// }
// console.log (fishOnlyInBernAndInWinter(fishFarm));
// THIRD QUESTION END the code is not working. ;(

// FIFTH QUESTION START
const totalFishStock = fishFarm.map (fishes => fishes.stockVolumeInKg).reduce( (total, stock) => total+stock )
// FIFTH QUESTION END

// SIXTH START
//const fishWithAnApproachingExpiration = fishFarm.map (fishes => fishes.entryDate).sort()
//console.log(fishWithAnApproachingExpiration);
// SIXTH END   the code is not working. ;(

// SEVENTH QUESTION START
const theMostExpensiveFish = fishFarm.filter (fishes => fishes.price)
                                    .sort((a,b)=> b.price-a.price)
// SEVENTH QUESTION END

// EIGHTH QUESTION START 
const countryOfTheFishForLongestTime = (pFishFarm) => {
    const theLongestTime = [];
    pFishFarm.filter(fish => {
        if (fish.durationInDays === 30) {
            theLongestTime.push(fish.originCountry)
        }
    })
    return theLongestTime.join(",")
}
// EIGHTH QUESTION END 

// NINETH QUESTION START // I couldn't do it..
//  const  averagePriceOfFishInRomandy = (pFishFarm) => {
//      const priceList = [];
//      pFishFarm.map(fish => {
//          fish.saleLocations.filter ((cantons)=> {
//               cantons.saleLocations === "VD" && (fish.season === "Winter" || fishFarm.season === "Autumn" ? fish : null)
//             return  priceList.push(fish.price);           
//      })
//      //priceList.reduce((a,b) => a+b);
//  })
//  console.log (averagePriceOfFishInRomandy(fishFarm));
// NINETH QUESTION END the code is not working. ;(

//TENTH QUESTION START
const fishStockInCantonTicino = (pFishFarm) => {
    const stockFish = [];
    pFishFarm.filter(fish => {
        fish.saleLocations
        if (fish.saleLocations === "TI") {
            stockFish.push(fish.stockVolumeInKg).reduce((a,b)=> a+b)
        }
    })
    return stockFish;
}
//TENTH QUESTION END


export{
    fishStocksOver500Kg,
    fishPriceBetween9And12,
    fishOnlyInBernAndInWinter,

    totalFishStock,

    theMostExpensiveFish,
    countryOfTheFishForLongestTime,

    fishStockInCantonTicino
}