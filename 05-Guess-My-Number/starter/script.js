'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number!';
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';
// document.querySelector('.guess').value = 23;
// // console.log(document.querySelector('.guess').value);
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.message').textContent = 'correct number';
var score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'higher number!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'lower number!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
