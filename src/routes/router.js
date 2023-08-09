const router = require('express').Router();
const views_ctrl = require('../controllers/views_ctrl');

router.get('/', views_ctrl);

module.exports = router;
