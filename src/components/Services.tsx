import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, Star, ArrowRight } from 'lucide-react';

// Componente que muestra la lista de tratamientos disponibles
const Services = () => {
  // Array con datos de cada servicio: título, descripción, duración, precio, calificación y más
  const services = [
    {
      id: 1,
      title: 'Limpieza Facial Profunda',
      description: 'Tratamiento completo para purificar y revitalizar tu piel',
      duration: '60 min',
      price: 'CLP 45,000',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/5069587/pexels-photo-5069587.jpeg',
      popular: true
    },
    {
      id: 2,
      title: 'Tratamiento Anti-Edad',
      description: 'Terapia avanzada para reducir líneas de expresión',
      duration: '90 min',
      price: 'CLP 65,000',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3985358/pexels-photo-3985358.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2'
    },
    {
      id: 3,
      title: 'Masaje Relajante',
      description: 'Desconéctate del estrés con nuestro masaje terapéutico de cuerpo completo.',
      duration: '75 min',
      price: 'CLP 55,000',
      rating: 4.9,
      category: 'masajes',
      image: 'https://images.pexels.com/photos/6187656/pexels-photo-6187656.jpeg',
      benefits: ['Reduce tensión muscular', 'Mejora circulación', 'Relajación total'],
    },
    {
      id: 4,
      title: 'Microdermoabrasión',
      description: 'Renovación celular para una piel suave y luminosa mediante exfoliación controlada.',
      duration: '45 min',
      price: 'CLP 50,000',
      rating: 4.7,
      category: 'facial',
      image: 'https://www.konmison.com/wp-content/uploads/2023/05/diamond-dermabrasion.png',
      benefits: ['Piel más suave', 'Textura mejorada', 'Brillo natural'],
    },
    {
      id: 5,
      title: 'Depilación Láser',
      description: 'Tecnología de última generación para resultados duraderos en diferentes zonas del cuerpo.',
      duration: '30-120 min',
      price: 'Desde CLP 25,000',
      rating: 4.8,
      category: 'depilacion',
      image: 'https://dermacross.cl/cdn/shop/articles/Depilacion_laser_Que_tipo_de_cuidados_debiese_considerar_553x.jpg?v=1649967313',
      benefits: ['Resultados duraderos', 'Piel suave', 'Sin irritación'],
    },
    {
      id: 6,
      title: 'Radiofrecuencia',
      description: 'Tratamiento no invasivo para reafirmar la piel y reducir la flacidez.',
      duration: '60 min',
      price: 'CLP 70,000',
      rating: 4.9,
      category: 'estetica',
      image: 'https://www.mujerde10.com/wp-content/uploads/2025/02/radiofrecuencia-que-es.jpg',
      benefits: ['Reafirma la piel', 'Reduce flacidez', 'Estimula colágeno'],
    },
  ];

  return (
    // Sección principal con padding vertical y degradado de fondo
    <section className="py-20 bg-gradient-to-b from-white to-[#F6EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con título y subtítulo */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#8C6D62] mb-6">
            Nuestros
            <span className="block bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] bg-clip-text text-transparent">
              Tratamientos
            </span>
          </h2>
          <p className="text-xl text-[#B7AFA3] max-w-2xl mx-auto">
            Descubre una experiencia de belleza única con nuestros tratamientos personalizados
          </p>
        </div>

        {/* Grid de servicios con cards individuales */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {services.map((service) => (
            // Card de cada servicio con imagen, título y botón de reserva
            <div
              key={service.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#B7AFA3]/20 hover:border-[#D8A7B1]/40 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                {/* Imagen del servicio con hover zoom */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-32 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Etiqueta "Popular" para servicios destacados */}
                {service.popular && (
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    Popular
                  </div>
                )}
                {/* Calificación con icono y valor */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#A3B18A] fill-current" />
                    <span className="text-xs sm:text-sm font-semibold text-[#8C6D62]">{service.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-6">
                {/* Título y descripción breve */}
                <h3 className="text-sm sm:text-xl font-bold text-[#8C6D62] mb-1 sm:mb-2 leading-tight">{service.title}</h3>
                <p className="text-xs sm:text-base text-[#B7AFA3] mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">{service.description}</p>
                
                {/* Duración y precio alineados */}
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <div className="flex items-center space-x-1 sm:space-x-2 text-[#A3B18A]">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">{service.duration}</span>
                  </div>
                  <div className="text-sm sm:text-lg font-bold text-[#8C6D62]">{service.price}</div>
                </div>

                {/* Botón de reserva con icono y animación de flecha */}
                <Link
                  to="/booking"
                  className="w-full bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white py-2 sm:py-3 rounded-2xl font-semibold flex items-center justify-center space-x-1 sm:space-x-2 hover:shadow-xl transition-all duration-300 text-xs sm:text-base"
                >
                  <span>Reservar Ahora</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enlace para ver todos los servicios */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-[#D8A7B1] hover:text-[#8C6D62] font-semibold text-lg transition-colors duration-300"
          >
            <span>Ver todos los servicios</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
