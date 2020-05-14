/**
 * Remove any unnecessary characters from the input.
 * @param idNumber 
 */
export const cleanIdNumber: (idNumber: string) => string = idNumber =>
  idNumber.replace(/\D/g, '');
