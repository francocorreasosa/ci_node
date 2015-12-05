# Validador de c&eacute;dulas de identidad

Puedes instalarlo con NPM haciendo:

```html
[sudo] npm install ci_node
```

Funciones:
```javascript
var ci_node = require("ci_node");
var ci = "1.111.111";
ci_node.validation_digit(ci); // => '1' - Obtiene el dígito verificador de una cédula dada

ci = "1.111.111-1"
ci_node.validate_ci(ci);      // => true/false - Valida una cédula completa

ci_node.random_ci();          // => 35330781 - Obtiene un número de cédula válido al azar
```

Basado en la libreria original por @picandocodigo