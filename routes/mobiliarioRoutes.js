// routes/mobiliarioRoutes.js
const express = require('express');
const router = express.Router();
const mobiliarioController = require('../controllers/mobiliarioController');

// Rutas para gestionar mobiliario
router.get('/', mobiliarioController.getMobiliarios);
router.post('/', mobiliarioController.addMobiliario);
router.put('/:id', mobiliarioController.updateMobiliario);
router.delete('/:id', mobiliarioController.deleteMobiliario);

module.exports = router;
