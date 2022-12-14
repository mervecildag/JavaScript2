import { productList } from "./data";

// getProductsOfNormalQuality Function START
const getProductsOfNormalQuality = (pProductList) => {
  return pProductList.filter (products => 
    products.quality === "Normal");
  };
  //getProductsOfNormalQuality Function END

//getProductImageWithPngExtension Function START
 const getProductImageWithPngExtension = (pProductList) => {
  return pProductList.filter(products => products.productImage.substr(products.productImage.length-3)==="png");
};
//console.log(getProductImageWithPngExtension(productList));
//getProductImageWithPngExtension Function END

//getCalorieOfTheMostExpensiveProduct Function START
const getCalorieOfTheMostExpensiveProduct = (pProductList) => {
  return pProductList.filter(products => products.price).sort((a,b) => b.price-a.price)[0].totalCalories;
};
//console.log(getCalorieOfTheMostExpensiveProduct(productList));
//getCalorieOfTheMostExpensiveProduct Function END

// sortByExpirationDate Function START
const sortByExpirationDate = (pProductList) => {
  return pProductList.sort((date1,date2) => new Date(date1.expireDate)-new Date(date2.expireDate))
  .sort((a,b)=> a-b)
};
// sortByExpirationDate Function END

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};
