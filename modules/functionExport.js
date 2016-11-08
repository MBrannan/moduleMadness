//Variable importer
var randomNumber = require('./randomNumber');
var usdValue = require('./usdConvert');

function randomUsd() {
  var xd = randomNumber(100, 1000000);
  return usdValue(xd);

}
//exports
module.exports = randomUsd;
