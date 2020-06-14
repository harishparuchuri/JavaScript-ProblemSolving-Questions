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
