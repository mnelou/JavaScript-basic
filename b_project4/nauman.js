const randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector('#submit')
const userInput=document.querySelector('#guessField');
const guessslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame=true;
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value)
    validateGuess(guess);
  });
};

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  }else if(guess<1){
    alert('please enter a number more than 1')
  }
  else if(guess>100){
    alert('please enter a number less than 100')
  }else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game over.Random number was ${randomNumber}`);
      endGame();
    }else {
      displayGuess(guess)
      checkGuess(guess)

    }
  }
}
function checkGuess(guess){
if(guess===randomNumber){
  displayMessage(`you guessed it right`)
  endGame()

}else if(quess<randomNumber){
  displayMessage(`Number is too low `)
}else if(quess>randomNumber){
  displayMessage(`Number is too high `)
}
}
function displayMessage(Message){

}
function displayGuess(Guess){
userInput.value=''
guessSlot.innerHTML+=
}
function newGame(Guess){

}
function newGame(Guess){

}