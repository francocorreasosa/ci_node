

module.exports = function validation_digit(ci){
  var a = 0;
  var i = 0;
  if(ci.length <= 6){
    for(i = ci.length; i < 7; i++){
      ci = '0' + ci;
    }
  }
  for(i = 0; i < 7; i++){
    a += (parseInt("2987634"[i]) * parseInt(ci[i])) % 10;
  }
  if(a%10 === 0){
    return 0;
  }else{
    return 10 - a % 10;
  }
}