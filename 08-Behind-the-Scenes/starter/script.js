'use strict';
// let value = 1;
// function foo() {
//   console.log(value);
// }

// function bar() {
//   value = 2;
//   foo();
// // }

// // bar();

// function calcAge(birthYear) {
//   const age = 2030 - birthYear;
//   function printAge() {
//     let output = `${firstName},you are ${age},born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       //BUG
//       console.log(millenial);
//       var millenial = true;

//       //新创造内部同名常量firstName
//       const firstName = 'PP';
//       //修改变量output值
//       output = 'new output';
//       const str = `Oh,you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   //执行printAge
//   printAge();
//   return age;
// }
// const firstName = 'G';
// //执行calcAge
// calcAge(1990);

// console.log(addDecl);
// console.log(addDecl(2, 3));
// console.log(addArrow);
// console.log(addExpr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addArrow = (a, b) => a + b;

// var addExpr = function (a, b) {
//   return a + b;
// };
// if (!numProducts) {
//   deleteShoppingCar();
// }
// var numProducts = 10;

// function deleteShoppingCar() {
//   console.log('All products deleted!');
// }

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// }
// calcAge(1990)

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// }
// calcAgeArrow(1991);

// const GPP = {
//   year: 1990,
//   calcAge: function () {
//     console.log(2037 - this.year)
//   }
// }
// GPP.calcAge();

// const matiada = {
//   year: 2017,
// };
// matiada.calcAge = GPP.calcAge;
// matiada.calcAge();

// const f = GPP.calcAge;
// f()

// const GPP = {
//   firstName: 'G',
//   year: 1990,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);
//     //soluton one
//     // const self = this;
//     // const isMillenial = function () {
//     //   // console.log(this.year >= 1986 && this.year <= 1996)
//     //   console.log(self.year >= 1986 && self.year <= 1996)
//     // };

//     const isMillenial = () => {
//       // console.log(this.year >= 1986 && this.year <= 1996)
//       console.log(this.year >= 1986 && this.year <= 1996)
//     };

//     isMillenial();
//   },
//   // greet: () => {
//   //   console.log(`Hey ${this.firstName}`)
//   // },
// }
// // GPP.greet();
// GPP.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;

// };
// addExpr(2, 3);
// console.log(addExpr(2, 3));

//

// const me = {
//   name: 'GPP',
//   age: 33,
// };
// const friend = me;
// friend.age = 27;
// console.log(friend.age);
// console.log(me.age);

//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//reference types
const Jessica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = Jessica;
marriedJessica.lastName = 'Davis';
console.log('before marriage:', Jessica);
console.log('After marrige:', marriedJessica);

//copying types
const Jessica2 = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
  family: ['a', 'b'],
};
const jessicaCopy = Object.assign({}, Jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family = ['c'];
// jessicaCopy.family.push('c');
console.log('before marriage:', Jessica2);
console.log('After marrige:', jessicaCopy);
