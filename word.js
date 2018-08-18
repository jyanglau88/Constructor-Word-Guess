var Letter = require("./letter.js");
var avengers = ["Captain America", "Iron Man", "Spider Man", "Doctor Strange", "Hulk", "Vision", "Scarlet Witch"];

var Word = function () {
	this.word = avengers[Math.floor(Math.random() * avengers.length)];
	this.wordArray = [];
	this.hiddenWord = [];
	this.shownWord = [];
	this.attempt = this.word.split("").length - 2;

	this.converted = function () {
		this.wordArray = this.word.split("");
		for (var i = 0; i < this.wordArray.length; i++) {
			this.wordArray[i] = new Letter(this.wordArray[i]);

			if (this.wordArray[i].letter === " ") {
				this.hiddenWord.push(this.wordArray[i].letter);
			} else {
				this.hiddenWord.push(this.wordArray[i].hide());
			}
		}
		this.shownWord = this.hiddenWord.join(" ");
		return this.shownWord;
	};

	this.checkLetter = function (letter) {
		var match = false

		for (var i = 0; i < this.wordArray.length; i++) {
			if (this.wordArray[i].letter.toLowerCase() === letter) {
				match = true;
			}
		}

		if (match) {
			for (var j = 0; j < this.wordArray.length; j++) {

				if (this.wordArray[j].letter.toLowerCase() === letter) {
					this.hiddenWord[j] = this.wordArray[j].letter;
				}
			}

			this.shownWord = this.hiddenWord.join(" ");
			console.log("\nCorrect!\n");
		} else {
			this.attempt -= 1;
			console.log("\nIncorrect!\n");
			console.log("You have " + this.attempt + " guesses remaining.\n");
		}

		return this.shownWord;
	};
};

module.exports = Word;