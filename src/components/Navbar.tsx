import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Calendar, Sparkles, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

// Defino los enlaces de navegación con ruta, etiqueta e ícono asociado
const navItems = [
  { path: '/', label: 'Inicio', icon: Sparkles },
  { path: '/services', label: 'Servicios', icon: Sparkles },
  { path: '/booking', label: 'Reservar', icon: Calendar },
  { path: '/shop', label: 'Tienda', icon: ShoppingBag },
  { path: '/profile', label: 'Perfil', icon: User },
];

// Componente de barra de navegación principal
const Navbar = () => {
  // Estado para el menú móvil abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Obtengo la ruta actual para resaltar el ítem activo
  const location = useLocation();

  // Extraigo los artículos del carrito desde el contexto
  const { cartItems } = useCart();

  // Función para verificar si la ruta está activa
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        bg-[rgba(55,43,47,0.85)] backdrop-blur-lg
        border-b border-[rgba(130,101,109,0.3)]
        shadow-[0_4px_10px_rgba(25,20,22,0.4)]
      "
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo con enlace a inicio, fondo translúcido y efecto hover */}
          <Link
            to="/"
            className="
              flex items-center space-x-4
              bg-white/30 backdrop-blur-[8px] rounded-2xl
              p-2 shadow-[0_0_12px_rgba(255,255,255,0.15)]
              transition-transform duration-300 hover:scale-105
              select-none
            "
            aria-label="Inicio - Radiance"
          >
            {/* Imagen del logo */}
            <img src={logo} alt="Radiance Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
            {/* Texto del nombre con degradado y sombra al pasar el mouse */}
            <span
              className="
                hidden md:inline text-2xl font-extrabold tracking-tight
                bg-gradient-to-r from-[#E9D7DA] to-[#B89AA0]
                bg-clip-text text-transparent
                transition-shadow duration-400
                hover:drop-shadow-[0_0_10px_rgba(200,160,165,0.85)]
              "
            >
              Radiance
            </span>
          </Link>

          {/* Menú de navegación para pantallas medianas y grandes */}
          <div className="hidden md:flex items-center space-x-10 text-[#D9C9CC]">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`
                  flex items-center space-x-3 px-5 py-2 rounded-xl font-semibold text-sm transition
                  duration-300
                  ${
                    isActive(path)
                      ? 'bg-[rgba(200,160,165,0.35)] text-[#B89AA0] shadow-[inset_0_0_8px_rgba(200,160,165,0.5)]'
                      : 'hover:text-[#EBD3D7] hover:bg-[rgba(235,211,215,0.25)] hover:shadow-[0_0_10px_rgba(235,211,215,0.3)]'
                  }
                `}
                aria-current={isActive(path) ? 'page' : undefined}
              >
                <Icon className="w-6 h-6" />
                <span>{label}</span>
              </Link>
            ))}

            {/* Ícono del carrito con contador animado */}
            <Link
              to="/cart"
              className="
                relative p-2 rounded-xl
                bg-[rgba(200,160,165,0.3)] text-[#EBD3D7]
                hover:bg-[rgba(235,211,215,0.5)] hover:text-[#6B4B51]
                transition-shadow duration-300 shadow-md shadow-[rgba(235,211,215,0.4)]
              "
              aria-label="Carrito de compras"
            >
              <ShoppingBag className="w-7 h-7" />
              <AnimatePresence>
                {cartItems.length > 0 && (
                  <motion.span
                    key={cartItems.length}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 0.5, repeat: 1, repeatType: 'reverse', ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}
                    className="
                      absolute -top-1 -right-1 bg-[#EBD3D7]
                      text-[#6B4B51] text-xs font-semibold rounded-full
                      w-6 h-6 flex items-center justify-center shadow-lg select-none
                    "
                  >
                    {cartItems.length}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>

          {/* Botones para vista móvil: carrito y menú hamburguesa */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              to="/cart"
              className="
                relative p-2 rounded-xl
                bg-[rgba(200,160,165,0.3)] text-[#EBD3D7]
                hover:bg-[rgba(235,211,215,0.5)] hover:text-[#6B4B51]
                transition-shadow duration-300 shadow-md shadow-[rgba(235,211,215,0.4)]
              "
              aria-label="Carrito de compras"
            >
              <ShoppingBag className="w-6 h-6" />
              <AnimatePresence>
                {cartItems.length > 0 && (
                  <motion.span
                    key={cartItems.length}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 0.5, repeat: 1, repeatType: 'reverse', ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}
                    className="
                      absolute -top-1 -right-1 bg-[#EBD3D7]
                      text-[#6B4B51] text-xs font-semibold rounded-full
                      w-5 h-5 flex items-center justify-center shadow-lg select-none
                    "
                  >
                    {cartItems.length}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Botón para abrir o cerrar el menú móvil */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="
                p-2 rounded-xl
                bg-[rgba(200,160,165,0.3)] text-[#EBD3D7]
                hover:bg-[rgba(235,211,215,0.5)] hover:text-[#6B4B51]
                transition-shadow duration-300
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EBD3D7]
                flex items-center justify-center
              "
            >
              {/* Animación de rotación para ícono hamburguesa/cerrar */}
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ display: 'flex' }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Menú desplegable para dispositivos móviles */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20, pointerEvents: 'none' }}
              animate={{ opacity: 1, y: 0, pointerEvents: 'auto', transition: { duration: 0.35, ease: 'easeOut' } }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.25, ease: 'easeIn' } }}
              className="
                md:hidden
                bg-[rgba(80,53,59,0.8)]
                backdrop-blur-xl
                border border-[rgba(200,160,165,0.5)]
                mt-px shadow-[0_12px_48px_rgba(80,53,59,0.9)]
                rounded-2xl
                max-w-xs mx-auto
                py-7 px-6
              "
            >
              {/* Lista vertical de enlaces móviles con estilo y estado activo */}
              <div className="space-y-5 text-[#F5E5E7]">
                {navItems.map(({ path, label, icon: Icon }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center space-x-4 px-5 py-4 rounded-lg font-semibold text-lg transition-colors duration-200
                      ${
                        isActive(path)
                          ? 'bg-[rgba(225,198,206,0.7)] text-[#E1C6CE] shadow-inner'
                          : 'hover:text-[#F1D9DD] hover:bg-[rgba(241,217,221,0.5)]'
                      }
                    `}
                    aria-current={isActive(path) ? 'page' : undefined}
                  >
                    <Icon className="w-7 h-7" />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
