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
       
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterBegin', html);
  });
};
displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);
// console.log(containerMovements.textContent);

const calcDiaplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};
calcDiaplayBalance(account1.movements);

const calcDisplaySummary = function(movements){
  const incomes = movements.filter(mov => mov >0).reduce((acc,mov)=>acc+mov,0);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = movements.filter(mov => mov <0).reduce((acc,mov)=>acc+mov,0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  const interest = movements.filter(mov => mov>0).map(deposit=>deposit*1.2/100).filter((deposit,i,arr) =>{ 
    console.log(arr);
    return deposit >=1}).reduce((acc,interest) =>acc+interest,0) 
  labelSumInterest .textContent = `${interest}€`;

};
calcDisplaySummary(account1.movements)


const creatUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(value => value[0])
      .join('');
  });
};
creatUsernames(accounts);


// const deposits = movements.filter(function (mov, i, arr) {
//   return mov > 0;
// });
// console.log(deposits);
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
// for (const movement of movements) {
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

const eurToUsd = 1.1;
const movementsUsd = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUsd);

const movementsUsdfor = [];
for (const mov of movements) {
  movementsUsdfor.push(mov * eurToUsd);
}
console.log(movements);
console.log(movementsUsdfor);

const movementsDescriptions = movements.map(
// if (movements > 0) {
  //       return`Movement ${index + 1}: you deposited ${movements}`;
  //     } else {
    //       return`Movement ${index + 1}: you withdrew ${Math.abs(movements)}`;
    //     }
    //   });
    (mov, index) =>
      `Movement ${index + 1}: you ${
        mov > 0 ? 'deposited' : 'withdrew'
      } ${Math.abs(mov)}`
  );
console.log(movementsDescriptions);

// const creatUsername = function(user){
// const username = user.toLowerCase().split(' ').map(value=>value[0]).join('')
// return username
// };
// console.log(creatUsername('Steven Williams')); //sw


//for...of
// const depositsFor = [];
// for (const mov of movements){
//   if(mov>0)depositsFor.push(mov)
// };
// console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// accumulator -> Snowball
// const balance = movements.reduce(function(acc,cur,i,arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc+cur;
// },1000);
const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 1000);
console.log(balance);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

//Maximun value
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max);

//PIPELINE
const totalDepositsUSD = movements.filter(mov => mov>0).map(mov => mov*eurToUsd).reduce((acc,mov) => acc+mov,0);
console.log(totalDepositsUSD);


const firstWithdrawal = movements.find(mov => mov<0);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc =>acc.owner ==='Jessica Davis');
console.log(account);
