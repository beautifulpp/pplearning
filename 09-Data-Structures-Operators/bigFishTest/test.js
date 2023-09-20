"use strict";
// console.log(1);
let oldStick = 0;
let moreCute = 0;
let littleGrape = 0;
const buyIceCreame = function (o, m, l) {
  oldStick += o;
  moreCute += m;
  littleGrape += l;
  //   console.log(oldStick, moreCute, littleGrape);
};
buyIceCreame(2, 3, 0);
buyIceCreame(3, 0, 3);
buyIceCreame(-3, 6, 0);
// 2,9,3
//day4:0,8,0
//day5:0,7,0

const eatIceCreame = function () {
  oldStick = oldStick > 3 ? oldStick - 3 : 0;
  moreCute = moreCute > 1 ? moreCute - 1 : 0;
  littleGrape = littleGrape > 3 ? littleGrape - 3 : 0;
  //   console.log(oldStick, moreCute, littleGrape);
};

const total = function () {
  return oldStick + moreCute + littleGrape;
};

const calcNum = function () {
  let i = 0;
  if (oldStick > 0) {
    i++;
  }
  if (moreCute > 0) {
    i++;
  }
  if (littleGrape > 0) {
    i++;
  }
  //   console.log(i);
  return i;
};

//5
let day = 3;
while (total() > 0) {
  day++;
  eatIceCreame();
  if (day === 5) {
    console.log(calcNum());
  }
  if (day === 6) {
    console.log(moreCute);
  }
  if (day === 7) {
    console.log(total());
  }
}
console.log(day);

// //6
// for (let i = 4; i < 7; i++) {
//   eatIceCreame();
// }
// console.log(moreCute);

// //7
// for (let i = 4; i < 8; i++) {
//   eatIceCreame();
// }
// console.log(oldStick + moreCute + littleGrape);
