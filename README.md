# Interview Algorithm Questions in Javascript() {...}
*A mostly reasonable collection of technical software development interview questions try to solve using Javascript*

## Table of Contents
1. [Array](#array)
1. [Strings](#strings)
1. [Stacks and Queues](#stacks-and-queues)
1. [Recursion](#recursion)
1. [Numbers](#numbers)

## Array
<a name="array--product"></a><a name="1.1"></a>
- **[1.1](#array--product) Given an array of integers, find the largest product yielded from three of the integers**
  ```javascript
  var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

  computeProduct(unsortedArray); // 21000

  //Write your program here
  
  var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
//Sort ing array
const product=unsortedArray.sort((a,b)=>a-b)
//Finding last 3 array Elements Products
positiveProduct=product[product.length-1]*product[product.length-2]*product[product.length-3];
//Finding 2 negative numbers and last index value product
negativeProduct=product[0]*product[1]*product[product.length-1];

//finding largest product
console.log(Math.max(positiveProduct,negativeProduct));





  ```
 
<a name="array--consecutive--sum"></a><a name="1.2"></a>
- **[1.2](#array--consecutive--sum) Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in `O(n)` time**
  ```javascript
  // The output of the function should be 8
  var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
  var upperBound = 9;
  var lowerBound = 1;

  //Write your program here

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

  ```

<a name="array--unique"></a><a name="1.3"></a>
- **[1.3](#array--unique) Removing duplicates of an array and returning an array of only unique elements**
  ```javascript
  // ES6 Implementation
  var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

   //Write your program here

  var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
//convering array to set will remove duplicate elements and then converting into array
console.log(Array.from(new Set(array)))
  ```

<a name="array--largest-difference"></a><a name="1.4"></a>
- **[1.4](#array--largest-difference) Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element**
  ```javascript
  var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];

  findLargestDifference(array);

  //Write your program here

  function maxDifference(arr) {
    let maxDiff = -1;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > min && maxDiff < arr[i] - min) {
        maxDiff = arr[i] - min;
      }
  
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return maxDiff;
  }
  
  console.log(maxDifference([7, 8, 4, 9, 9, 15, 3, 1, 10])); //2
 
  ```
  
<a name="array--product-other-than-itself"></a><a name="1.5"></a>
- **[1.5](#array--product-other-than-itself) Given an array of integers, return an output array such that output[i] is equal to the product of all the elements in the array other than itself. (Solve this in O(n) without division)**
  ```javascript
  var firstArray = [2, 2, 4, 1];
  var secondArray = [0, 0, 0, 2];
  var thirdArray = [-2, -2, -3, 2];

  //Write your program here
  
  var array = [2,2,4,1];
var n=array.length;
var leftArr=[];
var RightArr=[];
var Product=[];
leftArr[0]=1;
RightArr[n-1]=1;
for(let i=1;i<n;i++)
    leftArr[i]=array[i-1]*leftArr[i-1];
for(let j=n-2;j>=0;j--)
    RightArr[j]=array[j+1]*RightArr[j+1];
for(let k=0;k<n;k++)
{
    Product[k]=leftArr[k]*RightArr[k];
}    
console.log(Product)


  ```
 
<a name="array--intersection"></a><a name="1.6"></a>
- **[1.6](#array--intersection) Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!**
  ```javascript
  var firstArray = [2, 2, 4, 1];
  var secondArray = [1, 2, 0, 2];

 
  //Write your program here

  ```
  var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];
intersect=firstArray.filter(element=>{return secondArray.includes(element)})
console.log(intersect)

**[⬆ back to top](#table-of-contents)**

## Strings
<a name="string--reverse"></a><a name="2.1"></a>
- **[2.1](#string--reverse) Given a string, reverse each word in the sentence**
  `"Welcome to this Javascript Guide!"` should be become `"emocleW ot siht tpircsavaJ !ediuG"`
  ```javascript
  var string = "Welcome to this Javascript Guide!";

  //Write your program here
  ```
  var string = "Welcome to this Javascript Guide!";
var StringArr=string.split(" ");
var newString=[];
StringArr.forEach(element => {   
    let Rstring=(str)=>{ return str.split("").reverse().join(""); }  
    newString.push(Rstring(element));
    
});
console.log(newString.join(" "))



<a name="string--anagram"></a><a name="2.2"></a>
- **[2.2](#string--anagram) Given two strings, return true if they are anagrams of one another**
  `"Mary" is an anagram of "Army"`
  ```javascript
  var firstWord = "Mary";
  var secondWord = "Army";

    //Write your program here
    function anagrams(firstWord, secondWord)
{
    if(firstWord.length!=secondWord.length)
        return false;
    else
    {
        firstWord=firstWord.toLowerCase().split("").sort().join();
        secondWord=secondWord.toLowerCase().split("").sort().join();
        if(firstWord===secondWord) return true;
            
        else return false;    
    }    
}
var firstWord = "Mary";
var secondWord = "Army";
console.log(anagrams(firstWord, secondWord));

  ```
<a name="string--palindrome"></a><a name="2.3"></a>
- **[2.3](#string--palindrome) Check if a given string is a palindrome**
  `"racecar" is a palindrome. "race car" should also be considered a palindrome. Case sensitivity should be taken into account`
  ```javascript
  isPalindrome("racecar"); // true
  isPalindrome("race Car"); // true

  //Write your program here
  function isPalindrome(str){
    str=str.replace(/\s/g,"");
    revString=str.toLowerCase().split("").reverse().join("");
    if(revString===str) return true;
    else return false;
}
console.log(isPalindrome("racecar"))

  ```

<a name="string--isIsomorphic"></a><a name="2.3"></a>
- **[2.4](#string--palindrome) Check if a given string is a isomorphic**

  ```
    For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
    to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
    string A to every char of string B.

    `paper` and `title` would return true.
    `egg` and `sad` would return false.
    `dgg` and `add` would return true.

    javascript
    isIsomorphic("egg", 'add'); // true
    isIsomorphic("paper", 'title'); // true
    isIsomorphic("kick", 'side'); // false

    //Write your program here

    function isIsomorphic(str1, str2) {
    var mapping = {};
    for (var i = 0; i < str1.length; i++) {
      if (typeof mapping[str1[i]] === "undefined") mapping[str1[i]] = str2[i];
      else if (!(mapping[str1[i]] == str2[i])) return false;
      
    }
    console.log(mapping);
    return true;
  }
console.log(isIsomorphic("harish", "progrp"));
  ```
  
**[⬆ back to top](#table-of-contents)**

## Stacks and Queues

<a name="stack-queue--stack-as-queue"></a><a name="3.1"></a>
- **[3.1](#stack-queue--stack-as-queue) Implement enqueue and dequeue using only two stacks**
  ```javascript
  var inputStack = []; // First stack
  var outputStack = []; // Second stack

  //Write your program here
  ```

<a name="stack-queue--parentheses-balancing"></a><a name="3.2"></a>
- **[3.2](#stack-queue--parentheses-balancing) Create a function that will evaluate if a given expression has balanced parentheses -- Using stacks**
  In this example, we will only consider "{}" as valid parentheses
  `{}{}` would be considered balancing. `{{{}}` is not balanced
  ```javascript
  var expression = "{{}}{}{}"
  var expressionFalse = "{}{{}";

  isBalanced(expression); // true
  isBalanced(expressionFalse); // false
  isBalanced(""); // true

  //Write your program here
  ```
 
**[⬆ back to top](#table-of-contents)**

## Recursion
<a name="recursion--decimal-to-binary"></a><a name="4.1"></a>
- **[4.1](#recursion--decimal-to-binary) Write a recursive function that returns the binary string of a given decimal number**
  Given `4` as the decimal input, the function should return `100`

  ```javascript
  decimalToBinary(3); // 11
  decimalToBinary(8); // 1000
  decimalToBinary(1000); // 1111101000

  //Write your program here
  ```
 
<a name="recursion--binary-search"></a><a name="4.2"></a>
- **[4.2](#recursion--binary-search) Write a recursive function that performs a binary search**

  ```javascript
  function recursiveBinarySearch(array, value, leftPosition, rightPosition) {
 
  }
  ```

**[⬆ back to top](#table-of-contents)**

## Numbers
<a name="numbers--power-of-two"></a><a name="5.1"></a>
- **[5.1](#numbers--power-of-two) Given an integer, determine if it is a power of 2. If so,
  return that number, else return -1. (0 is not a power of two)**
  ```javascript
  isPowerOfTwo(4); // true
  isPowerOfTwo(64); // true
  isPowerOfTwo(1); // true
  isPowerOfTwo(0); // false
  isPowerOfTwo(-1); // false

  //Write your program here:
 
  function isPowerOfTwo(number)
{
    if(number<1) return false;
    else
    {
        return ((Math.ceil((Math.log(number) / Math.log(2)))) ==  
        (Math.floor(((Math.log(number) / Math.log(2))))));
        
    }
}
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(64));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(-1));
console.log(isPowerOfTwo(100));

  ```
 
**[⬆ back to top](#table-of-contents)**

