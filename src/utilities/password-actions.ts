import bcrypt from 'bcrypt'

export const hashPassword = (plainText: string) => {
  return bcrypt.hash(plainText, 10);
};

export const comparePassword = (plainText: string, hash: string) => {
  return bcrypt.compare(plainText, hash);
};
