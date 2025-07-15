import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MapPin, Check } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
};

const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    specialist: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const services = [
    { id: 1, name: 'Limpieza Facial Profunda', duration: '60 min', price: 'CLP 45,000' },
    { id: 2, name: 'Tratamiento Anti-Edad', duration: '90 min', price: 'CLP 65,000' },
    { id: 3, name: 'Masaje Relajante', duration: '75 min', price: 'CLP 55,000' },
    { id: 4, name: 'Microdermoabrasión', duration: '45 min', price: 'CLP 50,000' },
    { id: 5, name: 'Depilación Láser', duration: '30-120 min', price: 'Desde CLP 25,000' },
    { id: 6, name: 'Radiofrecuencia', duration: '60 min', price: 'CLP 70,000' }
  ];

  const specialists = [
    { id: 1, name: 'Dra. María González', specialty: 'Dermatología Estética', experience: '8 años' },
    { id: 2, name: 'Claudia Morales', specialty: 'Cosmetóloga', experience: '6 años' },
    { id: 3, name: 'Patricia Silva', specialty: 'Masajista Terapéutica', experience: '10 años' },
    { id: 4, name: 'Andrea López', specialty: 'Esteticista', experience: '5 años' }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Reserva enviada:', formData);
    setStep(4);
  };

  const getStepTitle = () => {
    switch (step) {
      case 1: return 'Selecciona tu Servicio';
      case 2: return 'Elige Fecha y Hora';
      case 3: return 'Información Personal';
      case 4: return 'Reserva Confirmada';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6EFE7] to-white py-8 font-body">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-4xl font-extrabold text-[#8C6D62] mb-4 font-display">
            Reserva tu Cita
          </h1>
          <p className="text-xl text-[#B7AFA3]">{getStepTitle()}</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="mb-8 flex items-center justify-center space-x-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1, ease: [0.42, 0, 0.58, 1] }}
        >
          {[1, 2, 3, 4].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                ${step >= stepNumber
                  ? 'bg-[#D8A7B1] border-[#D8A7B1] text-white shadow-lg'
                  : 'border-[#B7AFA3] text-[#B7AFA3]'
                }`}
            >
              {step > stepNumber ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="font-semibold">{stepNumber}</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Step Content */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 border border-[#B7AFA3]/20 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
        >
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#8C6D62] mb-6 font-display">
                ¿Qué servicio te interesa?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map(service => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleInputChange('service', service.name)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 text-left
                      ${formData.service === service.name
                        ? 'border-[#D8A7B1] bg-[#D8A7B1]/20 shadow-lg'
                        : 'border-[#B7AFA3]/30 hover:border-[#D8A7B1]/50 bg-white/70'
                      }
                      focus:outline-none focus:ring-2 focus:ring-[#D8A7B1]`}
                  >
                    <h3 className="font-semibold text-[#8C6D62] mb-2 font-body">{service.name}</h3>
                    <div className="flex justify-between items-center text-sm text-[#B7AFA3] font-medium">
                      <span>{service.duration}</span>
                      <span className="font-bold text-[#D8A7B1]">{service.price}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.service}
                  className="bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white px-8 py-3 rounded-2xl font-semibold
                    disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-300"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#8C6D62] mb-6 font-display">
                Selecciona fecha y hora
              </h2>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-[#8C6D62] mb-2 flex items-center gap-2 font-body">
                  <Calendar className="w-5 h-5" />
                  Fecha
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={e => handleInputChange('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border border-[#B7AFA3]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D8A7B1]
                    bg-white/80 backdrop-blur-sm font-body"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-[#8C6D62] mb-2 flex items-center gap-2 font-body">
                  <Clock className="w-5 h-5" />
                  Hora
                </label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleInputChange('time', time)}
                      className={`p-3 rounded-xl border-2 transition duration-200 font-body
                        ${formData.time === time
                          ? 'border-[#D8A7B1] bg-[#D8A7B1]/20 text-[#8C6D62] shadow-lg'
                          : 'border-[#B7AFA3]/30 hover:border-[#D8A7B1]/50 text-[#B7AFA3]'
                        }
                        focus:outline-none focus:ring-2 focus:ring-[#D8A7B1]`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specialist */}
              <div>
                <label className="block text-sm font-medium text-[#8C6D62] mb-2 flex items-center gap-2 font-body">
                  <User className="w-5 h-5" />
                  Especialista (opcional)
                </label>
                <div className="space-y-2">
                  {specialists.map(specialist => (
                    <button
                      key={specialist.id}
                      type="button"
                      onClick={() => handleInputChange('specialist', specialist.name)}
                      className={`w-full p-4 rounded-xl border-2 cursor-pointer transition duration-200 font-body
                        ${formData.specialist === specialist.name
                          ? 'border-[#D8A7B1] bg-[#D8A7B1]/20 shadow-lg'
                          : 'border-[#B7AFA3]/30 hover:border-[#D8A7B1]/50 bg-white/70'
                        }
                        text-left focus:outline-none focus:ring-2 focus:ring-[#D8A7B1]`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-[#8C6D62]">{specialist.name}</h4>
                          <p className="text-sm text-[#B7AFA3]">{specialist.specialty}</p>
                        </div>
                        <span className="text-sm text-[#D8A7B1]">{specialist.experience}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="bg-[#B7AFA3]/20 text-[#8C6D62] px-8 py-3 rounded-2xl font-semibold hover:bg-[#B7AFA3]/30 transition duration-300"
                >
                  Volver
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!formData.date || !formData.time}
                  className="bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white px-8 py-3 rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition duration-300"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#8C6D62] mb-6 font-display">Información de contacto</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#8C6D62] mb-2 font-body">Nombre</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={e => handleInputChange('firstName', e.target.value)}
                    className="w-full p-3 border border-[#B7AFA3]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D8A7B1]
                      bg-white/80 backdrop-blur-sm font-body"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#8C6D62] mb-2 font-body">Apellido</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={e => handleInputChange('lastName', e.target.value)}
                    className="w-full p-3 border border-[#B7AFA3]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D8A7B1]
                      bg-white/80 backdrop-blur-sm font-body"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#8C6D62] mb-2 flex items-center gap-2 font-body">
                  <Mail className="w-5 h-5" />
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => handleInputChange('email', e.target.value)}
                  className="w-full p-3 border border-[#B7AFA3]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D8A7B1]
                    bg-white/80 backdrop-blur-sm font-body"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#8C6D62] mb-2 flex items-center gap-2 font-body">
                  <Phone className="w-5 h-5" />
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => handleInputChange('phone', e.target.value)}
                  className="w-full p-3 border border-[#B7AFA3]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D8A7B1]
                    bg-white/80 backdrop-blur-sm font-body"
                  placeholder="+56 9 1234 5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#8C6D62] mb-2 font-body">Notas adicionales (opcional)</label>
                <textarea
                  value={formData.notes}
                  onChange={e => handleInputChange('notes', e.target.value)}
                  rows={4}
                  className="w-full p-3 border border-[#B7AFA3]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D8A7B1]
                    bg-white/80 backdrop-blur-sm font-body"
                  placeholder="Alguna consideración especial..."
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setStep(2)}
                  className="bg-[#B7AFA3]/20 text-[#8C6D62] px-8 py-3 rounded-2xl font-semibold hover:bg-[#B7AFA3]/30 transition duration-300"
                >
                  Volver
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.email ||
                    !formData.phone
                  }
                  className="bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white px-8 py-3 rounded-2xl font-semibold
                    disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition duration-300"
                >
                  Confirmar Reserva
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
            >
              <div className="w-20 h-20 bg-[#A3B18A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-[#A3B18A]" />
              </div>
              <h2 className="text-2xl font-bold text-[#8C6D62] font-display">¡Reserva Confirmada!</h2>
              <p className="text-[#B7AFA3] font-body">
                Hemos enviado los detalles de tu reserva a <strong>{formData.email}</strong>
              </p>

              <div className="bg-[#F6EFE7] rounded-2xl p-6 text-left font-body">
                <h3 className="font-semibold text-[#8C6D62] mb-4">Resumen de tu reserva:</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#B7AFA3]">Servicio:</span>
                    <span className="font-semibold text-[#8C6D62]">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B7AFA3]">Fecha:</span>
                    <span className="font-semibold text-[#8C6D62]">{formData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B7AFA3]">Hora:</span>
                    <span className="font-semibold text-[#8C6D62]">{formData.time}</span>
                  </div>
                  {formData.specialist && (
                    <div className="flex justify-between">
                      <span className="text-[#B7AFA3]">Especialista:</span>
                      <span className="font-semibold text-[#8C6D62]">{formData.specialist}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[#D8A7B1] font-body mt-4">
                <MapPin className="w-5 h-5" />
                <span>Av. Providencia 1234, Santiago</span>
              </div>

              <button
                onClick={() => {
                  setStep(1);
                  setFormData({
                    service: '',
                    date: '',
                    time: '',
                    specialist: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    notes: ''
                  });
                }}
                className="bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-xl transition duration-300"
              >
                Hacer otra reserva
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
