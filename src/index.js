// const doubleTheNums = function(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] *= 2;
//   }
//   return arr;
// };
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] *= 2;
//   }
//   return arr;
// };
const doubleTheNums = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
};
const list1 = [2,5,6,7];
console.log(doubleTheNums(list1));
// convert above function to an arrow function

const fn = (arg0,arg1) => {
  return {arg0,arg1};
};
// console.log(fn('dog','cat'))

// Write a function that prints out "Good morning, class!"
// const greeting = () => {
//   return `Good morning, class!`;
// };
const greeting = () => 'Good morning, class!';
// console.log(greeting());


// Write a function that prints a random number (integer) between 1 and 100.
const randomNum = () => {
  const myNum = Math.floor(Math.random() * 100) + 1;
  return myNum;
};
// randomNum();



// use one of the functions above as the action parameter when you invoke the callback function below
const doMultipleTimes = (action, numTimes) => {
  for (let i = 0; i < numTimes; i++) {
    console.log(action());
  }
};

// doMultipleTimes(randomNum,10)

// use doMultipleTimes with an anonymous function. for a challenge, try using

// the enclosing scope to hold a value between calls (suggestion: calculate

// subsequent powers of 2 on each call, starting from 2^0 = 1)
 let m = 0;
console.log(doMultipleTimes(()=>{
  const result = 2**m;
  m++;
  return result
}, 10))