'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 20 + 1);

// document.querySelector('.number').textContent = secretNumber;

const defNumber = document.querySelector('.number').textContent;

const defGuess = document.querySelector('.guess').value;

const defMessage = document.querySelector('.message').textContent;

const defScore = document.querySelector('.score').textContent;

const defHighScore = document.querySelector('.highscore').textContent;

const defBackground = getComputedStyle(
  document.querySelector('body')
).getPropertyValue('background-color');
console.log(defBackground);

const defNumWidth = getComputedStyle(
  document.querySelector('.number')
).getPropertyValue('width');
console.log(defNumWidth);

let initScore = document.querySelector('.score').textContent;

let initHighScore = document.querySelector('.highscore').textContent;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number specified';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🙌 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is high
  } else if (guess > secretNumber) {
    if (initScore > 1) {
      document.querySelector('.message').textContent = 'Try lower 📉';
      initScore--;
      document.querySelector('.score').textContent = initScore;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is low
  } else if (guess < secretNumber) {
    if (initScore > 1) {
      document.querySelector('.message').textContent = 'Try higher 📈';
      initScore--;
      document.querySelector('.score').textContent = initScore;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = defNumber;
  document.querySelector('.guess').value = defGuess;
  document.querySelector('.message').textContent = defMessage;
  document.querySelector('.score').textContent = defScore;
  document.querySelector('.highscore').textContent = defHighScore;
  document.querySelector('body').style.backgroundColor = defBackground;
  document.querySelector('.number').style.width = defNumWidth;
});
