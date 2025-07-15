import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';

// Componente raíz que envuelve la aplicación con proveedores y define rutas
function App() {
  return (
    // Proveedor de datos de usuario para compartir estado de sesión
    <UserProvider>
      {/* Proveedor de contexto de carrito para manejar compras */}
      <CartProvider>
        {/* Configuro el enrutador para navegación de páginas */}
        <Router>
          {/* Contenedor principal con fondo degradado que abarca toda la pantalla */}
          <div className="min-h-screen bg-gradient-to-br from-[#F6EFE7] via-white to-[#F6EFE7]">
            {/* Barra de navegación fija */}
            <Navbar />
            {/* Sección principal; ajusto relleno superior para no tapar la navbar */}
            <main className="pt-16">
              {/* Defino las rutas y los componentes que corresponden a cada path */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
