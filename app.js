//imported & other variables
var currencyString = require('./modules/functionExport');
// var accountBalance = require('./modules/functionExport');
var http = require('http');
var portDecision = 3000;


//server set-up
http.createServer(function(req, res) {
  console.log(currencyString);
  res.writeHead(200);
  res.write("Account Balance: \n" + currencyString.currencyString);
  res.end();
}).listen(portDecision);

console.log("Listening on port " + portDecision);
