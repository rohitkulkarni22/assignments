/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let biggestElement = numbers[0];
    for (let i = 0; i<numbers.length; i++) {  // iterating over the complete array
        if (numbers[i] > biggestElement){
            biggestElement = numbers[i];   // updating the value of biggest number whenever we encounter a bigger one in the array
        }
    }
    return biggestElement; 
};

module.exports = findLargestElement;