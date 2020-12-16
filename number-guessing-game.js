function runGame() {
   
    let guessString ='';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;
 
    const randomNumber = Math.random() * 100 ;
    const randomIntegar =Math.floor(randomNumber);
    const target = randomIntegar + 1;
 
    do {
        guessString = prompt('I am thinking of one of these colors:\n\n blue,cyan,gold,green,magenta,orange,red,white,yellow\n\n What color am i thinking of?')
        guessNumber = +guessString;
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    } while (!correct);
 
    alert('You got it! The number was ' + target + '.\n\nIt took you ' + numTries + ' tries to guess correctly.')
 }
 
 function checkGuess(guessNumber, target) {
    let correct = false;
 
    if (isNaN(guessNumber)) {
        alert('You have not entered a number.\n\nPlease enter a number in the 1-100 range.');
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert('Please enter an integar in the 1-100 range.');
    } else if (guessNumber > target) {
        alert('Your number is too large!');
    } else if (guessNumber < target) {
        alert('Your number is too small!');
    } else {
        correct = true;
    }
    return correct;
 }