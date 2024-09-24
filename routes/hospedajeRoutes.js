// routes/hospedajeRoutes.js
const express = require('express');
const router = express.Router();
const hospedajeController = require('../controllers/hospedajeController'); // Asegúrate de que la ruta sea correcta

// Rutas para gestionar hospedaje
router.get('/', hospedajeController.getEjecuciones); // Verifica que getEjecuciones esté definido en el controlador
router.post('/', hospedajeController.addEjecucion); 
router.put('/:id', hospedajeController.updateEjecucion);
router.delete('/:id', hospedajeController.deleteEjecucion);

module.exports = router;
