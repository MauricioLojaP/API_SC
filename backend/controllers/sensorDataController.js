const Data = require('../models/sensorDataModel');

const get_data = async function(req, res){
  Data.getAllData((err, results) => {
          if (err) {
            res.status(500).json({ error: err.message });
          } else {
            res.status(200).json({ data: results });
          }
        });
}

const insert_data = async function(req, res){
  var data = req.body;
  console.log(data)
  Data.insertData(data,(err,results) => {
    if (err) {
      res.status(500).json({ message: "Error", error: err.message });
    } else {
      res.status(200).json({ message: "Ok", success: "Datos insertados con éxito" });
    }
  });
  // res.status(500).json({ message: data});

}

module.exports = {
  insert_data,
  get_data
};