const doubleTheNums = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
};

// convert above function to an arrow function



// Write a function that prints out "Good morning, class!"



// Write a function that prints a random number (integer) between 1 and 100.



// use one of the functions above as the action parameter when you invoke the callback function below
const doMultipleTimes = (action, numTimes) => {
  for (let i = 0; i < numTimes; i++) {
    console.log(action());
  }
};



// use doMultipleTimes with an anonymous function. for a challenge, try using
// the enclosing scope to hold a value between calls (suggestion: calculate
// subsequent powers of 2 on each call, starting from 2^0 = 1)