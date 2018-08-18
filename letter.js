var Letter = function (letter) {
	this.letter = letter;
	this.hide = function () {
		letter = "_";
		return letter;
	};
};

module.exports = Letter;