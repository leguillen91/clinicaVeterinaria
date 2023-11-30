// /proyecto/src/index.js (o app.js)

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index'); // Nueva línea

const app = express();
const port = 3002;

app.use(express.static(path.join(__dirname, 'src')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Usar las rutas definidas en index.js
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
