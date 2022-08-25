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


const arr = JSON.parse('[{"planCd":"PP","subplanCd":"Premier Plus","annualLimit":20000,"netCatIP":"Prestige","netCatOP":"Prestige","basicIPCop":0,"basicOPCop":0,"basicOPDed":50,"alahlicoins":0,"dentalLimit":20000,"dentOPCop":0,"maternityLimit":20000,"matIPCop":0,"opticalLimit":20000,"OptOPCop":0,"nationality":"Qatari","areaOfcover":"WORLDWIDE"},{"planCd":"A","subplanCd":"Advantage","annualLimit":20000,"netCatIP":"Privilege","netCatOP":"Privilege","basicIPCop":0,"basicOPCop":0,"basicOPDed":50,"alahlicoins":0,"dentalLimit":20000,"dentOPCop":0,"maternityLimit":20000,"matIPCop":0,"opticalLimit":20000,"OptOPCop":0,"nationality":"Qatari","areaOfcover":"STATE OF QATAR & HOME COUNTRY EXCLUDING USA, CANADA, EUROPE, CHINA, SINGAPORE & JAPAN"},{"planCd":"CL","subplanCd":"Classic Limited","annualLimit":20000,"netCatIP":"Optimum","netCatOP":"Optimum","basicIPCop":0,"basicOPCop":0,"basicOPDed":25,"alahlicoins":0,"dentalLimit":20000,"dentOPCop":0,"maternityLimit":20000,"matIPCop":0,"opticalLimit":20000,"OptOPCop":0,"nationality":"Qatari","areaOfcover":"STATE OF QATAR ONLY"}]');
let madhu ={
  planCd:[],
  subplanCd:[]
}
for (let i = 0; i<arr.length;i++){
  madhu.planCd.push(arr[i].planCd);
  madhu.subplanCd.push(arr[i].subplanCd);
}
console.log(madhu);

 