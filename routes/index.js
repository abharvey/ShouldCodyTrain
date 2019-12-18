const router = require('express').Router();

const training = require('./training');
const user = require('./user');

router.use('/training', training);
router.use('/user', user);

module.exports = router;
