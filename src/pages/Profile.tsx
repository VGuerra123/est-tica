import React, { useState } from 'react';
import { User, Calendar, ShoppingBag, Heart, Clock, Settings, Bell, MapPin, Phone, Mail, Camera } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { user, updateUser } = useUser();
  const [activeTab, setActiveTab] = useState('info');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || 'Alejandra Castro',
    email: user?.email || 'alejandra@email.com',
    phone: user?.phone || '+56 9 1234 5678',
    address: user?.address || 'Av. Providencia 1234, Santiago',
    birthDate: user?.birthDate || '1990-05-15'
  });

  const tabs = [
    { id: 'info', label: 'Información', icon: User },
    { id: 'appointments', label: 'Citas', icon: Calendar },
    { id: 'orders', label: 'Pedidos', icon: ShoppingBag },
    { id: 'favorites', label: 'Favoritos', icon: Heart },
    { id: 'settings', label: 'Configuración', icon: Settings }
  ];

  const appointments = [
    {
      id: 1,
      service: 'Limpieza Facial Profunda',
      date: '2024-01-15',
      time: '15:00',
      status: 'confirmada',
      specialist: 'Dra. María González'
    },
    {
      id: 2,
      service: 'Masaje Relajante',
      date: '2024-01-20',
      time: '10:30',
      status: 'pendiente',
      specialist: 'Patricia Silva'
    },
    {
      id: 3,
      service: 'Tratamiento Anti-Edad',
      date: '2024-01-10',
      time: '14:00',
      status: 'completada',
      specialist: 'Dra. María González'
    }
  ];

  const orders = [
    {
      id: 1,
      date: '2024-01-12',
      total: 87000,
      status: 'entregado',
      items: ['Serum Vitamina C', 'Crema Hidratante']
    },
    {
      id: 2,
      date: '2024-01-08',
      total: 55000,
      status: 'en camino',
      items: ['Colágeno Marino']
    }
  ];

  const favorites = [
    {
      id: 1,
      name: 'Serum Vitamina C Premium',
      price: 35000,
      image: 'https://images.pexels.com/photos/3785110/pexels-photo-3785110.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2'
    },
    {
      id: 2,
      name: 'Limpieza Facial Profunda',
      price: 45000,
      image: 'https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2'
    }
  ];

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
  };

  const formatPrice = (price: number) =>
    price.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmada':
        return 'bg-[#A3B18A]/30 text-[#A3B18A]';
      case 'pendiente':
        return 'bg-[#D8A7B1]/30 text-[#D8A7B1]';
      case 'completada':
        return 'bg-[#8C6D62]/30 text-[#8C6D62]';
      case 'entregado':
        return 'bg-[#A3B18A]/30 text-[#A3B18A]';
      case 'en camino':
        return 'bg-[#D8A7B1]/30 text-[#D8A7B1]';
      default:
        return 'bg-[#B7AFA3]/30 text-[#B7AFA3]';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6EFE7] to-white py-8 font-body text-[#8C6D62]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#D8A7B180]">
              <User className="w-16 h-16 text-white" />
            </div>
            <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-[#D8A7B1]/40 hover:bg-[#F6EFE7] transition-colors">
              <Camera className="w-5 h-5 text-[#D8A7B1]" />
            </button>
          </div>
          <h1 className="text-3xl font-bold mb-1">{formData.name}</h1>
          <p className="text-[#B7AFA3] font-semibold">Cliente Premium</p>
        </div>

        {/* Tabs */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-full font-semibold transition duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white shadow-lg'
                    : 'bg-white text-[#8C6D62] hover:bg-[#F6EFE7] border border-[#B7AFA3]/30'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/70 rounded-3xl shadow-lg border border-[#B7AFA3]/30 backdrop-blur-md p-8 transition-shadow hover:shadow-2xl">
          {activeTab === 'info' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-bold text-[#8C6D62]">Información Personal</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-[#D8A7B1] text-white px-5 py-2 rounded-2xl hover:bg-[#8C6D62] transition-colors"
                >
                  {isEditing ? 'Cancelar' : 'Editar'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#8C6D62] mb-2 flex items-center gap-1">
                    <User className="w-4 h-4" />
                    Nombre Completo
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 border border-[#B7AFA3]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D8A7B1] bg-white/90 backdrop-blur-sm transition"
                    />
                  ) : (
                    <p className="p-3 bg-[#F6EFE7] rounded-xl text-[#8C6D62]">{formData.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#8C6D62] mb-2 flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 border border-[#B7AFA3]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D8A7B1] bg-white/90 backdrop-blur-sm transition"
                    />
                  ) : (
                    <p className="p-3 bg-[#F6EFE7] rounded-xl text-[#8C6D62]">{formData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#8C6D62] mb-2 flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    Teléfono
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 border border-[#B7AFA3]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D8A7B1] bg-white/90 backdrop-blur-sm transition"
                    />
                  ) : (
                    <p className="p-3 bg-[#F6EFE7] rounded-xl text-[#8C6D62]">{formData.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#8C6D62] mb-2 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Fecha de Nacimiento
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                      className="w-full p-3 border border-[#B7AFA3]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D8A7B1] bg-white/90 backdrop-blur-sm transition"
                    />
                  ) : (
                    <p className="p-3 bg-[#F6EFE7] rounded-xl text-[#8C6D62]">{formData.birthDate}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#8C6D62] mb-2 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Dirección
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full p-3 border border-[#B7AFA3]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D8A7B1] bg-white/90 backdrop-blur-sm transition"
                    />
                  ) : (
                    <p className="p-3 bg-[#F6EFE7] rounded-xl text-[#8C6D62]">{formData.address}</p>
                  )}
                </div>
              </div>

              {isEditing && (
                <div className="mt-6 flex justify-end gap-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 bg-[#B7AFA3]/30 text-[#8C6D62] rounded-2xl hover:bg-[#B7AFA3]/40 transition-colors font-semibold"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold"
                  >
                    Guardar
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'appointments' && (
            <div>
              <h2 className="text-2xl font-display font-bold text-[#8C6D62] mb-6">Mis Citas</h2>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="bg-[#F6EFE7] rounded-2xl p-6 border border-[#B7AFA3]/30 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-[#8C6D62]">{appointment.service}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          appointment.status
                        )}`}
                      >
                        {appointment.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#B7AFA3]">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {appointment.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {appointment.time}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {appointment.specialist}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-display font-bold text-[#8C6D62] mb-6">Mis Pedidos</h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-[#F6EFE7] rounded-2xl p-6 border border-[#B7AFA3]/30 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-[#8C6D62]">Pedido #{order.id}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#B7AFA3]">Fecha: {order.date}</span>
                      <span className="text-lg font-bold text-[#D8A7B1]">{formatPrice(order.total)}</span>
                    </div>
                    <div className="text-sm text-[#B7AFA3]">Productos: {order.items.join(', ')}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div>
              <h2 className="text-2xl font-display font-bold text-[#8C6D62] mb-6">Mis Favoritos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {favorites.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#F6EFE7] rounded-2xl p-6 border border-[#B7AFA3]/30 backdrop-blur-sm flex items-center space-x-4"
                  >
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#8C6D62]">{item.name}</h3>
                      <p className="text-[#D8A7B1] font-bold">{formatPrice(item.price)}</p>
                    </div>
                    <button className="text-[#D8A7B1] hover:text-[#8C6D62] transition-colors">
                      <Heart className="w-6 h-6 fill-current" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-display font-bold text-[#8C6D62] mb-6">Configuración</h2>
              <div className="space-y-6">
                <div className="bg-[#F6EFE7] rounded-2xl p-6 border border-[#B7AFA3]/30 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-[#8C6D62] mb-4">Notificaciones</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Bell className="w-5 h-5 text-[#D8A7B1]" />
                        <span className="text-[#8C6D62]">Recordatorios de citas</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-[#B7AFA3]/30 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#D8A7B1]/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#B7AFA3] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D8A7B1]"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-[#D8A7B1]" />
                        <span className="text-[#8C6D62]">Promociones y ofertas</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-[#B7AFA3]/30 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#D8A7B1]/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#B7AFA3] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D8A7B1]"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F6EFE7] rounded-2xl p-6 border border-[#B7AFA3]/30 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-[#8C6D62] mb-4">Privacidad</h3>
                  <div className="space-y-4">
                    <button className="w-full text-left text-[#8C6D62] hover:text-[#D8A7B1] transition-colors font-semibold">
                      Descargar mis datos
                    </button>
                    <button className="w-full text-left text-[#8C6D62] hover:text-[#D8A7B1] transition-colors font-semibold">
                      Eliminar mi cuenta
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
