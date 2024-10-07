let randomNumber = Math.floor(Math.random() * 100) + 1; 
//gives us random number between 100 
const guesses = document.querySelector('.guesses');
//An element that will display the list of previous guesses. 
const lastResult = document.querySelector('.lastResult');
//An element that will display the result of the current guess (correct, wrong, or game over).

const lowOrHi = document.querySelector('.lowOrHi');
// An element that will display a message indicating whether the guess was too low or too high.
const guessSubmit = document.querySelector('.guessSubmit');
//The submit button used to submit guesses.
const guessField = document.querySelector('.guessField');
//The input field where the user types their guess.
let guessCount = 1;
let resetButton;
//A variable that will be used to store a reset button element when the game ends. This is initialized as undefined for now.

//This function handles the main logic for the game. It will be triggered when the user submits a guess.
function checkGuess() {
  const userGuess = Number(guessField.value);
  //guessField.value retrieves the value entered by the user (which is a string),guessField.value retrieves the value entered by the user (which is a string).
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  //the text content of the guesses element is set to "Previous guesses: ". 

  guesses.textContent = `${guesses.textContent} ${userGuess}`;
  //Then, the current guess (userGuess) is appended to this text, so the list of previous guesses is updated with each new guess.

  if (userGuess === randomNumber) {
    lastResult.textContent = `Congratulations! You got it right! Takes ${guessCount} Chances`;
    //The lastResult element's text is updated to show "Congratulations! You got it right!".
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = `!!!GAME OVER!!!`;
    //The lastResult element displays "!!!GAME OVER!!!".
    lowOrHi.textContent = '';
    //The lowOrHi element is cleared, as the game is now over.
    setGameOver();
    //The setGameOver() function is called to disable input and show the reset button.
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!' ;
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  //The input field (guessField.value) is cleared, so the user can type a new guess.
  guessField.focus();
  //nsures that the input field remains in focus, making it easier for the user to continue typing.
}

guessSubmit.addEventListener('click', checkGuess);
//An event listener is added to the submit button (guessSubmit). When the button is clicked, it triggers the checkGuess function.

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  //A new reset button is created (document.createElement('button')), and its text content is set to "Start new game".
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  //The reset button is added to the page using document.body.appendChild(resetButton).
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }
  //It loops through all paragraphs within .resultParas and clears their text content, removing any results from the previous game.

  resetButton.parentNode.removeChild(resetButton);
  //The reset button is removed from the page.
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
  //A new random number is generated (randomNumber = Math.floor(Math.random() * 100) + 1).
}