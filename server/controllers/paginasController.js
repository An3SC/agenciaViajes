import { Viaje } from '../models/Viaje.js';
import { Testimonio } from '../models/Testimonios.js';

const paginaInicio = async (req, res) => {
    // Consultar 3 viajes del modelo viaje

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({ limit: 3 }));
    promiseDB.push(Testimonio.findAll({ limit: 3 }));

    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Home',
            clase: 'home',
            viajes: resultado[0],
            testimonios: resultado[1],
        });
    } catch (error) {
        console.log(error);
    }
};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'About us',
    });
};

const paginaViajes = async (req, res) => {
    // Consultar base de datos
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
        pagina: 'Next travels',
        viajes,
    });
};

const paginaTestimonios = async (req, res) => {
    try {
        const testimonios = await Testimonio.findAll();
        res.render('testimonios', {
            pagina: 'Testimonials',
            testimonios,
        });
    } catch (error) {
        console.log(error);
    }
};

const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    console.log(slug);

    try {
        const viaje = await Viaje.findOne({ where: { slug } });
        res.render('viaje', {
            pagina: 'Travel information',
            viaje,
        });
    } catch (error) {
        console.log(error);
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje,
};
