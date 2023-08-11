const consoleLog = require('../misc/consoleLog');
const argon2 = require('argon2');
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = async (ip) => {
    try {
        const encryptedBuffer = await argon2.hash(ip, { secret: SECRET_KEY });
        return encryptedBuffer.toString('hex');
    } catch (error) {
        console.error(`Failed to encrypt IP ${ip}: ${error.message}`);
        return null;
    }
}