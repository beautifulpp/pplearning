'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number!';
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';
// document.querySelector('.guess').value = 23;
// // console.log(document.querySelector('.guess').value);
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.message').textContent = 'correct number';
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  }

  //when player is wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number!';
    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }

  //when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'higher number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lose the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'lower number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lose the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click',function(){
   score = 20;
   secretNumber = Math.trunc(Math.random()*20)+1;

  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').textContent = '?';
  document .querySelector('.guess').value = ' ';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'start guessing...';
  // document.querySelector('.score').textContent = '20';
  const guess = Number(document.querySelector('.guess').value);
  
})
