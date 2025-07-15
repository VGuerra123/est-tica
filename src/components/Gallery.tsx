import React from 'react';
import { Play, Heart, Instagram } from 'lucide-react';

// Defino el componente Gallery para mostrar una galería de imágenes (y videos)
const Gallery = () => {
  // Configuro el array con datos de cada elemento de la galería
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      url: 'https://images.pexels.com/photos/28783928/pexels-photo-28783928.jpeg',
      title: 'Tratamiento Facial',
      likes: 145
    },
    {
      id: 2,
      type: 'image',
      url: 'https://images.pexels.com/photos/6076147/pexels-photo-6076147.jpeg',
      title: 'Ambiente Relajante',
      likes: 198
    },
    {
      id: 3,
      type: 'image',
      url: 'https://images.pexels.com/photos/14256897/pexels-photo-14256897.jpeg',
      title: 'Proceso de Limpieza',
      likes: 267
    },
    {
      id: 4,
      type: 'image',
      url: 'https://images.pexels.com/photos/7317086/pexels-photo-7317086.jpeg',
      title: 'Productos Premium',
      likes: 112
    },
    {
      id: 5,
      type: 'image',
      url: 'https://images.pexels.com/photos/6560304/pexels-photo-6560304.jpeg',
      title: 'Masaje Terapéutico',
      likes: 234
    },
    {
      id: 6,
      type: 'image',
      url: 'https://images.pexels.com/photos/15378344/pexels-photo-15378344.jpeg',
      title: 'Resultados Increíbles',
      likes: 156
    }
  ];

  return (
    // Sección principal con padding vertical y degradado de fondo
    <section className="py-20 bg-gradient-to-b from-[#F6EFE7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con título y descripción */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#8C6D62] mb-6">
            Galería de
            <span className="block bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] bg-clip-text text-transparent">
              Resultados
            </span>
          </h2>
          <p className="text-xl text-[#B7AFA3] max-w-2xl mx-auto">
            Descubre las transformaciones increíbles de nuestros clientes
          </p>
        </div>

        {/* Grid responsivo para mostrar los elementos de la galería */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item) => (
            // Contenedor de cada tarjeta con efectos hover y borde suave
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl aspect-square bg-gradient-to-br from-[#F6EFE7] to-[#D8A7B1]/20 hover:shadow-2xl transition-all duration-500 border border-[#B7AFA3]/20"
            >
              {/* Imagen de fondo con transformación al hacer hover */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay con degradado para mejorar contraste al mostrar texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#8C6D62]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Información de título y contador de likes */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-sm sm:text-lg font-bold mb-2">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[#D8A7B1]" />
                    <span className="text-xs sm:text-sm">{item.likes}</span>
                  </div>
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#D8A7B1]" />
                </div>
              </div>
              
              {/* Botón de reproducción para elementos tipo video */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enlace para seguir en Instagram con efecto hover */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            <span>Síguenos en Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
