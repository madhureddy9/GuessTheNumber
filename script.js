'use strict';
// Random Sceret Number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// display Messages
const displayMessage =function(message){ document.querySelector('.message').textContent = message;}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
// No input
  if (!guess) {
    displayMessage("No Number");

    // when guess is Correct
  } else if (guess === secretNumber) {
    displayMessage("Correct Number");
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'Green';

    if (score > highscore){
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is Too High
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('Too High');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'grey';
    } else {
      displayMessage('You Lost the Game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }

    // when guess is Too Low
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage ('Too Low');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'grey';
    } else {
      displayMessage('You Lost the Game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

// Reseting data
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').style.color = '#eee';
});

 