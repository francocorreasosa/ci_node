<h2 align="center">ciuy</h2>
<p align="center">Handy module to generate and validate uruguayan identification numbers</p>

## Usage

### Validate an user-provided ID number

```js
import { validateIdentificationNumber } from 'ciuy';

const valid = '11111111';
validateIdentificationNumber(valid);
// => true

const invalid = '11111112';
validateIdentificationNumber(invalid);
// => false
```

### Generate a random ID number (for testing)

```js
import { generateRandomNumber } from 'ciuy';

generateRandomNumber();
// => "72289541"

generateRandomNumber();
// => "88547325"
```

### Complete the validation digit given an ID number

```js
import { generateValidationDigit } from 'ciuy';

generateValidationDigit(1111111);
// => 1
```

## TODO
- [ ]  Deno support 
- [ ]  Publish docs somewhere (maybe not, module is tiny)