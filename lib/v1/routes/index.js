const router = require('express').Router();
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.home);

module.exports = router;
