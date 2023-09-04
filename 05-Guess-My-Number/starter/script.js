'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    displayMessage('no number');
  }
//规格和i；h
  //when player is wins
  else if (guess === secretNumber) {
    displayMessage('correct number');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //when player is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'higher number!' : 'lower number!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lose the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//click again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = '20';
  const guess = Number(document.querySelector('.guess').value);
});
