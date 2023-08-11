const fs = require('fs');

module.exports = async (filePath, data) => {
    try {
        await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error(`Error writing JSON file ${filePath}: ${error.message}`);
    }
}