var finished = false;
var guess_input;
var guess_input_lower_case;
var guess_input_index;
var guesses = 0;
var color = ["black", "blue", "chocolate", "cyan", "fuchsia", "gold", "gray",
          "green", "lime", "magenta", "orange", "pink", "purple", "red", "yellow"];

function rungame() {
  var random_number = Math.random() * (color.length);
  target_index = Math.floor(random_number);
  console.log("The answer is: " + color[target_index]);

  while (!finished){
    guess_input = prompt("I am thinking of one of these colors: \n\n" + color.join(", ") +
      "\n\nWhat color am I thinking of?");
    guess_input_lower_case = guess_input.toLowerCase();
    guess_input_index = color.indexOf(guess_input_lower_case);
    guesses ++;
    finished = check_guess();
  }
}

function check_guess(){
  if (color.indexOf(guess_input_lower_case)<0){
    alert("Sorry, I don't recognize your color.\n\n" + "Please try again.");
    return false;
  }
  else if (guess_input_index>target_index) {
    alert("Sorry, your guess is not correct!\n\n" + "Hint: your color is alphabetically higher than mine.\n\n" + "Please try again.");
    return false;
  }
  else if (guess_input_index<target_index) {
    alert("Sorry, your guess is not correct!\n\n" + "Hint: your color is alphabetically lower than mine.\n\n" + "Please try again.");
    return false;
  }
  else {
    alert("Congratulations! You have guessed the color!\n\n" + "It took you " + guesses + " guesses to finish the game!\n\n"
          + "You can see the color in the background")
    myBody=document.getElementsByTagName("body")[0];
    myBody.style.background=color[target_index];
    return true;
  }
}