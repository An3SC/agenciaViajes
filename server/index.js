import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

const app = express();

// Conectar la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch((error) => console.log(error));

// Habilitar PUG
const __dirname = path.resolve(path.dirname(''));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'server/views'));

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';

    return next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta pública
app.use(express.static('public'));

// Agregar router
app.use('/', router);

// Puerto y host para la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

app.listen(port, host, () => {
    console.log(`Server running on port: ${port}`);
});
