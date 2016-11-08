//Variable importer
var randomNumber = require('./randomNumber');
var usdValue = require('./usdConvert');

//exports
module.exports.currencyString = usdValue(randomNumber);
