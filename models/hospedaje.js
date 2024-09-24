// models/Hospedaje.js
const mongoose = require('mongoose');

const hospedajeSchema = new mongoose.Schema({
  ideejecucion: { type: String, required: true },
  cliente: { type: String, required: true },
  idReserva: { type: String, required: true },
  Finicio: { type: Date, required: true },
  FFin: { type: Date, required: true },
  Fechaini: { type: Date, required: true },
  Fechafin: { type: Date, required: true },
  estado: { type: String, enum: ['activo', 'inactivo'], required: true }
});

module.exports = mongoose.model('Hospedaje', hospedajeSchema);
