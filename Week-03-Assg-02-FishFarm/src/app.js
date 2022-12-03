import { fishFarm} from "./fishFarm.js"
import { fishStocksOver500Kg, fishPriceBetween9And12, totalFishStock, theMostExpensiveFish, countryOfTheFishForLongestTime, fishStockInCantonTicino} from "./function.js"

console.log (fishStocksOver500Kg);
console.log (fishPriceBetween9And12);
//console.log (fishOnlyInBernAndInWinter(fishFarm));

console.log (totalFishStock);

console.log (theMostExpensiveFish[0].fishType , theMostExpensiveFish[0].price);
console.log (countryOfTheFishForLongestTime(fishFarm));

console.log (fishStockInCantonTicino(fishFarm));
