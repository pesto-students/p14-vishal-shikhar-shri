function playGuessingGame(numToGuess, totalGuesses = 10) {
  let isFirstGuess = true;
  let guesses = 0;
  let msg = "Enter a number between 1 and 100";
  let stringEntered;
  let numberEntered;

  while (guesses < totalGuesses) {
    stringEntered = prompt(msg);
    numberEntered = parseInt(stringEntered);

    if (stringEntered === null) break;
    else if (isNaN(numberEntered)) {
      msg = "Please enter a number.";
    } else if (numberEntered < numToGuess) {
      msg = `${numberEntered} is too small. Guess a larger number.`;
      guesses++;
    } else if (numberEntered > numToGuess) {
      msg = `${numberEntered} is too large. Guess a smaller number.`;
      guesses++;
    } else if (numberEntered === numToGuess) {
      guesses++;
      return guesses;
    }
  }

  return 0;
}

// playGuessingGame(7, 3);
