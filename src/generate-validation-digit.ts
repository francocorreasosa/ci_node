/**
 * Given a valid uruguayan identification number,
 * generates it's validation/verification digit.
 * 
 * @example generateValidationDigit('1111111') => 1
 *
 * @param idNumber The first 6 or 7 digits of the identification number.
 */
export const generateValidationDigit: (
  idNumber: string | number
) => number = idNumber => {
  let ci = typeof idNumber === 'number' ? idNumber.toString() : idNumber;

  if (ci.length <= 6) {
    for (let i = ci.length; i < 7; i++) {
      ci = '0' + ci;
    }
  }

  return safeGenerateValidationDigit(ci);
};

const safeGenerateValidationDigit: (idNumber: string) => number = idNumber => {
  let ci = idNumber;
  let sum = 0;

  for (let i = 0; i < 7; i++) {
    sum += (parseInt('2987634'[i]) * parseInt(ci[i])) % 10;
  }

  if (sum % 10 === 0) {
    return 0;
  }

  return 10 - (sum % 10);
};
