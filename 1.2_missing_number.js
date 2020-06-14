var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

//Finding sum of Array Values
ArraySum=arrayOfIntegers.reduce((a, b) => a + b);
//Finding consecutive numbers sum
upperLimitSum = (upperBound * (upperBound + 1)) / 2;
lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;

NumberSum=upperLimitSum-lowerLimitSum;
//printing Missing value
console.log(NumberSum-ArraySum)



