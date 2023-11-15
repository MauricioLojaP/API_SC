'use strict'

const express = require('express');
const Routes = require('./routes/routes');

const app = express();

app.use('/api', Routes);
// 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});