const mongoose = require('mongoose');

const descuentoSchema = new mongoose.Schema({
  idapartamento: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  descuento: { type: Number, required: true },
  precioDescuento: { type: Number, required: true },
  fechaini: { type: Date, required: true },
  fechafin: { type: Date, required: true },
  estado: { type: String, enum: ['activo', 'inactivo'], required: true }
});

module.exports = mongoose.model('Descuento', descuentoSchema);
