import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

/* ----------------- Animación de aparición ----------------- */
// Defino variantes para que las tarjetas aparezcan con desvanecimiento y leve desplazamiento
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeInOut' } // suavizo la entrada con easeInOut
  },
};

// Componente que muestra los testimonios de clientas satisfechas
const Testimonials = () => {
  // Array con datos de cada testimonio: nombre, edad, tratamiento, calificación, texto e imagen
  const testimonials = [
    {
      id: 1,
      name: 'María José Contreras',
      age: 32,
      treatment: 'Limpieza Facial + Anti-edad',
      rating: 5,
      text: 'Increíble experiencia! El personal es súper profesional y los resultados son notables desde la primera sesión. Mi piel nunca había estado mejor.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2'
    },
    {
      id: 2,
      name: 'Camila Rodríguez',
      age: 28,
      treatment: 'Masaje + Radiofrecuencia',
      rating: 5,
      text: 'El ambiente es súper relajante y los tratamientos son de primera calidad. Definitivamente volvería y lo recomiendo 100%.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2'
    },
    {
      id: 3,
      name: 'Francisca Silva',
      age: 35,
      treatment: 'Depilación Láser',
      rating: 5,
      text: 'Después de años probando diferentes métodos, finalmente encontré el lugar perfecto. Los resultados son increíbles y duraderos.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2'
    }
  ];

  return (
    // Sección principal con padding y degradado de fondo
    <section className="py-20 bg-gradient-to-b from-white to-[#F6EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con título y descripción */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-[#8C6D62] mb-6 leading-tight">
            Lo que dicen{' '}
            <span className="block bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] bg-clip-text text-transparent">
              Nuestras Clientas
            </span>
          </h2>
          <p className="text-xl font-body text-[#B7AFA3] max-w-2xl mx-auto">
            Miles de clientas satisfechas respaldan la calidad de nuestros servicios
          </p>
        </div>

        {/* Contenedor de tarjetas con animación escalonada */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2, // retardo entre apariciones
              }
            }
          }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white/70 rounded-3xl p-8 shadow-lg backdrop-blur-md border border-[#B7AFA3]/30 relative hover:shadow-2xl transition-shadow duration-500"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }} // leve aumento al pasar el cursor
            >
              {/* Ícono de comillas en esquina */}
              <div className="absolute top-6 right-6 text-[#D8A7B1]/20">
                <Quote className="w-10 h-10" />
              </div>

              {/* Datos de la clienta: foto, nombre, edad y tratamiento */}
              <div className="flex items-center mb-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#D8A7B1]/40 shadow-xl"
                />
                <div className="ml-6">
                  <h3 className="font-display text-xl font-bold text-[#8C6D62]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm font-body text-[#B7AFA3]">{testimonial.age} años</p>
                  <p className="text-sm font-semibold text-[#D8A7B1]">{testimonial.treatment}</p>
                </div>
              </div>

              {/* Estrellas de calificación */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#A3B18A] fill-current" />
                ))}
              </div>

              {/* Texto del testimonio en cursiva */}
              <p className="font-body text-[#7E7C75] italic leading-relaxed tracking-wide">
                “{testimonial.text}”
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
