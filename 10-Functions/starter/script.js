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
