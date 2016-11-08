var number = 0

//functions
number = randomNumber(100, 1000000);

//Utility functions
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

//exporter

module.exports = number;
