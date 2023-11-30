const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/ClienteController');
const clienteController = new ClienteController();

// Rutas para renderizar las vistas
router.get('/', (req, res) => {
  res.render('login');
});

router.get('/home', (req, res) => {
  res.render('home');
});

router.get('/gestionarEmpleado', (req, res) => {
  res.render('gestionarEmpleado');
});

router.get('/crearEmpleado', (req, res) => {
  res.render('crearEmpleado');
});

router.get('/crearCliente', (req, res) => {
  res.render('crearCliente');
});

router.get('/inventario', (req, res) => {
  res.render('inventario');
});

router.get('/producto', (req, res) => {
  res.render('producto');
});

router.get('/crearProducto', (req, res) => {
  res.render('crearProducto');
});

router.get('/crearCita', (req, res) => {
  res.render('crearCita');
});

router.get('/crearMascota', (req, res) => {
  res.render('crearMascota');
});

// Ruta para manejar el POST de crearCliente
router.post('/api/crearCliente', async (req, res) => {
  try {
    const clienteData = req.body;
    // Utiliza el controlador para crear el cliente y manejar la inserción en la base de datos
    await clienteController.crearCliente(clienteData);
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error interno del servidor');
  }
});

module.exports = router;
