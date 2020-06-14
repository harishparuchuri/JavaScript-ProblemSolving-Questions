function isPalindrome(str){
    str=str.replace(/\s/g,"");
    revString=str.toLowerCase().split("").reverse().join("");
    if(revString===str) return true;
    else return false;
}
console.log(isPalindrome("racecar"))


