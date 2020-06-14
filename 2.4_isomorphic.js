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