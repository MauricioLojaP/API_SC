const Data = require('../models/sensorDataModel');

const dataController = {
  getAllData: (req, res) => {
    Data.getAllData((err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(200).json({ data: results });
      }
    });
  },
};

module.exports = dataController;