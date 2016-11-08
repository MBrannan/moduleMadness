//variables
var localeOpts = {
  style: 'currency',
  currency: 'USD',
};

//functions
function usdConverter(number) {
  return number.toLocaleString('en-US', localeOpts);
}

//exporter

module.exports = usdConverter;
