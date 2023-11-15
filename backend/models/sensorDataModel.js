
const db = require('./connection');

const Data = {
  getAllData: (callback) => {
    db.query('SELECT * FROM sensor_values', callback);
  },
  insertDataSensor: (sensorData,callback) => {
    db.query('INSERT INTO nombre_de_la_tabla SET ?', sensorData, callback);
  },
  // 
};

module.exports = Data;