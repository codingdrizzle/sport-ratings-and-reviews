import 'dotenv/config'

import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error('JWT secret is not defined.');
}

const genToken = (data: object) =>
  jwt.sign({ data }, secret, { expiresIn: 7200 });

const verifyToken = (token: string) => {
  return jwt.verify(token, secret, (error: any, results: any) => {
    if (error) return { code: 401, message: error.message };
    return results._id;
  });
};

const accessToken = (tokenheader: string | any) => {
  if (typeof tokenheader === 'undefined')
    return { code: 401, msg: 'Unauthorised. You must provide access token' };
  const bearer = tokenheader.split(' ');
  return verifyToken(bearer[1]);
};

export { accessToken, genToken, verifyToken };
