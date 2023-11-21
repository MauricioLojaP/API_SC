'use strict'

const express = require('express');
const Routes = require('./routes/routes');
var bodyparser = require('body-parser');

const app = express();
app.use(express.json())
// app.use(bodyparser.urlencoded({extended:true}));
// app.use(bodyparser.json({limit: '50mb',extended: true}));

// app.use((req,res,next)=>{
//   res.header('Access-Control-Allow-Origin','*'); 
//   res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
//   res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
//   res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
//   next();
// });

app.use('/api', Routes);
// 
// 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});