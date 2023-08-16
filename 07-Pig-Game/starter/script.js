'use strict';

//选择各元素
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//声明变量
let scores, currentScore, activePlayer, playing;

//函数:初始设置
const initGame = function () {
  //设置当前用户；游戏状态
  activePlayer = 0;
  playing = true;
  //移除winner背景
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  //设置初始背景颜色
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  //隐藏img
  diceEl.classList.add('hidden');
  //分数归0
  scores = [0, 0];
  currentScore = 0;
  score0El.textContent = score1El.textContent = 0;
  current0El.textContent = current1El.textContent = 0;
};

//initGame();

//函数：切换用户
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Roll按钮点击事件
btnRoll.addEventListener('click', function () {
  //是否开始游戏
  if (playing) {
    //1.生成随机数
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2.显示色子数字
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.是否归零
    if (dice !== 1) {
      //否，添加到 current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //是，切换用户
      switchPlayer();
    }
  }
});

//Hold 按钮点击事件
btnHold.addEventListener('click', function () {
  //是否开始游戏
  if (playing) {
    //1.新增得分
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2.检查总分是否 >= 100
    if (scores[activePlayer] >= 20) {
      //是，胜出
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
      diceEl.classList.add('hidden');
    } else {
      //否，切换用户
      switchPlayer();
    }
  }
});

//new按钮点击事件
btnNew.addEventListener('click', initGame());
