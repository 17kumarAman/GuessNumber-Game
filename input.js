const prompt = require("prompt-sync")();

// #1 To take input as number
function inputNumber(Number) {
  return parseInt(prompt(Number));
}


// #2 To set secretNumber
function secretNumber(value) {
  return Math.floor(Math.random() * (value - 1) + 1);
}

// #3 To define SmartGuess
function smartGuess(range) {
  return Math.floor(Math.log2(range) + 2);
}


//  #4 Main function
function guessGame(guess, secretNum, smart) {
  let count = 0;
  console.log(`if You want to guess smartly then guess in ${smart} chances`);
  while (secretNum != guess) {
    count += 1;
    guess = inputNumber("Enter the number: ");
    if (guess == secretNum && count <= smart) {
      console.log("You guess smartly");
    } else if (guess == secretNum && count > smart) {
      console.log("You guess right but not smartly");
    } else if (guess > secretNum) {
      console.log(`Number is smaller than  ${guess}`);
    } else console.log(`Number is greater than  ${guess}`);
    if (count == smart + 5 && secretNum != guess) {
      console.log("You Loose the Game");
      break;
    }
  }
}


//  #5 To Intregate the function of guessGame and final step
function checkGuess() {
  let guess = inputNumber("Enter the number: ");
  let secretNum = secretNumber(guess);
  let smart = smartGuess(guess);
  guessGame(guess, secretNum, smart);
}

checkGuess();
