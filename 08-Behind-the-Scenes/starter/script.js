'use strict';
// let value = 1;
// function foo() {
//   console.log(value);
// }

// function bar() {
//   value = 2;
//   foo();
// }

// bar();

function calcAge(birthYear) {
  const age = 2030 - birthYear;
  function printAge() {
    const output = `You are ${age},born in ${birthYear}`;
    console.log(output);
  }
  printAge();

  return age;
}

calcAge(1990);
const FirstName = 'Gpp';

BUG;
