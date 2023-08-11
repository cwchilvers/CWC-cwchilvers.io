const consoleLog = require('../utils/misc/consoleLog');
const getIP = require('../utils/misc/getIP');
const visitorCounter = require('../utils/misc/visitorCounter');

module.exports = {
        async home(req, res) {
        const title = 'Home';
        try {
            consoleLog.info_request(req, await getIP(req));
            
            //console.log(`Rendering ${title} page...`);
            //const { total_visitors, todays_visitors } = await visitorCounter(req, res);

            //console.log(`Todays visitors: ${todays_visitors}`);
            //console.log(`Total visitors: ${total_visitors}`);

            res.render('pages/home', { title });

            consoleLog.success_request(req, await getIP(req));
        } catch (err) {
            consoleLog.error_request(req, await getIP(req), err);
        }
    }
};
