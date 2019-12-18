const express = require('express');
const router = express.Router();

const { createTrainingRoutine } = require('../api/training-api');

router.get('/', (req, res) => res.send('training route'));
router.post('/', createTrainingRoutine);

module.exports = router;
