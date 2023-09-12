'use strict';

//Data needed for a later exercise
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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`);
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

//Tips基础Object destructuring 需要对应名字
const { openingHours, categories, name } = restaurant;
console.log(name, openingHours, categories);

//Tips改名
const {
  name: restaurantName,
  openingHours: hour,
  categories: tag,
} = restaurant;
console.log(restaurantName, hour, tag);

const { menu0 = [], startMenu: starters = [] } = restaurant;
console.log(menu0, starters);

let x = 111;
let y = 999;
const obj = { x: 23, y: 7, z: 14 };
({ x, y } = obj);
console.log(x, y);

const {
  fri: { open: o, close: clo },
} = restaurant.openingHours;
console.log(o, clo);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
//Tips using thr destructure assignment
const [x2, y2, z2] = arr;
console.log(x2, y2, z2);
console.log(arr);
//Tips 跳过某个取值用空格“a, , b ”
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);
console.log(restaurant.order(2, 0));

//Tips receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(0, 2);
console.log(starter, mainCourse);

const nested = [2, 3, [4, 5]];
// const [i, , j] = nested;
// console.log(i, j);
//Tips destructuring inside of destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Tips设置default values
const [p, q, r] = [8, 9];
console.log(p, q, r);
//result: 8,9,undefined
const [x3 = 1, y3 = 1, z3 = 1] = [8, 9];
console.log(x3, y3, z3);
//result: 8,9,1


const arr3 = [7, 8, 9];
const badNewArr = [1, 2, arr3[0], arr3[1], arr3[2]];
console.log(badNewArr);
//Tips spread operator only used for write multiple values separated by commas.构建数组/传递函数的参数，仅适用于需要用‘，’分隔多个值的情况
const newArr = [1, 2, ...arr3];
console.log(newArr);
// [1,2,7,8,9]
console.log(...newArr);
// 1,2,7,8,9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...restaurant.startMenu, ...restaurant.mainMenu]
console.log(menu)

//Tips iterables: arrays,strings,maps,sets. Not objects before ES2018
const str = 'Jonas';
const letters = [...str, '', 'P.'];
console.log(letters);

// const ingredients = [prompt("Let's make pasta! Infredient 1?"), prompt("Infredient 2?"), prompt("Infredient 3?")];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { foundedin: 1991, ...restaurant, founder: 'gpp' }
console.log(newRestaurant);
const restaurantCopy = { ...newRestaurant };
restaurantCopy.name = 'ristorante roma';
console.log(newRestaurant.name, restaurantCopy.name);

//Tips spread,because on right side of "="
const arr4 = [1, 2, ...[3, 4]];
console.log(arr4);
// [1,2,3,4]

//Tips rest,because on left side of "="
const [a4, b4, ...others] = [1, 2, 3, 4];
console.log(a4, b4, others);
// 1 2 [3,4]

const [Pizza, , Risotto, Focaccia, ...others2] = [...restaurant.mainMenu, ...restaurant.startMenu];
console.log(Pizza, Risotto, Focaccia, others2);

//objects  需要对应名字
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);
