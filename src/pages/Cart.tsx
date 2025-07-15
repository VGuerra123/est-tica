import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    });
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Aquí iría la lógica de checkout
    setTimeout(() => {
      alert('¡Compra realizada con éxito!');
      setIsCheckingOut(false);
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F6EFE7] to-white flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-[#D8A7B1] mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-[#8C6D62] mb-4">Tu carrito está vacío</h2>
          <p className="text-[#B7AFA3] mb-8">Descubre nuestros productos de belleza premium</p>
          <Link
            to="/shop"
            className="bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Ir a la Tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6EFE7] to-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link
              to="/shop"
              className="p-2 text-[#B7AFA3] hover:text-[#D8A7B1] transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl font-bold text-[#8C6D62]">
              Carrito de Compras
            </h1>
          </div>
          <div className="text-sm text-[#B7AFA3]">
            {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-xl border border-[#B7AFA3]/20 hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#8C6D62] mb-1">{item.name}</h3>
                    <p className="text-[#D8A7B1] font-bold">{formatPrice(item.price)}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-[#D8A7B1]/20 rounded-full flex items-center justify-center text-[#D8A7B1] hover:bg-[#D8A7B1]/30 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-semibold text-[#8C6D62]">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-[#D8A7B1]/20 rounded-full flex items-center justify-center text-[#D8A7B1] hover:bg-[#D8A7B1]/30 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#B7AFA3]/20 h-fit backdrop-blur-sm">
            <h2 className="text-xl font-bold text-[#8C6D62] mb-6">Resumen del Pedido</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-[#B7AFA3]">Subtotal</span>
                <span className="font-semibold text-[#8C6D62]">{formatPrice(getCartTotal())}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#B7AFA3]">Envío</span>
                <span className="font-semibold text-[#A3B18A]">Gratis</span>
              </div>
              <div className="border-t border-[#B7AFA3]/20 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#8C6D62]">Total</span>
                  <span className="text-lg font-bold text-[#D8A7B1]">{formatPrice(getCartTotal())}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              {isCheckingOut ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Procesando...</span>
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  <span>Proceder al Pago</span>
                </>
              )}
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm text-[#B7AFA3]">
                Envío gratis en Santiago
              </p>
              <p className="text-sm text-[#B7AFA3]">
                Garantía de satisfacción
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;