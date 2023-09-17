'use strict';

const openingHours2 = {
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
  //Tips ES6中属性名可被计算，so另种写法：用‘[]’中放表达式
  [3 + 4]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
    //Tips ES6中属性名可被计算，so另种写法：用‘[]’中放表达式
    [3 + 4]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

if (restaurant.openingHours.mon && restaurant.openingHours.mon.open) {
  console.log(restaurant.openingHours.mon.open);
}
restaurant.openingHours.fri && console.log(restaurant.openingHours.fri.open); // 11

//Tips with Optonal Chaining : ?.
console.log(restaurant.openingHours.mon?.open); //undefined
console.log(restaurant.openingHours?.mon?.open); //undefined

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  //Tips use a variable name as the property name should add the [brackets notation].
  console.log(restaurant.openingHours[day]);

  const openerror = restaurant.openingHours[day]?.open || 'closed'; // error saturday:
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(open);
  // console.log(`On ${day}, we open at ${open}`);
  // console.log(`On ${day}, we open at ${openerror}`);
}

//Tips Optional Chaining on Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRodo?.(0, 1) ?? 'Method does not exist');

//Tips Optional on Arrays
// const users = [];
const users = [{ name: 'Gpp', email: 'hello@gpp.com' }];
// if (users.length > 0) {
//   console.log(users[0].name);
// } else {
//   console.log('User array empty');
// }
console.log(users[0]?.name ?? 'User array empty');

//Tips Property Names
const properties = Object.keys(openingHours2);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Tips Property Values
const values = Object.values(openingHours2);
console.log(values);

//Tips entries object
const entries = Object.entries(openingHours2);
console.log(entries);
// destructuring [entries] using [key,value]
for (const [day, { open, close }] of entries) {
  console.log(`on the ${day}, we open at ${open} and close at ${close}`);
}

// restaurant.orderDelivery({
//   time: '12:00',
//   address: 'changheli380',
//   startIndex: 2,
//   mainIndex: 1,
// });
// restaurant.orderDelivery({
//   address: 'hehuanyuan38#605',
// });

// //Tips基础Object destructuring 需要对应名字
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //Tips改名
// const {
//   name: restaurantName,
//   openingHours: hour,
//   categories: tag,
// } = restaurant;
// console.log(restaurantName, hour, tag);

// const { menu0 = [], startMenu: starters = [] } = restaurant;
// console.log(menu0, starters); //Array[0];Array[4]

// let x = 111;
// let y = 999;
// const obj = { x: 23, y: 7, z: 14 };
// ({ x, y } = obj);
// console.log(x, y); // 23  7

// const {
//   fri: { open: o, close: clo },
// } = restaurant.openingHours;
// console.log(o, clo);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //Tips using the Destructure Assignment
// const [x2, y2, z2] = arr;
// console.log(x2, y2, z2);
// console.log(arr);

// //Tips 跳过某个取值用空格“a, , b ”
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
// const [x3 = 1, y3 = 1, z3 = 1] = [8, 9];
// console.log(x3, y3, z3);
// //result: 8,9,1

// const arr3 = [7, 8, 9];
// const badNewArr = [1, 2, arr3[0], arr3[1], arr3[2]];
// console.log(badNewArr);
// //Tips spread operator only used for write multiple values separated by commas.构建数组/传递函数的参数，仅适用于需要用‘，’分隔多个值的情况
// const newArr = [1, 2, ...arr3];
// console.log(newArr);
// // [1,2,7,8,9]
// console.log(...newArr);
// // 1,2,7,8,9

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// const menu = [...restaurant.startMenu, ...restaurant.mainMenu];
// console.log(menu);

// //Tips the 'for-of' loop
// for (const item of menu) {
//   console.log(item);
// }

// //Tips iterables: arrays,strings,maps,sets. Not objects before ES2018
// const str = 'Jonas';
// const letters = [...str, '', 'P.'];
// console.log(letters);

// const ingredients = [prompt("Let's make pasta! Infredient 1?"), prompt("Infredient 2?"), prompt("Infredient 3?")];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//objects
// const newRestaurant = { foundedin: 1991, ...restaurant, founder: 'gpp' };
// console.log(newRestaurant);
// const restaurantCopy = { ...newRestaurant };
// restaurantCopy.name = 'ristorante roma';
// console.log(newRestaurant.name, restaurantCopy.name);

// // 1) Destructuring
// //Tips spread,because on right side of "="
// const arr4 = [1, 2, ...[3, 4]];
// console.log(arr4);
// // [1,2,3,4]

// //Tips rest,because on left side of "="
// const [a4, b4, ...others] = [1, 2, 3, 4];
// console.log(a4, b4, others);
// // 1 2 [3,4]

// const [Pizza, , Risotto, Focaccia, ...others2] = [
//   ...restaurant.mainMenu,
//   ...restaurant.startMenu,
// ];
// console.log(Pizza, Risotto, Focaccia, others2);

// //objects  需要对应名字
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// };
// console.log(add(1, 2, 3, 4, 15));

// const t = [23, 5, 7];
// console.log(add(...t));

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

// console.log('-------OR-------');
// //Tips 3 property of logical operators( &&  || ):
// // 1)  use any data type, retrun any data type,short-circuiting
// console.log(3 || 'pp'); // 3
// console.log('pp' || 3); // 'pp'
// console.log('' || 'pp'); //'pp'
// console.log(true || 3); //true
// console.log(undefined || null); //null
// console.log(undefined || 0 || '' || 'pp' || 23 || null); //'pp'

// restaurant.numGuests = 23;
// const guestes1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guestes1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// // summarize 'OR' return the first truthy value of all the operands, or simply the last value if all of them are falsy

// console.log('-------AND-------');
// console.log(0 && 'pp'); //0
// console.log(7 && 'pp'); //'pp'
// console.log('pp' && 23 && null && 'g'); //null
// //practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
// //summarize 'AND' return the first falsy value or the last value if all of them are truthy

// restaurant.numGuests = 0;
// const guests3 = restaurant.numGuests || 10;
// console.log(guests3);

// //Tips the Nullish Coalescing Operator : null and undefined (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'pp',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // console.log(rest1, rest2);

// rest1.numGuests ??= 10;
// rest2.numGuests ||= 10;
// console.log(rest1, rest2);

// // rest1.owner = rest1.owner && 'gpp ';
// // rest2.owner = rest2.owner && 'gpp ';
// rest1.owner &&= 'GPP';
// rest2.owner &&= 'GPP';
// console.log(rest1, rest2);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// 1.
// const players1 = game.players[0];
// const players2 = game.players[1];
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2.
// // const [gk, ...fieldPlayers] = game.players[0];
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3.
// // const allPlayers = [...game.players[0], ...game.players[1]];
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4.
// // const players1Final = players1.push('Thiago', 'Coutinho', 'Perisic');
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1);
// // 5.
// // const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log({ team1, draw, team2 });

// // 6.
// const printGoals = function (...name) {
//   for (let a = 0; a < name.length; a++) {
//     let goals = 0;
//     for (let i = 0; i < game.scored.length; i++) {
//       // if(name ===scored[i]){sum++};
//       name[a] === game.scored[i] && goals++;
//     }
//     console.log(`${name[a]}:goals ${goals}`);
//   }
// };
// printGoals('Lewandowski', 'Gnarby', 'Gnarby2');

// // 7.
// team1 < team2 && console.log('team1 is more likely to win');
// team1 > team2 && console.log('team2 is more likely to win');

// Coding Challenge #2
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
for (const [num, scoredPlayer] of game.scored.entries()) {
  console.log(`Goal ${num + 1}: ${scoredPlayer}`);
}

// 2.
const teamOdds = Object.values(game.odds);
console.log(teamOdds);
let sum = 0;
for (let i of teamOdds) {
  sum += i;
}
console.log(sum / teamOdds.length);

// 3.
for (const [teamNames, teamOdds] of Object.entries(game.odds)) {
  // console.log(teamNames, teamOdds);
  const teamString = teamNames === 'x' ? 'draw' : `game[teamNames]`;
  console.log(`Odd of ${teamString}: ${teamOdds}`);
}

//

for (let scoredPlayers of game.scored) {
  console.log(scoredPlayers);
}

// bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

//Tips Set
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto']);
const ordersSet2 = new Set('Pasta', 'Pizza', 'Pizza', 'Risotto');
console.log(ordersSet, ordersSet2);
console.log(new Set('ordersSet'));
console.log(new Set(['ordersSet']));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.cle ar();
console.log(ordersSet);
for (const order of ordersSet) {
  console.log(order);
}

const staff = ['Pasta', 'Pizza', 'Pizza', 'Risotto'];
const staffUnique = new Set([staff]);
const staffUnique2 = new Set(staff);
console.log(staffUnique, staffUnique2);
