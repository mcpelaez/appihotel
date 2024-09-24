// controllers/mobiliarioController.js
const Mobiliario = require('../models/Mobiliario');

// Obtener todos los mobiliarios
exports.getMobiliarios = async (req, res) => {
  try {
    const mobiliarios = await Mobiliario.find();
    res.json(mobiliarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener mobiliario', error });
  }
};

// Agregar mobiliario
exports.addMobiliario = async (req, res) => {
  console.log(req.body);
  const { nombre, identInmueble, estado, observacion } = req.body;
  try {
    const newMobiliario = new Mobiliario({
      nombre,
      identInmueble,
      estado,
      observacion
    });
    await newMobiliario.save();
    res.status(201).json(newMobiliario);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar mobiliario', error });
  }
};

// Editar mobiliario
exports.updateMobiliario = async (req, res) => {
  const { id } = req.params;
  const { nombre, identInmueble, estado, observacion } = req.body;
  try {
    const updatedMobiliario = await Mobiliario.findByIdAndUpdate(
      id,
      { nombre, identInmueble, estado, observacion },
      { new: true }
    );
    res.json(updatedMobiliario);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar mobiliario', error });
  }
};

// Eliminar mobiliario
exports.deleteMobiliario = async (req, res) => {
  const { id } = req.params;
  try {
    await Mobiliario.findByIdAndDelete(id);
    res.json({ message: 'Mobiliario eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar mobiliario', error });
  }
};
