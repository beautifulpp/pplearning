const friends = ['xp','zdm','xx'];
const newLength = friends.push('pp');
console.log(friends);
console.log(newLength);

friends.unshift('zdm');
console.log(friends);

friends.pop();

const poped = friends.pop();
console.log(poped);
console.log(friends);

const shifted =friends.shift();
console.log(shifted);
console.log(friends);
console.log(friends.indexOf('pp'));

console.log(friends.includes('zdm'));

friends.push(27);
console.log(friends);
//friends.push('27');
console.log(friends);
console.log(friends.includes('27'));

if(friends.includes('zdm')){
    console.log('You have a friend called zdm');
}
