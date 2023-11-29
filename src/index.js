const express = require('express');
const mysql = require('mysql');
const path = require('path');
const cors=require('cors');
const bodyParser= require('body-parser');
const puerto=3002;
const Server = require('./Server');
const app = express();

const db = new Database({
	host: 'tu_host',
	user: 'tu_usuario',
	password: 'tu_contraseña',
	database: 'tu_base_de_datos'
  });
  


// Configura el motor de vistas Pug
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,  'views'));

// Ruta para renderizar la vista
app.get('/home', (req, res) => {
res.render('home');
});


app.get('/login', (req, res) => {
res.render('login');
});

app.get('/gestionarEmpleado', (req, res) => {
res.render('gestionarEmpleado');
});

app.get('/crearEmpleado', (req, res) => {
res.render('crearEmpleado');
});


app.get('/crearCliente', (req, res) => {
res.render('crearCliente');
});

app.get('/crearMascota', (req, res) => {
res.render('crearMascota');
});

app.get('/crearCita', (req, res) => {
res.render('crearCita');
});

app.get('/crearFactura', (req, res) => {
res.render('crearFactura');
});

app.get('/inventario', (req, res) => {
res.render('inventario');
});

app.get('/producto', (req, res) => {
res.render('producto');
});

app.get('/crearProducto', (req, res) => {
res.render('crearProducto');
});
a// API endpoint para crear un cliente
app.post('/api/crearCliente', (req, res) => {
	const {
	  dni,
	  primernombre,
	  segundonombre,
	  primerapellido,
	  segundoapellido,
	  edad,
	  fechanacimiento,
	  generoID,
	  ciudad,
	  colonia,
	  calle,
	  telefono
	} = req.body;
  
	// Ejemplo de cómo podrías usar tu clase Database para manejar la conexión y la consulta
	const sqlQuery = 'INSERT INTO clientes (dni, primernombre, segundonombre, primerapellido, segundoapellido, edad, fechanacimiento, generoID, ciudad, colonia, calle, telefono) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
	db.query(sqlQuery, [dni, primernombre, segundonombre, primerapellido, segundoapellido, edad, fechanacimiento, generoID, ciudad, colonia, calle, telefono], (err, result) => {
	  if (err) {
		console.error('Error al insertar cliente:', err);
		res.status(500).json({ error: 'Error interno del servidor' });
		return;
	  }
  
	  res.json({ id: result.insertId });
	});
  });
  
  // Middleware de Cors y body-parser
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.listen(puerto, () => {
	console.log(`Servidor Levantado en https://localhost:${puerto}`);
  });