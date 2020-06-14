var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];
intersect=firstArray.filter(element=>{return secondArray.includes(element)})
console.log(intersect)