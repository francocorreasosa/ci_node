import { validateIdentificationNumber } from '../src';

describe('validateIdentificationNumber()', () => {
  describe('with pure number string', () => {
    describe('based on length', () => {
      it('should tell a 6 digit number is invalid', () => {
        expect(validateIdentificationNumber('111111')).toBe(false);
      });
      it('should tell a 9 digit number is invalid', () => {
        expect(validateIdentificationNumber('111111111')).toBe(false);
      });
    });

    describe('based on validation digit', () => {
      it('should tell a number with an invalid validation digit is invalid - 8 char', () => {
        expect(validateIdentificationNumber('11111112')).toBe(false);
      });

      it('should tell a number with an valid validation digit is valid - 8 char', () => {
        expect(validateIdentificationNumber('11111111')).toBe(true);
      });

      it('should tell a number with an invalid validation digit is invalid - 7 char', () => {
        expect(validateIdentificationNumber('1234567')).toBe(false);
      });

      it('should tell a number with an valid validation digit is valid - 7 char', () => {
        expect(validateIdentificationNumber('1234561')).toBe(true);
      });
    });
  });
});
