const express = require('express');
const router = express.Router();
const dataController = require('../controllers/sensorDataController');

// router.get('/sensor_data', dataController.getAllData);
router.post('/insert_data', dataController.insert_data);
router.get('/get_data', dataController.get_data);

module.exports = router;