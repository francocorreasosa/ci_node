import { generateValidationDigit } from './generate-validation-digit';

/**
 * Generates a random, valid  uruguayan identification number.
 */
export const generateRandomNumber: () => string = () => {
  const base = Math.floor(Math.random() * 10_000_000 + 1_000_000).toString();
  return base.substring(0, 7) + generateValidationDigit(base);
};
