const Descuento = require('../models/descuento');

// Obtener todas las ejecuciones
exports.getEjecuciones = async (req, res) => {
  try {
    const ejecuciones = await Descuento.find();
    res.json(ejecuciones);
  } catch (error) {
    console.error("Error al obtener ejecuciones:", error); // Captura del error en la consola
    res.status(500).json({ message: 'Error al obtener ejecuciones', error });
  }
};

// Agregar ejecución
exports.addEjecucion = async (req, res) => {
  const { idapartamento, descripcion, precio, descuento, precioDescuento, fechaini, fechafin, estado } = req.body;
  try {
    const newEjecucion = new Descuento({
      idapartamento,
      descripcion,
      precio,
      descuento,
      precioDescuento,
      fechaini,
      fechafin,
      estado
    });
    await newEjecucion.save();
    res.status(201).json(newEjecucion);
  } catch (error) {
    console.error("Error al agregar ejecución:", error); // Captura del error en la consola
    res.status(500).json({ message: 'Error al agregar ejecución', error });
  }
};

// Actualizar ejecución
exports.updateEjecucion = async (req, res) => {
  const { id } = req.params; // Obtener el ID de los parámetros de la URL
  const { idapartamento, descripcion, precio, descuento, precioDescuento, fechaini, fechafin, estado } = req.body;

  try {
    const updatedEjecucion = await Descuento.findByIdAndUpdate(
      id,
      { idapartamento, descripcion, precio, descuento, precioDescuento, fechaini, fechafin, estado },
      { new: true } // Para devolver el documento actualizado
    );

    if (!updatedEjecucion) {
      return res.status(404).json({ message: 'Ejecución no encontrada' });
    }

    res.json(updatedEjecucion);
  } catch (error) {
    console.error("Error al actualizar ejecución:", error); // Captura del error en la consola
    res.status(500).json({ message: 'Error al actualizar ejecución', error });
  }
};

// Eliminar ejecución
exports.deleteEjecucion = async (req, res) => {
  const { id } = req.params; // Obtener el ID de los parámetros de la URL

  try {
    const deletedEjecucion = await Descuento.findByIdAndDelete(id);

    if (!deletedEjecucion) {
      return res.status(404).json({ message: 'Ejecución no encontrada' });
    }

    res.status(204).send(); // Responder con no contenido
  } catch (error) {
    console.error("Error al eliminar ejecución:", error); // Captura del error en la consola
    res.status(500).json({ message: 'Error al eliminar ejecución', error });
  }
};
