// 1st Problem
// //Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    avg = (s1 + s2 + s3) / 3;
    if(avg <60) return 'F';
    if(avg <70) return 'D';
    if(avg < 80) return 'C';
    if(avg <90) return 'B';
    return 'A';
  }
//this problem wasnt that hard to solve because i got more hands on experinece with if/ else in the learnjavascript, 




//2nd problem
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }
//this problem was a little tricky because im not that comfortable with using var 




//3rd problem
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
    let result = ''; // variable result is declared as an empty string
    for(let i = 0; i < x.length; i++){  //The loop runs from 0 to x.length - 1.
      x[i] < 5 ? result += 0 : result += 1; //f the character is less than '5', a '0' will show up as the result, If the character is '5' or greater, a '1' will show up as the result.
    }
    return result;
  }
  // im not familiar with the ternary operator (? :), so i had to do some research for this one 




  //4th problem
//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


  function grow(x) {
    let counter = x[0];  // declare counter with the first element of the array
    for (let i = 1; i < x.length; i++) {  // Start the loop from the second element (index 1)
      counter = counter * x[i];  // Multiply the current value of counter with the current array element
    }
    return counter;  // Return the final product
  }



  //5th problem
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {   //the 's' will return a string with all exclamation marks
    return s.split('!').join('');    // split will break the string into parts wherever there is an exclamation mark. //join will put the parts back together into one string without any exclamation marks.
  }


