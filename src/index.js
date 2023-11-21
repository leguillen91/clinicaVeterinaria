const express = require('express');
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

