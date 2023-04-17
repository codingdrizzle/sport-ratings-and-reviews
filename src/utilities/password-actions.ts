const bcypt = require('bcrypt');

export const hashPassword = (plainText:string) => {
    return bcypt.hash(plainText, 10)
}

export const comparePassword = (plainText: string, hash: string) => {
    return bcypt.compare(plainText, hash)
}