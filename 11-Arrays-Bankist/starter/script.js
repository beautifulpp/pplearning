'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
       
      <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterBegin', html);
  });
};
displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);
// console.log(containerMovements.textContent);

/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////
// Tips The Slice(起，止) method(not change the original arr)
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(1, -2)); //['b','c']
// console.log(arr.slice(2, 4)); //['c','d']
// console.log(arr.slice(-1)); //['e']
// console.log(arr.slice()); //['a', 'b', 'c', 'd', 'e']
// console.log([...arr]); //['a', 'b', 'c', 'd', 'e']
// /*PS*/ console.log(...arr); //a b c d e

// //Tips the Splice(起，长度) method(change the original arr)
// // console.log(arr.slice(2)); //['c','d','e']
// console.log(arr); //['a', 'b', 'c', 'd']
// arr.splice(-3);
// console.log(arr); //['a']
// arr.splice(1, 2); //从第二位开始，切俩
// console.log(arr); //['a', 'd']

// //Tips the Reverse method(change the original arr too)
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['1', '2', '3'];
// console.log(arr2.reverse()); //['5', '4', '3', '2', '1']
// console.log(arr2); //['3', '2', '1']

// //Tips the Concat method
// const letter = arr.concat(arr2);
// console.log(letter); //['a', 'b', 'c', 'd', 'e',  '3', '2', '1']
// console.log([...arr, ...arr2]); //['a', 'b', 'c', 'd', 'e',  '3', '2', '1']
// console.log(...arr); //a,b,c,d,e
// const letter2 = { ...arr };
// console.log(letter2); //{0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e'}

// //Tips the Join method
// console.log(letter.join('-')); //a-b-c-d-e-3-2-1

// //Tips the At method
// arr = [23, 11, 46];
// console.log(arr[0]); //23
// console.log(arr.at(0)); //23
// //old getting last array element
// console.log(arr[arr.length - 1]); //46
// console.log(arr.slice(-1)[0]); //46
// console.log(arr.at(-1)); //46
// console.log(arr.at(-2)); //11

// console.log('jonas'.at(-3)); //n

// /////////////////////////////////////////////////
// //Tips forEach with array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('----forEach----');
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: you deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: you withdrew ${Math.abs(movement)}`);
//   }
// });

// //Tips forEach with Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Great Britain Pound'],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });

// // Tips forEach with Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique); //Set(3) {'USD', 'GBP', 'EUR'}
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}:${value}`);
// });
// /*USD:USD
//   GBP:GBP
//   EUR:EUR */

// Coding Challenge #1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJulia_correct = dogsJulia.slice(1, -2);
//   const allDogs = dogsJulia_correct.concat(dogsKate);
//   allDogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult,and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

const eurToUsd = 1.1;
const movementsUsd=movements.map(mov=> mov*eurToUsd);
console.log(movements);
console.log(movementsUsd);

const movementsUsdfor = [];
for(const mov of movements){
  movementsUsdfor.push(mov*eurToUsd);
};
console.log(movements);
console.log(movementsUsdfor);

const movementsDescriptions = movements.map((mov,index)=>
   `Movement ${index + 1}: you ${mov>0?'deposited':'withdrew'} ${Math.abs(mov)}` );
  // if (movements > 0) {
  //       return`Movement ${index + 1}: you deposited ${movements}`;
  //     } else {
  //       return`Movement ${index + 1}: you withdrew ${Math.abs(movements)}`;
  //     }
  //   });
  console.log(movementsDescriptions);   