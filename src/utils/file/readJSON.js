const fs = require('fs');

module.exports = async (filePath) => {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading JSON file ${filePath}: ${error.message}`);
        return [];
    }
}