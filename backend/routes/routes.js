const express = require('express');
const router = express.Router();
const dataController = require('../controllers/sensorDataController');

router.get('/sensor_data', dataController.getAllData);

module.exports = router;