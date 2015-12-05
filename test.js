var ci_node = require("./index");
var ci = "1111111";

console.log(ci_node.validation_digit(ci)); // => '1' - Obtiene el dígito verificador de una cédula dada 
 
ci = "1.111.111-1"
console.log(ci_node.validate_ci(ci));      // => true/false - Valida una cédula completa 
console.log(ci_node.random_ci());          // => 35330781 - Obtiene un número de cédula válido al azar 