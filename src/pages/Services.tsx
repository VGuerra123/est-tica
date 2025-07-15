import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, ArrowRight, Search } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

/* ─────────  Animación base  ───────── */
const ease: [number, number, number, number] = [0.42, 0, 0.58, 1];

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: .6, ease } },
};

const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: .08, delayChildren: .15 } },
};

/* ─────────  Datos  ───────── */
const categories = [
  { id: 'todos',      name: 'Todos los Servicios' },
  { id: 'facial',     name: 'Tratamientos Faciales' },
  { id: 'corporal',   name: 'Tratamientos Corporales' },
  { id: 'depilacion', name: 'Depilación' },
  { id: 'masajes',    name: 'Masajes' },
  { id: 'estetica',   name: 'Estética Avanzada' },
] as const;

const services = [
  {
    id: 1,
    title: 'Limpieza Facial Profunda',
    description:
      'Tratamiento completo para purificar y revitalizar tu piel con extracción de comedones y aplicación de mascarilla.',
    duration: '60 min',
    price: 'CLP 45,000',
    rating: 4.9,
    category: 'facial',
    popular: true,
    image: 'https://images.pexels.com/photos/5069587/pexels-photo-5069587.jpeg',
    benefits: ['Piel más limpia', 'Poros visiblemente reducidos', 'Hidratación profunda'],
  },
  {
    id: 2,
    title: 'Tratamiento Anti-Edad',
    description:
      'Terapia avanzada para reducir líneas de expresión y mejorar la firmeza de la piel.',
    duration: '90 min',
    price: 'CLP 65,000',
    rating: 4.8,
    category: 'facial',
    image:
      'https://images.pexels.com/photos/3985358/pexels-photo-3985358.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
    benefits: ['Reduce arrugas', 'Mejora elasticidad', 'Efecto lifting'],
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
    description:
      'Renovación celular para una piel suave y luminosa mediante exfoliación controlada.',
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
    description:
      'Tecnología de última generación para resultados duraderos en diferentes zonas del cuerpo.',
    duration: '30-120 min',
    price: 'Desde CLP 25,000',
    rating: 4.8,
    category: 'depilacion',
    image:
      'https://dermacross.cl/cdn/shop/articles/Depilacion_laser_Que_tipo_de_cuidados_debiese_considerar_553x.jpg?v=1649967313',
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
  {
    id: 7,
    title: 'Drenaje Linfático',
    description:
      'Masaje especializado para eliminar toxinas y reducir la retención de líquidos.',
    duration: '60 min',
    price: 'CLP 48,000',
    rating: 4.6,
    category: 'corporal',
    image:
      'https://www.nus.agency/wp-content/uploads/2024/03/imagen-destacada-drenaje-linfatico-manual-1024x614.jpg',
    benefits: ['Reduce hinchazón', 'Mejora circulación', 'Desintoxica'],
  },
  {
    id: 8,
    title: 'Peeling Químico',
    description:
      'Renovación profunda de la piel con ácidos especializados según tipo de piel.',
    duration: '45 min',
    price: 'CLP 55,000',
    rating: 4.7,
    category: 'facial',
    image: 'https://www.centralklinic.cl/wp-content/uploads/2024/07/peeling-quimico-portada.jpg',
    benefits: ['Renueva la piel', 'Unifica el tono', 'Reduce manchas'],
  },
];

/* ─────────  Componente  ───────── */
const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = services.filter(s => {
    const matchCat = selectedCategory === 'todos' || s.category === selectedCategory;
    const matchTxt = (s.title + s.description).toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchTxt;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#412F34] via-[#61474D] to-[#F6EFE7]">
      {/* ───── Hero ───── */}
      <header
        className="relative isolate flex items-center justify-center min-h-[40vh] overflow-hidden
                   rounded-b-[3rem] md:rounded-b-[4rem] shadow-xl"
      >
        <img
          src="https://images.pexels.com/photos/7011304/pexels-photo-7011304.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-105 md:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-transparent" />

        {/* Texto */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative text-center px-4"
        >
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Nuestros <br className="hidden sm:block" /> Servicios
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-body text-white/85 max-w-2xl mx-auto">
            Descubre la gama completa de tratamientos de belleza y bienestar
          </p>
        </motion.div>
      </header>

      {/* Barra de búsqueda superpuesta */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-20 -mt-10 mb-12 px-4"
      >
        <div className="max-w-lg mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B7AFA3] w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar servicios..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full rounded-full pl-12 pr-5 py-3 text-sm font-body
                         bg-white/30 backdrop-blur-lg
                         border border-white/30
                         shadow-[6px_6px_16px_rgba(0,0,0,0.08),-6px_-6px_16px_rgba(255,255,255,0.6)]
                         focus:outline-none focus:ring-2 focus:ring-[#D8A7B1]/70 placeholder:text-white/60"
            />
          </div>
        </div>

        {/* Categorías */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-body font-medium transition
                ${
                  selectedCategory === cat.id
                    ? 'text-white bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] shadow-lg shadow-[#8C6D62]/40'
                    : 'bg-white/40 backdrop-blur-md border border-white/20 text-[#F2E5DF] hover:bg-white/60'
                }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* ───── Grid ───── */}
      <motion.section
        className="max-w-7xl mx-auto grid grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {filtered.map(s => (
          <motion.article
            key={s.id}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-3xl
                       bg-white/40 backdrop-blur-md border border-white/20
                       shadow-[6px_6px_20px_rgba(0,0,0,0.08),-6px_-6px_20px_rgba(255,255,255,0.6)]
                       hover:shadow-[12px_12px_24px_rgba(0,0,0,0.12),-12px_-12px_24px_rgba(255,255,255,0.5)]
                       transition-all duration-500"
          >
            {/* Imagen */}
            <div className="relative">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-36 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {s.popular && (
                <span className="absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-xs font-semibold
                                 bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white shadow">
                  Popular
                </span>
              )}
              <span className="absolute top-3 right-3 bg-white/80 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1 text-[#8C6D62] text-xs font-bold shadow">
                <Star className="w-3 h-3 fill-current" />
                {s.rating}
              </span>
            </div>

            {/* Contenido */}
            <div className="p-4 sm:p-6 space-y-4">
              <h3 className="font-display text-base sm:text-lg font-extrabold text-[#F4F0ED] leading-tight tracking-tight">
                {s.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#E6D7D1]/90 line-clamp-2">
                {s.description}
              </p>
              <ul className="font-body text-[#F4F0ED]/90 space-y-1 text-xs sm:text-sm">
                {s.benefits.slice(0, 2).map(b => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="block w-1.5 h-1.5 rounded-full bg-[#D8A7B1]" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between font-display text-sm sm:text-base font-semibold">
                <span className="flex items-center gap-1 text-[#C1D1AA]">
                  <Clock className="w-4 h-4" /> {s.duration}
                </span>
                <span className="text-[#F4F0ED]">{s.price}</span>
              </div>
              <Link
                to="/booking"
                className="w-full flex items-center justify-center gap-2
                           rounded-2xl py-2 text-xs sm:text-sm font-display font-bold text-white
                           bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62]
                           hover:brightness-110 hover:shadow-lg transition"
              >
                Reservar Ahora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.section>

      {/* Empty */}
      {filtered.length === 0 && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center py-20 text-[#E4D7CF]"
        >
          <p className="text-lg font-display">No se encontraron servicios</p>
          <p className="text-sm font-body opacity-75 mt-1">
            Prueba con otros términos de búsqueda o filtros
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Services;
