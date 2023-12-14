/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

<<<<<<< HEAD
  // checking the length of the strings
  if(str1.length !== str2.length) {
    return false;
  }

  // clean out the strings into only alpha-numeric characters 
  // and make it lower case to make it case insensitive 
  const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();  // replace() method replaces non-alphanumeric chars into an empty string ' '.
  const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();  
  
  // sort the strings by converting into an array by using split() for coversion 
  // & sort() for sorting the arrays, then we use join() to join the elements into a string again

  const sortedStr1 = cleanStr1.split('').sort().join('')
  const sortedStr2 = cleanStr2.split('').sort().join('')
  // comparing the sorted strings
  if(sortedStr1 == sortedStr2) {
    return true;
  } else {
    return false;
  }
}

const string1 = "rex";
const string2 = "xer";
console.log(isAnagram(string1, string2)); // true

=======
}

>>>>>>> upstream/master
module.exports = isAnagram;
