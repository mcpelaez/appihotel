const express = require('express');
const router = express.Router();
const descuentoController = require('../controllers/descuentoController'); // Asegúrate de que la ruta sea correcta

// Rutas para gestionar descuentos
router.get('/', descuentoController.getEjecuciones); // Verifica que getEjecuciones esté definido en el controlador
router.post('/', descuentoController.addEjecucion);
router.put('/:id', descuentoController.updateEjecucion);
router.delete('/:id', descuentoController.deleteEjecucion);

module.exports = router;
