const express = require('express');
const cors=require('cors');
//const bodyParser= require('body-parser');
const puerto=3003;

const app = express();

//mildrewers
app.use(cors());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send('Probando ClinicaVeterinaria');
});


app.listen(puerto, () => {
	console.log(`Servidor Levantado en https://localhost:${puerto}`);
});
