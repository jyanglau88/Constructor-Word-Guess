var inquirer = require("inquirer");
var Word = require("./word.js");
var word = "";

function startGame() {
	console.log("\nGuess the Avenger!\n");
	word = new Word();
	console.log(word.converted());
	game();
}

function game() {
	inquirer.prompt([
		{
			type: "input",
			name: "userGuess",
			message: "Guess a letter!"
		}
	]).then(function (guess) {
		var guess = guess.userGuess;
		console.log(word.checkLetter(guess));
		checkWin(word.hiddenWord, word.attempt);
	});
}

function question() {
	inquirer.prompt([
		{
			type: "confirm",
			name: "quit",
			message: "End Game?"
		}
	]).then(function (answer) {
		if (answer.quit === true) {
			process.exit();
		} else {
			return startGame();
		}
	});
}

function checkWin(word, attempt) {
	var hiddenLetter = word.includes("_");

	if (attempt === 0) {
		console.log("\nBetter luck next time.\n");
		return question();
	} else if (!hiddenLetter) {
		console.log("\nYou Win!\n");
		return question();
	} else {
		game();
	}
}

startGame();