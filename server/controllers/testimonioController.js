import { Testimonio } from '../models/Testimonios.js';

const guardarTestimonio = async (req, res) => {
    // Validar

    const { nombre, email, mensaje } = req.body;

    const errores = [];

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'Name is empty' });
    }

    if (email.trim() === '') {
        errores.push({ mensaje: 'Email is empty' });
    }

    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'Message is empty' });
    }

    if (errores.length > 0) {
        // Consultar testimonios existentes
        const testimonios = await Testimonio.findAll();

        // Mostrar la vista con errores
        res.render('testimonios', {
            pagina: 'Testimonials',
            errores,
            nombre,
            email,
            mensaje,
            testimonios,
        });
    } else {
        // Almancenarlo en la DB
        try {
            await Testimonio.create({
                nombre,
                email,
                mensaje,
            });

            res.redirect('/testimonios');
        } catch (error) {
            console.log(error);
        }
    }
};

export { guardarTestimonio };
