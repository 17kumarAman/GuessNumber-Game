const prompt = require("prompt-sync")();

// #1 To set Range
function range() {
  let range = parseInt(prompt("Enter the range :"));
  return range;
}


// #2 To set Target 
function tar() {
  let target = Math.floor(Math.random() * range());
  if (target === 0) {
    // console.log(target);
    target = Math.floor(Math.random() * range())
    return target;
  } else //console.log(target);
  return target;
}


// #3 To define SmartGuess
function smartGuess(range) {
  let i = 1,
    localRange = 2;
  while (localRange < range) {
    i += 1;
    localRange = 2 ** i;
  }
  // i+=1;
  return i + 2;
}
//  #4 Main function 
function match(guess) {
  const target = tar();
//   console.log(target);
  let count = 1;
  const smart = smartGuess(target);
  console.log(`if You want to guess smartly the guess in ${smart} chances`);
  while (target != guess ) {
    count += 1
    guess = parseInt(prompt("enter the number"))
    if(guess ==  target && count <smart){
        console.log('You guess smartly');
    }else if(guess ==  target && count>smart){
        console.log('You guess right but not smartly');
    }
    else if (guess >target){
        console.log('number is smaller');
    }else console.log('number is greater')
  }
}

match();
 // guess = parseInt(prompt("enter the number"));
