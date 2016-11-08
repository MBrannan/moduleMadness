//Utility functions
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

//exporter

module.exports = randomNumber;
