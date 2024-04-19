'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = ;

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMesage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is  not a number
  if (!guess) {
    displayMesage('No Number');

    // when the player wins
  } else if (guess === secretNumber) {
    displayMesage('Correct Number');

    document.querySelector('body').style.backgroundColor = ' #60b347';

    document.querySelector('.number').style.width = ' 30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wronng
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMesage(guess > secretNumber ? 'too high ' : 'Too Law');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMesage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
    //when its too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'too high ';
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You Lost the Game ';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //   //when its too law and
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'too law ';
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You Lost the Game ';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing .....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = ' #222';

  document.querySelector('.number').style.width = ' 15rem';
});
