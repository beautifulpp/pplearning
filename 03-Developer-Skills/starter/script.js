// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// const calcAge = (birthYear) => 2037 - birthYear;

// console.log(calcAge(34));
// console.log('df');
// const x = 45;
// console.log(x);
// console.log('x');

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {};
// const temperatures = [3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (max < temps[i]) max = temps[i];
//     if (min > temps[i]) min = temps[i];
//   }
//   console.log(min, max);
//   return max - min;
// };

// const amplitude = calcTempAmplitudeNew(
//   [1, 2, 3, 'ergf', 9, -2],
//   [0, 1, 2, 12, -6]
// );
// console.log(amplitude);

// const calcKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // value: Number(prompt('Degree celsius')),
//     value: 10,
//   };

//   console.table(measurement);

//   const kelvin = measurement.value + 237;
//   return kelvin;
// };
// console.log(calcKelvin());

// const calcTempAmplitudebug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;

//     if (max < temps[i]) max = temps[i];
//     if (min > temps[i]) min = temps[i];
//   }
//   console.log(min, max);
//   return max - min;
// };

// const amplitudebug = calcTempAmplitudebug([1, 2, 3, 'ergf', 9], [1, 2, 12]);
// //A identify
// console.log(amplitudebug);

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
*/

const userdata = prompt('please input datas with"," to seperate them');
const udToArr = userdata.split(',');
// console.log(udToArr);
// console.log(udToArr[0]);
let str = '';
const printForecast = function (udToArr) {
  for (let i = 0; i < udToArr.length; i++) {
    str += `${udToArr[i]}ºC in ${i + 1} days...`;
  }
  console.log('...' + str);
};
printForecast(udToArr);
