const consoleLog = require('./consoleLog');
const path = require('path');
const readJSON = require('../file/readJSON');
const writeJSON = require('../file/writeJSON');
const encryptIP = require('../security/encryptIP');
const decryptIP = require('../security/decryptIP');

const TOTAL_VISITORS_FILE = path.join(__dirname, '../../../data/total_visitors.json');
const TODAYS_VISITORS_FILE = path.join(__dirname, '../../../data/todays_visitors.json');

const isLoopbackAddress = (ip) => {
    return ip === '127.0.0.1' || ip === '::1';
};

module.exports = async (req, res) => {
    try {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

        if (!isLoopbackAddress(ip)) {
            const encryptedCurrentIP = await encryptIP(ip);

            let totalVisitors = await readJSON(TOTAL_VISITORS_FILE);
            let todaysVisitors = await readJSON(TODAYS_VISITORS_FILE);
        
            const existingVisitorTotal = totalVisitors.find(async (v) => {
                const decryptedIP = await decryptIP(v.ip);
                return decryptedIP === encryptedCurrentIP;
            });
        
            if (!existingVisitorTotal) {
                totalVisitors.push({ ip: encryptedCurrentIP, date: new Date() });
                await writeJSON(TOTAL_VISITORS_FILE, totalVisitors);
            }

            consoleLog.info(`New visitor from ${ip}`);
        } 

        const today = new Date().toDateString();
        const todaysVisitorsCount = todaysVisitors.filter(v => v.date.toDateString() === today).length;

        return res.json({ total_visitors: totalVisitors.length, todays_visitors: todaysVisitorsCount });
    } catch (error) {
        consoleLog.error('Visitor counter failed:', error);
        res.status(500).json({ error: 'Visitor counter failed' });
    }
};