import { MapPin, Phone, Clock, Mail, Instagram, MessageCircle } from 'lucide-react';

// Defino el componente de contacto que muestra información, redes sociales y mapa
const Contact = () => {
  return (
    // Sección principal con espacio vertical y degradado de fondo
    <section className="py-20 bg-gradient-to-b from-[#F6EFE7] to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con título y subtítulo centrados */}
        <div className="text-center mb-16">
          {/* Título principal con estilos y degradado en el texto destacado */}
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-[#8C6D62] mb-6 leading-tight">
            Visítanos en{' '}
            <span className="block bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] bg-clip-text text-transparent">
              Nuestra tienda Física
            </span>
          </h2>
          {/* Breve descripción de la ubicación */}
          <p className="text-xl font-body text-[#B7AFA3] max-w-2xl mx-auto">
            Estamos ubicados en el corazón de Santiago, fácil acceso en metro
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna de información de contacto y redes sociales */}
          <div className="space-y-8">
            {/* Tarjeta de información de contacto con efecto vidrio */}
            <div className="bg-white/70 rounded-3xl p-8 shadow-lg border border-[#B7AFA3]/30 backdrop-blur-md transition-shadow hover:shadow-2xl">
              {/* Subtítulo de información de contacto */}
              <h3 className="text-2xl font-display font-bold text-[#8C6D62] mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6 font-body text-[#B7AFA3]">
                {/* Dirección física */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D8A7B1]/30 p-3 rounded-full shadow-md flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#D8A7B1]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8C6D62]">Dirección</h4>
                    <p>Av. Providencia 1800, Providencia</p>
                    <p>Santiago, Chile</p>
                  </div>
                </div>

                {/* Números de teléfono */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D8A7B1]/30 p-3 rounded-full shadow-md flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#D8A7B1]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8C6D62]">Teléfono</h4>
                    <p>+56 9 1234 5678</p>
                    <p>+56 2 2345 6789</p>
                  </div>
                </div>

                {/* Horarios de atención */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D8A7B1]/30 p-3 rounded-full shadow-md flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#D8A7B1]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8C6D62]">Horarios</h4>
                    <p>Lunes - Viernes: 9:00 - 20:00</p>
                    <p>Sábados: 9:00 - 18:00</p>
                    <p>Domingos: 10:00 - 16:00</p>
                  </div>
                </div>

                {/* Correos de contacto */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D8A7B1]/30 p-3 rounded-full shadow-md flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#D8A7B1]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8C6D62]">Email</h4>
                    <p>info@radiancesantiago.cl</p>
                    <p>reservas@radiancesantiago.cl</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta de redes sociales */}
            <div className="bg-white/70 rounded-3xl p-8 shadow-lg border border-[#B7AFA3]/30 backdrop-blur-md transition-shadow hover:shadow-2xl">
              {/* Subtítulo de redes sociales */}
              <h3 className="text-2xl font-display font-bold text-[#8C6D62] mb-6">
                Síguenos
              </h3>
              <div className="flex space-x-6">
                {/* Enlace a Instagram con efecto hover */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white p-4 rounded-2xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                {/* Enlace a mensajería con estilo personalizado */}
                <a
                  href="#"
                  className="bg-gradient-to-r from-[#A3B18A] to-[#8C6D62] text-white p-4 rounded-2xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 flex items-center justify-center"
                  aria-label="Message"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Tarjeta con mapa y detalles de acceso */}
          <div className="bg-white/70 rounded-3xl p-8 shadow-lg border border-[#B7AFA3]/30 backdrop-blur-md transition-shadow hover:shadow-2xl">
            {/* Subtítulo de cómo llegar */}
            <h3 className="text-2xl font-display font-bold text-[#8C6D62] mb-6">
              Cómo llegar
            </h3>

            {/* Contenedor responsivo para el iframe de Google Maps */}
            <div className="aspect-video rounded-2xl overflow-hidden border border-[#B7AFA3]/20 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3214218051553!2d-70.61595848479542!3d-33.43510928078056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c62c7e12ab19%3A0x91d8a56d49a8c241!2sAv.%20Providencia%201800%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1688497699294!5m2!1ses!2scl"
                allowFullScreen
                loading="lazy"
                title="Ubicación Radiance Santiago"
                className="w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Indicaciones adicionales de acceso */}
            <div className="mt-6 space-y-3 font-body text-[#B7AFA3]">
              {/* Punto de metro cercano */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#A3B18A]/30 rounded-full flex items-center justify-center shadow-inner">
                  <span className="text-[#A3B18A] font-bold text-sm select-none">M</span>
                </div>
                <span>Metro Manuel Montt (2 cuadras)</span>
              </div>
              {/* Información de estacionamiento */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#D8A7B1]/30 rounded-full flex items-center justify-center shadow-inner">
                  <span className="text-[#D8A7B1] font-bold text-sm select-none">P</span>
                </div>
                <span>Estacionamiento disponible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
