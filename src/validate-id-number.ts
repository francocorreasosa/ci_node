import { cleanIdNumber } from './clean';
import { generateValidationDigit } from './generate-validation-digit';

/**
 * Given an uruguayan identification number, checks the number is valid or not
 * based on its length and validation digit.
 * @param idNumber Uruguayan Identification Number (Cédula de Identidad - DNIC)
 */
export const validateIdentificationNumber: (
  idNumber: string | number
) => boolean = idNumber => {
  const ci = typeof idNumber === 'number' ? idNumber.toString() : idNumber;

  if (ci.length < 7 || ci.length > 8) {
      return false;
  }

  const cleanNumber = cleanIdNumber(ci);
  const possibleValidationDigit = parseInt(
    cleanNumber[cleanNumber.length - 1],
    10
  );

  const validableNumber = cleanNumber.replace(/[0-9]$/, '');
  const actualValidationDigit = generateValidationDigit(validableNumber);

  return possibleValidationDigit === actualValidationDigit;
};
