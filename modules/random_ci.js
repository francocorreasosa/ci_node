var validation_digit = require("./validation_digit");

module.exports = function random_ci(){
  var ci = Math.floor(Math.random() * 10000000).toString();
  ci = ci.substring(0,7) + validation_digit(ci);
  return ci;
}