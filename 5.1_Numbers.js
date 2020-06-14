function isPowerOfTwo(number)
{
    if(number<1) return false;
    else
    {
        // console.log(Math.log(number))
        // console.log(Math.log(2))
        // console.log((Math.ceil((Math.log(number) / Math.log(2)))));
        // console.log(Math.floor(((Math.log(number) / Math.log(2)))));
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