'use script';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// reset the game by again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});

//click events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    displayMessage('No Number');
  }
  //when player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number !';
    displayMessage('Correct Number !');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // setting highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =

      //   guess > secretNumber ? 'Too high !' : 'Too low';
      // score--;
      displayMessage(guess > secretNumber ? 'Too high !' : 'Too low');
      document.querySelector('.score').textContent = score;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // //  When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //   when guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
