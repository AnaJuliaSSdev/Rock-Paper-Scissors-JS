
//reset score
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}; 

updateScoreElements();

//function that takes the player and the computer move and determinatetes the result of the game
//then, set score in localStorage, update the score and finally display the result on the html paragraph 
function playGame(playerMove) {

  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else if (result === 'Tie.') {
    score.ties++;
  }

  //LocalStorage is used to store the game's score in the browser's cache;
  //For this, the "score" object is converted into a string, and then stored 
  //in localStorage;
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElements();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `  You
<img src="images/${playerMove}-emoji.png" alt="Rock" class="move-icon">
<img src="images/${computerMove}-emoji.png" alt="Scissors" class="move-icon">
Computer`;
}


//transforming the html paragraph into JS and then putting the score into paragraph element
function updateScoreElements() {

  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

//picking the computer move with a random number generator
function pickComputerMove() {

  randomNumber = (Math.random());

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;

}
