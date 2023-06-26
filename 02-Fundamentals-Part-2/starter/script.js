// const friends = ['xp', 'zdm', 'xx'];
// const newLength = friends.push('pp');
// console.log(friends);
// console.log(newLength);

// friends.unshift('zdm');
// console.log(friends);

// friends.pop();

// const poped = friends.pop();
// console.log(poped);
// console.log(friends);
//NOTE
// const Jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven']
// };
// // console.log(Jonas);
// // console.log(Jonas.lastName);
// // console.log(Jonas['lastName']);

// // const nameKey = 'Name';
// // console.log(Jonas['last' + nameKey]);

// // const interestedIn = prompt('What do you want to know about Jonas? Choose between fristName, lastName, age, job, and friends');
// // console.log(Jonas[interestedIn]);
// // if(Jonas[interestedIn]){
// //     console.log(Jonas[interestedIn]);
// // }else{
// //     console.log('Wrong request!');
// // }

// // Jonas.location = 'Portugal';
// // Jonas['twitter'] = '@Jonasschmedtman';
// // console.log(Jonas.friends[0]);
// // console.log(Jonas['friends']);

// // console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends,and his best friend is called ${Jonas.friends[0]}`)
//NOTE
// const Jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven'],
//     hasDriversLicense: false,
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job},and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//     }
// };

// // console.log(Jonas.calcAge(1990));
// // console.log(Jonas['calcAge'](1992));

// // console.log(Jonas.calcAge());

// console.log(Jonas.getSummary());
// console.log(Jonas);

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// GOOD LUCK 😀
// */

// const Mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// const John = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         return this.mass / (this.height * this.height);
//     }
// }

// // console.log(Mark.calcBMI());
// // console.log(Mark.bmi);

// console.log(`${Mark.calcBMI() > John.calcBMI() ? Mark.fullName : John.fullName}'s BMI(${Mark.calcBMI() > John.calcBMI() ? Mark.calcBMI() : John.calcBMI()}) is higher than ${Mark.calcBMI() < John.calcBMI() ? Mark.fullName : John.fullName}'s ${Mark.calcBMI() < John.calcBMI() ? Mark.calcBMI() : John.calcBMI()}!`);

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for(let rep = 1; rep <=10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1990,
//     'teacher',
//     ['Michael','Peter','Steven'],
//     true
// ];

// const types = [];

// for(let i = 0; i<jonasArray.length; i++){
//     if(typeof(jonasArray[i]) === 'number'){break};
//     console.log(jonasArray[i],typeof(jonasArray[i]));
//     // types[i] = typeof(jonasArray[i]);
//      types.push(typeof(jonasArray[i]));
// };
// console.log(types);

// const years = [1990,2009,2016,2021];
// const ages = [];
// for(let i = 0;i <years.length;i++){
//     ages.push(2023-years[i]);
// };
// console.log(ages);

// for(let i = jonasArray.length-1; i>=0;i--){
//     console.log(i,jonasArray[i]);
// }

// for(let exercise = 1;exercise <4;exercise++){
//     console.log(`————————Starting exercise ${exercise}`);
//     for(let rep = 1;rep<6;rep++){
//         console.log(`Exercise ${exercise}:Lifting weight repetition ${rep}`);
//     }
// }

// let rep =1;
// while(rep<=10){
//     console.log(`Lifting weight repetition ${rep}`);
//     rep++;
// }

//

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
//   console.log(tips,totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // let sum=0;
    // sum = sum+arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
