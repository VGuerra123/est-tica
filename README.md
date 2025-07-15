# Estética Radiance - Centro de Belleza Premium

Una aplicación web moderna y elegante para un centro de estética en Santiago de Chile, diseñada principalmente para dispositivos móviles con un diseño responsive y funcionalidades completas.

## 🌟 Características

### Frontend
- **Diseño Premium**: Interfaz moderna con gradientes, glassmorphism y micro-interacciones
- **Mobile-First**: Optimizado para dispositivos móviles con diseño responsive
- **Reserva de Citas**: Sistema completo de booking con selección de servicios, fechas y especialistas
- **Tienda Online**: Catálogo de productos de belleza con carrito de compras
- **Gestión de Perfil**: Panel de usuario con historial de citas y pedidos
- **Galería Visual**: Showcase de resultados y tratamientos
- **Sistema de Reseñas**: Testimonios y calificaciones de clientes

### Tecnologías Utilizadas
- **React 18** con TypeScript
- **Tailwind CSS** para estilos
- **React Router** para navegación
- **Context API** para manejo de estado
- **Lucide React** para iconos
- **Vite** como build tool

## 🚀 Instalación y Desarrollo

### Requisitos
- Node.js 18 o superior
- npm o yarn

### Configuración
```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📱 Funcionalidades Implementadas

### 1. Página Principal
- Hero section con estadísticas
- Servicios destacados
- Galería de resultados
- Testimonios de clientes
- Información de contacto

### 2. Sistema de Reservas
- Selección de servicios
- Calendario de disponibilidad
- Elección de especialistas
- Formulario de datos personales
- Confirmación de cita

### 3. Tienda Online
- Catálogo de productos
- Filtros por categoría
- Búsqueda de productos
- Carrito de compras
- Sistema de favoritos

### 4. Perfil de Usuario
- Información personal
- Historial de citas
- Pedidos realizados
- Productos favoritos
- Configuración de notificaciones

## 🔧 Configuración del Backend

Para implementar un backend completo, se siguieron estos pasos:

### 1. Base de Datos
```sql
-- Usuarios
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20),
  address TEXT,
  birth_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Servicios
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  duration INTEGER NOT NULL, -- en minutos
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(50),
  image_url VARCHAR(255),
  active BOOLEAN DEFAULT true
);

-- Especialistas
CREATE TABLE specialists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  specialty VARCHAR(100),
  experience_years INTEGER,
  bio TEXT,
  image_url VARCHAR(255),
  active BOOLEAN DEFAULT true
);

-- Citas
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  service_id INTEGER REFERENCES services(id),
  specialist_id INTEGER REFERENCES specialists(id),
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Productos
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2),
  category VARCHAR(50),
  image_url VARCHAR(255),
  stock INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true
);

-- Pedidos
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  total DECIMAL(10,2) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  shipping_address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Detalles de pedidos
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL
);
```

### 2. API Endpoints Necesarios

#### Autenticación
```javascript
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
GET /api/auth/profile
```

#### Servicios
```javascript
GET /api/services
GET /api/services/:id
POST /api/services (admin)
PUT /api/services/:id (admin)
DELETE /api/services/:id (admin)
```

#### Especialistas
```javascript
GET /api/specialists
GET /api/specialists/:id
```

#### Citas
```javascript
GET /api/appointments (user's appointments)
POST /api/appointments (create)
PUT /api/appointments/:id (update)
DELETE /api/appointments/:id (cancel)
GET /api/appointments/availability
```

#### Productos
```javascript
GET /api/products
GET /api/products/:id
POST /api/products (admin)
PUT /api/products/:id (admin)
DELETE /api/products/:id (admin)
```

#### Pedidos
```javascript
GET /api/orders (user's orders)
POST /api/orders (create)
GET /api/orders/:id
PUT /api/orders/:id/status (admin)
```

### 3. Tecnologías Recomendadas para Backend

#### Node.js/Express
```javascript
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de base de datos
const pool = new Pool({
  user: 'your_user',
  host: 'localhost',
  database: 'radiance_db',
  password: 'your_password',
  port: 5432,
});
```

#### Autenticación JWT
```javascript
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.sendStatus(401);
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
```

### 4. Integración con Sistemas de Pago

#### Stripe Integration
```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/api/payments/create-intent', async (req, res) => {
  const { amount } = req.body;
  
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: 'clp',
    });
    
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### 5. Notificaciones y Emails

#### Nodemailer para emails
```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendAppointmentConfirmation = async (userEmail, appointmentData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Confirmación de Cita - Estética Radiance',
    html: `
      <h2>¡Tu cita ha sido confirmada!</h2>
      <p>Servicio: ${appointmentData.service}</p>
      <p>Fecha: ${appointmentData.date}</p>
      <p>Hora: ${appointmentData.time}</p>
    `
  };
  
  await transporter.sendMail(mailOptions);
};
```

### 6. Variables de Entorno

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/radiance_db

# JWT
JWT_SECRET=your_jwt_secret_here

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key

# Email
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password

# Server
PORT=3001
NODE_ENV=development
```

### 7. Despliegue

#### Opciones
- **Frontend**: Vercel, Netlify, o GitHub Pages
- **Backend**: Railway, Heroku, o DigitalOcean
- **Base de Datos**: PostgreSQL en Railway, Supabase, o AWS RDS
- **Imágenes**: Cloudinary o AWS S3
