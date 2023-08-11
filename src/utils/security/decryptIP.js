const consoleLog = require('../misc/consoleLog');
const argon2 = require('argon2');
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = async (encryptedIP) => {
    try {
        const decryptedBuffer = await argon2.verify(encryptedIP, { secret: SECRET_KEY });
        return decryptedBuffer.toString();
    } catch (error) {
        console.error(`Failed to decrypt IP: ${error.message}`);
        return null;
    }
}