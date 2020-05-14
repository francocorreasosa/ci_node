import { cleanIdNumber } from '../src';

describe('cleanIdNumber()', () => {
  it('should remove any unnecessary characters - 8 char', () => {
    expect(cleanIdNumber('1.111.111-1')).toEqual('11111111');
  });

  it('should remove any unnecessary characters - 7 char', () => {
    expect(cleanIdNumber('111.111-1')).toEqual('1111111');
  });
});
