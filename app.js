const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importa el paquete cors

const mobiliarioRoutes = require('./routes/mobiliarioRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const hospedajeRoutes = require('./routes/hospedajeRoutes'); // Importa las rutas de hospedaje
const descuentoRoutes = require('./routes/descuentoRoutes');


const app = express();

// Middleware
app.use(express.json()); // Para parsear el cuerpo de las solicitudes JSON
app.use(express.static('src')); // Cambia 'public' por la carpeta donde están tus archivos estáticos
app.use(cors()); // Habilita CORS para todas las rutas

// Conectar a MongoDB Atlas
mongoose.connect('mongodb+srv://firulo:Firulais123@cluster0.iuqdh.mongodb.net/mobiliariodb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((error) => console.error('Error al conectar a MongoDB', error));

// Usar las rutas de mobiliario
app.use('/api/mobiliarios', mobiliarioRoutes);
app.use('/api/reservas', reservaRoutes); // Usar las rutas de reservas
app.use('/api/hospedajes', hospedajeRoutes); // Usar las rutas de hospedaje
app.use('/api/descuentos', descuentoRoutes); // Usar las rutas de descuentos

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
