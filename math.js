
// let inputElement = document.getElementById("inputElement");
// let signInTextElement = document.getElementById("signInText");
// function signIn() {
//   let inputValue = inputElement.value;
//   let verifyText = "Hi " + inputValue + ", verifying your account...";
//   signInTextElement.textContent = verifyText;
// }

// difference b/w (==) Loose equality vs (===) Strict equality
// -->loose equal = Loose equality compares two values for equality but doesn’t compare types of values.

// -->Strict equal=Strict equality compares two values for equality including types of values.

  //math functions():-
//random numbers:- math.random():- It will be print the random number in between of 0 to 1.
// randomnumber=math.random()*100:- It will be print random number's in between of 1 to 100.
//randomnumber= math.ceil():- It will be print a exact number without points.
//randomnumber=math.ceil(math.random()*100):-It will print only exact random number 

let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber)
function checkGuess() {
  let guessedNumber = parseInt(userInput.value);
  if (guessedNumber > randomNumber) {
    gameResult.textContent = "Too High! Try Again.";
    gameResult.style.backgroundColor = "#1e217c";
  }
  else if (guessedNumber < randomNumber) {
    gameResult.textContent = "Too Low! Try Again.";
    gameResult.style.backgroundColor = "#1e217c";
  }
  else if (guessedNumber === randomNumber) {
    gameResult.textContent = "Congratulations! You got it right.";
    gameResult.style.backgroundColor = "green";
  }
  else {
    gameResult.textContent = "Please provide a valid input.";
    gameResult.style.backgroundColor = "#1e217c";
  }
}

