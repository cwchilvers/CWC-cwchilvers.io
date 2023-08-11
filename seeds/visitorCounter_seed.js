const consoleLog = require('console');
const path = require('path');
const writeJSON = require('../file/writeJSON');

const TOTAL_VISITORS_FILE = path.join(__dirname, '../../../data/total_visitors.json');
const TODAYS_VISITORS_FILE = path.join(__dirname, '../../../data/todays_visitors.json');

const initialData = [];

module.exports = async () => {
    try {
        await writeJSON(TOTAL_VISITORS_FILE, initialData);
        await writeJSON(TODAYS_VISITORS_FILE, initialData);
        consoleLog.success('Visitor counter seed complete');
    } catch (error) {
        consoleLog.error('Visitor counter seed error:', error);
    }
};