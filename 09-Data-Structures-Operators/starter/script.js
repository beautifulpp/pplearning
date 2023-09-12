'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (startIndex, mainIndex) {
    return [this.startMenu[startIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    startIndex = 0,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `order received! ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: '12:00',
  address: 'changheli380',
  startIndex: 2,
  mainIndex: 1,
});
restaurant.orderDelivery({
  address: 'hehuanyuan38#605',
});

//Tips基础Object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Tips改名
const {
  name: restaurantName,
  openingHours: hour,
  categories: tag,
} = restaurant;
console.log(restaurantName, hour, tag);

const { menu = [], startMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//Tips using thr destructure assignment
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);
//Tips 跳过某个取值用空格“a, , b ”
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);
// console.log(restaurant.order(2, 0));

// //Tips receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(0, 2);
// console.log(starter, mainCourse);

// const nested = [2, 3, [4, 5]];
// // const [i, , j] = nested;
// // console.log(i, j);
// //Tips destructuring inside of destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Tips设置default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);
// //result: 8,9,undefined
// const [x = 1, y = 1, z = 1] = [8, 9];
// console.log(x, y, z);
// //result: 8,9,1

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);
// [1,2,7,8,9]
console.log(...newArr);
// 1,2,7,8,9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
