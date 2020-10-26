const router = require('express').Router();
const indexRoutes = require('./routes/index');

router.use('/', indexRoutes);

module.exports = router;
