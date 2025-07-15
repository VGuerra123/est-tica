import React, { createContext, useContext, useState, ReactNode } from 'react';

// Defino la forma de los datos de usuario manejados en la app
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  birthDate: string;
  avatar?: string; // URL opcional para imagen de perfil
}

// Tipos de funciones y valores disponibles en el contexto de usuario
interface UserContextType {
  user: User | null;
  updateUser: (userData: Partial<User>) => void;
  login: (userData: User) => void;
  logout: () => void;
}

// Creo el contexto para compartir el estado y acciones del usuario
const UserContext = createContext<UserContextType | undefined>(undefined);

// Componente proveedor que envuelve la app y mantiene el estado de usuario
export const UserProvider = ({ children }: { children: ReactNode }) => {
  // Estado local para almacenar datos del usuario o null si no hay sesión
  const [user, setUser] = useState<User | null>({
    id: 1,
    name: 'María José Contreras',
    email: 'maria@email.com',
    phone: '+56 9 1234 5678',
    address: 'Av. Providencia 1234, Santiago',
    birthDate: '1990-05-15'
  });

  // Actualiza solo los campos proporcionados de la información del usuario
  const updateUser = (userData: Partial<User>) => {
    setUser(prev => prev ? { ...prev, ...userData } : null);
  };

  // Asigna datos completos del usuario al iniciar sesión
  const login = (userData: User) => {
    setUser(userData);
  };

  // Elimina datos de usuario para cerrar sesión
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para acceder a los valores del UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};