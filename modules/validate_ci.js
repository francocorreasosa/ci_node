var validation_digit = require("./validation_digit");
var clean_ci = require("./clean_ci");

module.exports = function validate_ci(ci){
  ci = clean_ci(ci);
  var dig = ci[ci.length - 1];
  ci = ci.replace(/[0-9]$/, '');
  return (dig == validation_digit(ci));
}