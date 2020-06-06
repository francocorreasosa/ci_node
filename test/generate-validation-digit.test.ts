import { generateValidationDigit } from '../src';

describe('generateValidationDigit()', () => {
  describe('as string', () => {
    describe('7 digits', () => {
      it('should return the proper validation number for 1', () => {
        expect(generateValidationDigit('1111111')).toEqual(1);
      });

      it('should return the proper validation number for 2', () => {
        expect(generateValidationDigit('1234567')).toEqual(2);
      });

      it('should return the proper validation number for 3', () => {
        expect(generateValidationDigit('2345678')).toEqual(3);
      });

      it('should return the proper validation number for 4', () => {
        expect(generateValidationDigit('3456789')).toEqual(4);
      });

      it('should return the proper validation number for 5', () => {
        expect(generateValidationDigit('4567890')).toEqual(5);
      });

      it('should return the proper validation number for 6', () => {
        expect(generateValidationDigit('5678901')).toEqual(6);
      });

      it('should return the proper validation number for 7', () => {
        expect(generateValidationDigit('6789012')).toEqual(7);
      });

      it('should return the proper validation number for 8', () => {
        expect(generateValidationDigit('7890123')).toEqual(8);
      });

      it('should return the proper validation number for 9', () => {
        expect(generateValidationDigit('8901234')).toEqual(9);
      });

      it('should return the proper validation number for 0', () => {
        expect(generateValidationDigit('9012345')).toEqual(0);
      });
    });

    describe('6 or less digits', () => {
      it('should return the proper validation number for 1', () => {
        expect(generateValidationDigit('123456')).toEqual(1);
      });

      it('should return the proper validation number for 2', () => {
        expect(generateValidationDigit('890123')).toEqual(2);
      });

      it('should return the proper validation number for 3', () => {
        expect(generateValidationDigit('111111')).toEqual(3);
      });

      it('should return the proper validation number for 4', () => {
        expect(generateValidationDigit('234567')).toEqual(4);
      });

      it('should return the proper validation number for 5', () => {
        expect(generateValidationDigit('901234')).toEqual(5);
      });
      it('should return the proper validation number for 6', () => {
        expect(generateValidationDigit('678901')).toEqual(6);
      });

      it('should return the proper validation number for 7', () => {
        expect(generateValidationDigit('345678')).toEqual(7);
      });

      it('should return the proper validation number for 9', () => {
        expect(generateValidationDigit('789012')).toEqual(9);
      });

      it('should return the proper validation number for 0', () => {
        expect(generateValidationDigit('456789')).toEqual(0);
      });
    });
  });

  describe('as number', () => {
    describe('7 digits', () => {
      it('should return the proper validation number for 1', () => {
        expect(generateValidationDigit(1111111)).toEqual(1);
      });

      it('should return the proper validation number for 2', () => {
        expect(generateValidationDigit(1234567)).toEqual(2);
      });

      it('should return the proper validation number for 3', () => {
        expect(generateValidationDigit(2345678)).toEqual(3);
      });

      it('should return the proper validation number for 4', () => {
        expect(generateValidationDigit(3456789)).toEqual(4);
      });

      it('should return the proper validation number for 5', () => {
        expect(generateValidationDigit(4567890)).toEqual(5);
      });

      it('should return the proper validation number for 6', () => {
        expect(generateValidationDigit(5678901)).toEqual(6);
      });

      it('should return the proper validation number for 7', () => {
        expect(generateValidationDigit(6789012)).toEqual(7);
      });

      it('should return the proper validation number for 8', () => {
        expect(generateValidationDigit(7890123)).toEqual(8);
      });

      it('should return the proper validation number for 9', () => {
        expect(generateValidationDigit(8901234)).toEqual(9);
      });

      it('should return the proper validation number for 0', () => {
        expect(generateValidationDigit(9012345)).toEqual(0);
      });
    });

    describe('6 or less digits', () => {
      it('should return the proper validation number for 1', () => {
        expect(generateValidationDigit(123456)).toEqual(1);
      });

      it('should return the proper validation number for 2', () => {
        expect(generateValidationDigit(890123)).toEqual(2);
      });

      it('should return the proper validation number for 3', () => {
        expect(generateValidationDigit(111111)).toEqual(3);
      });

      it('should return the proper validation number for 4', () => {
        expect(generateValidationDigit(234567)).toEqual(4);
      });

      it('should return the proper validation number for 5', () => {
        expect(generateValidationDigit(901234)).toEqual(5);
      });
      it('should return the proper validation number for 6', () => {
        expect(generateValidationDigit(678901)).toEqual(6);
      });

      it('should return the proper validation number for 7', () => {
        expect(generateValidationDigit(345678)).toEqual(7);
      });

      it('should return the proper validation number for 9', () => {
        expect(generateValidationDigit(789012)).toEqual(9);
      });

      it('should return the proper validation number for 0', () => {
        expect(generateValidationDigit(456789)).toEqual(0);
      });
    });
  });
});
