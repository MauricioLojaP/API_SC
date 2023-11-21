
const db = require('./connection');

const Data = {
  getAllData: (callback) => {
    db.query('SELECT * FROM sensor_values', callback);
  },
  insertData: (sensorData,callback) => {
    db.query('INSERT INTO sensor_values SET ?', sensorData, callback);
  }
};

module.exports = Data;