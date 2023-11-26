const express = require('express');
const mysql = require('mysql');
const path = require('path');
const cors=require('cors');
const bodyParser= require('body-parser');
const puerto=3002;

const app = express();

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

//mildrewers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));




app.listen(puerto, () => {
	console.log(`Servidor Levantado en https://localhost:${puerto}`);
});

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'clinicaVeterinaria'
  });
  

  connection.connect((err) => {
	if (err) {
	  console.error('Error al conectar: ' + err.stack);
	  return;
	}
	console.log('Conexión exitosa con ID: ' + connection.threadId);
	// Aquí puedes realizar consultas, operaciones en la base de datos, etc.
  });
  
  connection.query('SELECT * FROM cliente', (error, results, fields) => {
	if (error) throw error;
	console.log('Los resultados de la consulta son: ', results);
  });
  