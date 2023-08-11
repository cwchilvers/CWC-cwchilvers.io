const router = require('express').Router();
const { home, error_404 } = require('../controllers/views_ctrl');
const audio_ctrl = require('../controllers/audio_ctrl');

router.route('/').get(home);
router.get('/api/audio/:filename', audio_ctrl.serveAudio);
router.route('*').get(error_404);

module.exports = router;
