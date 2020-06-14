var string = "Welcome to this Javascript Guide!";
var StringArr=string.split(" ");
var newString=[];
StringArr.forEach(element => {   
    let Rstring=(str)=>{ return str.split("").reverse().join(""); }  
    newString.push(Rstring(element));
    
});
console.log(newString.join(" "))

