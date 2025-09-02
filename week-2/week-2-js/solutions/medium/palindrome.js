/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    if (!str) return true;

  // keep only alphanumeric characters and convert to lowercase
  let filteredStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // two-pointer check
//   let left = 0;
//   let right = filteredStr.length - 1;

//   while (left < right) {
//     if (filteredStr[left] !== filteredStr[right]) {
//       return false;
//     }
    
//     left++;
//     right--;
//   }

//   return true;
 let reversed = filteredStr.split("").reverse().join("");
 
   return filteredStr === reversed;

  
}
module.exports = isPalindrome;


  
  