var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
//Sort ing array
const product=unsortedArray.sort((a,b)=>a-b)
//Finding last 3 array Elements Products
positiveProduct=product[product.length-1]*product[product.length-2]*product[product.length-3];
//Finding 2 negative numbers and last index value product
negativeProduct=product[0]*product[1]*product[product.length-1];

//finding largest product
console.log(Math.max(positiveProduct,negativeProduct));




