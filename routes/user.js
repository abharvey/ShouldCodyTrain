const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('user GET'));
router.post('/', (req, res) => res.send('user POST'));

module.exports = router;
