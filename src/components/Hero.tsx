import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Star, Award, Users } from "lucide-react";
import { motion, type Transition } from "framer-motion";
import Chatbot from "./Chatbot";

/* ----------------- Animaciones ----------------- */
// Defino la animación para que los elementos aparezcan desvanecidos y suban
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

// Especifico la transición tipo "spring" con parámetros personalizados
const spring: Transition = {
  type: "spring",
  stiffness: 80,     // rigidez del resorte
  damping: 14,       // amortiguación del movimiento
  mass: 0.8,         // masa para ajustar velocidad
};

/* ----------------- Componente ----------------- */
// Estructura principal del Hero con fondo, título, botones y métricas animadas
const Hero: React.FC = () => {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-gray-950 text-white">
      {/* ---------- Fondo animado ---------- */}
      <div className="absolute inset-0 -z-10">
        {/* Imagen de fondo con ajuste de brillo */}
        <img
          src="https://images.pexels.com/photos/32853134/pexels-photo-32853134.jpeg"
          alt="Fondo relax spa"
          className="h-full w-full object-cover brightness-50 lg:brightness-60"
          loading="lazy"
        />
        {/* Capa de degradado para suavizar colores y mezclar con el fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E21]/40 via-[#8C6D62]/40 to-[#D8A7B1]/30 mix-blend-soft-light" />
        {/* Efecto de pulsación con gradientes radiales */}
        <div className="pointer-events-none absolute inset-0 animate-[pulse_8s_ease-in-out_infinite] bg-[radial-gradient(circle_at_20%_20%,rgba(216,167,177,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(163,177,138,0.12),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
      </div>

      {/* ---------- Contenido centrado ---------- */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        {/* Título principal con animación y degradado en texto */}
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...spring, delay: 0 }}
          className="mb-6 bg-gradient-to-r from-[#F6EFE7] via-[#D8A7B1] to-[#A3B18A] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          Redescubre tu <span className="whitespace-nowrap">Belleza Natural</span>
        </motion.h1>

        {/* Subtítulo con animación ligera */}
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...spring, delay: 0.15 }}
          className="mx-auto mb-12 max-w-xl text-lg opacity-90"
        >
          Estética premium en Santiago con protocolos personalizados y
          tecnología de última generación.
        </motion.p>

        {/* Botones de acción con animación de aparición */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...spring, delay: 0.3 }}
          className="mb-20 flex flex-wrap justify-center gap-6"
        >
          {/* Botón para reservar cita */}
          <Link
            to="/booking"
            className="flex items-center gap-2 rounded-3xl bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] px-9 py-3 text-lg font-semibold shadow-lg shadow-black/30 backdrop-blur-md transition hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D8A7B1]/50"
          >
            <Calendar className="h-6 w-6" />
            Reservar
          </Link>
          {/* Botón para ver servicios */}
          <Link
            to="/services"
            className="rounded-3xl border border-white/30 bg-white/10 px-9 py-3 text-lg font-semibold backdrop-blur-sm transition hover:bg-white/20 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
          >
            Servicios
          </Link>
        </motion.div>

        {/* ---------- Sección de métricas ---------- */}
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { icon: <Star className="h-9 w-9 text-[#EAB308]" />, value: "4.9" },
            { icon: <Users className="h-9 w-9 text-[#F472B6]" />, value: "2 500+" },
            { icon: <Award className="h-9 w-9 text-[#A3E635]" />, value: "8" },
            { icon: <Calendar className="h-9 w-9 text-[#F472B6]" />, value: "15 años" },
          ].map(({ icon, value }, i) => (
            // Cada métrica aparece con animación y efecto 3D al hover
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              whileHover={{ rotateX: 8, rotateY: -8 }}
              transition={{ ...spring, delay: 0.45 + i * 0.1 }}
              className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-black/40 backdrop-blur-md"
            >
              <div className="mb-1 flex justify-center">{icon}</div>
              <div className="text-center text-3xl font-bold">{value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chatbot flotante para interacción directa */}
      <Chatbot />
    </section>
  );
};

export default Hero;
