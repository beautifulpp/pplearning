'use strict';

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //{flightNum: 'LH123', numPassengers: 1, price: 199}
createBooking('HL123', 3); //{flightNum: 'LH123', numPassengers: 3, price: 597}
createBooking('HK123', undefined, 2700); //{flightNum: 'HK123', numPassengers: 1, price: 2700}

const flight = 'LH123';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 156148152413,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LJH999';
  passenger.name = 'Mr' + passenger.name;
  if (passenger.passport === 156148152413) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};
// checkIn(flight, jonas);
// console.log(flight); //LH123
// console.log(jonas); //{name: 'MrJonas Schmedtmann', passport: 156148152413}

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(jonas);
// checkIn(flight, jonas); //alert "Wrong passport!"

const v1 = [];
const v2 = {};
const v3 = {};
//Tips引用类型(数组/对象)的按值传递实际上传递的是变量在堆中的存储地址值
function foo(v1, v2, v3) {
  //在函数内赋新值给v1,v2,v3，则它们不再是堆中变量的存储地址值，即与外部v1,v2,v3割裂
  v1 = [1];
  v2 = [2];
  v3 = { a: 3 };
}
foo(v1, v2, v3);
console.log(v1, v2, v3); // [] {} {}

function foo2(v1, v2, v3) {
  //不赋新值仅操作它，则操作的仍是堆中存储的变量
  v1.push(1);
  v2.a = 2;
  v3.a = 3;
}
foo2(v1, v2, v3);
console.log(v1, v2, v3); // [1] {a: 2} {a: 3}

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher-order function
const transformer = function (str, fn) {
  console.log(`The Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
// js uses callbacks all the time
transformer('javascript is the best language!', upperFirstWord);
transformer('javascript is the best language!', oneWord);

//
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greet('Hello')('GPP');

// const greet2 = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };
// greet2('hi')('gpp');

const greet2 = greeting => name => {
  console.log(`${greeting} ${name}`);
};

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};
lufthansa.book(239, 'gpp');
lufthansa.book(568, 'gpp');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(32, 'Baby'); NOT work

// Call method
book.call(eurowings, 23, 'HIUHO');
console.log(eurowings);
book.call(lufthansa, 345, 'FTYFY');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 578, 'Marerf');

// Apply method
const fightData = [234, 'FOONF'];
book.apply(swiss, fightData);
book.call(swiss, ...fightData); //同上

// Bing method
//book.call(eurowings, 23, 'HIUHO');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(789, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('PZJ');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const newaddVat = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
console.log(newaddVat(0.23)(100));
