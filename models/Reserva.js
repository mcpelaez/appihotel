// models/Reserva.js
const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  cliente: { type: String, required: true },
  fechainicio: { type: Date, required: true },
  fechafin: { type: Date, required: true },
  fechareserva: { type: Date, required: true },
  total: { type: Number, required: true },
  estado: { type: String, enum: ['activo', 'inactivo'], required: true }
});

module.exports = mongoose.model('Reserva', reservaSchema);
