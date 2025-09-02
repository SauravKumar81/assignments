/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const isLowerString1 =str1.toLowerCase();
  const arr1=isLowerString1.split(''); // it will convert "hrt"=>>['h','r','t']
  arr1.sort(); //[zadb]=>[abcz]
  const sortedStrind1=arr1.join("");

  const isLowerString2=str2.toLowerCase();
  const arr2=isLowerString2.split('');
  arr2.sort();
  let sortedString2=arr2.join("") ; 




  // split and join don't mutable
  //sort does mutable
  if(sortedStrind1==sortedString2){  
    return true;
  }
  else return false;
  
}

module.exports = isAnagram;
