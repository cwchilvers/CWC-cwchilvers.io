const logRequest = require('../utils/console/logRequest')

const getIP = require('../utils/client/getIP');

module.exports = {
    async home(req, res) {
        logRequest.start(req);
        const title = 'Home';
        try {
            res.render('pages/home', { title });
            logRequest.success(req);
        } catch (err) {
            logRequest.error(req, err);
        }
    },

    async error_404(req, res) {
        logRequest.start(req);
        logRequest.error(req, '404: Not found');
    }
};
