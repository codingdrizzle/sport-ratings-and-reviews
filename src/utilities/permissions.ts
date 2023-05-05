import 'dotenv/config'

import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET;

if (!secret) {
    throw new Error('JWT secret is not defined.');
}

const generateToken = (data: object) => jwt.sign({ ...data }, secret, { expiresIn: 7200 });

const verifyToken = (token: string) => {
    return jwt.verify(token, secret, (error: any, results: any) => {
        if (error) return { code: 401, message: error.message };
        return results.id;
    });
}

const getUserIdFromToken = (tokenheader: string) => {
    const bearer = tokenheader.split(' ')[1];
    return verifyToken(bearer);
};

export { getUserIdFromToken, generateToken, verifyToken };
