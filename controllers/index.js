const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./api');
const authRoutes = require('./auth');

router.use('/login', authRoutes);

router.use('/', htmlRoutes);

router.use('/api', apiRoutes);

module.exports = router;
