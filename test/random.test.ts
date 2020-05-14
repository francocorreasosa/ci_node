import { generateRandomNumber, validateIdentificationNumber } from '../src';

describe('validateIdentificationNumber()', () => {
  it(`should generate a valid random number`, () => {
    new Array(100).fill(true).forEach(() => {
      expect(validateIdentificationNumber(generateRandomNumber())).toBe(true);
    });
  });
});
