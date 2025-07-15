import React, { useState } from 'react';
import { ShoppingBag, Star, Heart, Search } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useCart } from '../context/CartContext';

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);
  const { addToCart } = useCart();

  const categories = [
    { id: 'todos', name: 'Todos los Productos' },
    { id: 'skincare', name: 'Cuidado Facial' },
    { id: 'bodycare', name: 'Cuidado Corporal' },
    { id: 'makeup', name: 'Maquillaje' },
    { id: 'tools', name: 'Herramientas' },
    { id: 'supplements', name: 'Suplementos' }
  ];

  const products = [
    {
      id: 1,
      name: 'Serum Vitamina C Premium',
      description: 'Serum antioxidante con vitamina C pura para iluminar y proteger la piel',
      price: 35000,
      originalPrice: 45000,
      rating: 4.9,
      reviews: 127,
      category: 'skincare',
      image: 'https://http2.mlstatic.com/D_Q_NP_789761-MLA80738937266_112024-O.webp',
      bestseller: true,
      discount: 22
    },
    {
      id: 2,
      name: 'Crema Hidratante Nocturna',
      description: 'Crema nutritiva con ácido hialurónico para regeneración nocturna',
      price: 42000,
      rating: 4.8,
      reviews: 89,
      category: 'skincare',
      image: 'https://static.salcobrandonline.cl/spree/products/85607/large_webp/583099-1.webp?1671133725'
    },
    {
      id: 3,
      name: 'Limpiador Facial Suave',
      description: 'Gel limpiador con extractos naturales para todo tipo de piel',
      price: 28000,
      rating: 4.7,
      reviews: 156,
      category: 'skincare',
      image: 'https://belcorpchile.vtexassets.com/arquivos/ids/430867/200116227_FoamerEssential_galeria_1.jpg?v=638826648125730000'
    },
    {
      id: 4,
      name: 'Aceite Corporal Relajante',
      description: 'Aceite con aceites esenciales para masajes y hidratación profunda',
      price: 38000,
      rating: 4.9,
      reviews: 92,
      category: 'bodycare',
      image: 'https://www.weleda.cl/binaries/content/gallery/global/packshots/si---spain-italy/draco-body/aceite_corporal_lavanda.jpg'
    },
    {
      id: 5,
      name: 'Exfoliante Corporal',
      description: 'Exfoliante con sales marinas y aceites nutritivos',
      price: 32000,
      originalPrice: 38000,
      rating: 4.6,
      reviews: 73,
      category: 'bodycare',
      image: 'https://dbs.cl/media/catalog/product/t/h/th700295.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=&width=',
      discount: 16
    },
    {
      id: 6,
      name: 'Base de Maquillaje Natural',
      description: 'Base líquida de cobertura media con protección solar',
      price: 45000,
      rating: 4.5,
      reviews: 234,
      category: 'makeup',
      image: 'https://www.maicao.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw46fe231f/images/large/530173-base-de-maquillaje-mate-natural-con-acido-hialuronico-12h-natural-30-ml.jpg?sw=1000&sh=1000'
    },
    {
      id: 7,
      name: 'Rodillo Facial de Jade',
      description: 'Herramienta para masaje facial y reducción de hinchazón',
      price: 25000,
      rating: 4.4,
      reviews: 188,
      category: 'tools',
      image: 'https://http2.mlstatic.com/D_NQ_NP_627104-MLC53909667703_022023-O-rodillo-jade-piedra-gua-sha-masajeador-facial-linfatico.webp'
    },
    {
      id: 8,
      name: 'Colágeno Marino',
      description: 'Suplemento de colágeno marino para la piel y articulaciones',
      price: 55000,
      rating: 4.7,
      reviews: 145,
      category: 'supplements',
      image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/you/you00314/y/74.jpg',
      bestseller: true
    },
    // Productos adicionales para completar 20
    {
      id: 9,
      name: 'Mascarilla Facial Hidratante',
      description: 'Mascarilla nutritiva con aloe vera y colágeno',
      price: 18000,
      rating: 4.6,
      reviews: 80,
      category: 'skincare',
      image: 'https://img.nivea.com/-/media/miscellaneous/media-center-items/0/f/1/9a45fe8d549e4ac9a529192ab2f8db75-screen.jpg'
    },
    {
      id: 10,
      name: 'Contorno de Ojos Antiarrugas',
      description: 'Crema ligera para reducir bolsas y líneas finas',
      price: 32000,
      rating: 4.8,
      reviews: 102,
      category: 'skincare',
      image: 'https://static.salcobrandonline.cl/spree/products/96142/large_webp/245767-1.webp?1690857756'
    },
    {
      id: 11,
      name: 'Loción Corporal Aromática',
      description: 'Loción hidratante con aroma a lavanda y vainilla',
      price: 29000,
      rating: 4.5,
      reviews: 75,
      category: 'bodycare',
      image: 'https://http2.mlstatic.com/D_NQ_NP_679880-MLU74328022721_012024-O.webp'
    },
    {
      id: 12,
      name: 'Exfoliante Labial',
      description: 'Exfoliante suave para labios secos y agrietados',
      price: 15000,
      rating: 4.7,
      reviews: 53,
      category: 'skincare',
      image: 'https://i5.walmartimages.cl/asr/11a4581a-2225-458e-812f-8a7f207c8a2c.042186fb2a9d8c6eb4b2d1db7b784ac1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
    },
    {
      id: 13,
      name: 'Rubor en Polvo',
      description: 'Rubor natural para un acabado radiante',
      price: 22000,
      rating: 4.4,
      reviews: 64,
      category: 'makeup',
      image: 'https://http2.mlstatic.com/D_NQ_NP_919775-MLU76386098945_052024-O.webp'
    },
    {
      id: 14,
      name: 'Delineador Líquido Waterproof',
      description: 'Delineador de alta duración y fácil aplicación',
      price: 18000,
      rating: 4.6,
      reviews: 112,
      category: 'makeup',
      image: 'https://static.salcobrandonline.cl/spree/products/35319/large/3230052.jpg?1641477423'
    },
    {
      id: 15,
      name: 'Cepillo Facial Eléctrico',
      description: 'Cepillo para limpieza profunda y masaje facial',
      price: 52000,
      rating: 4.5,
      reviews: 88,
      category: 'tools',
      image: 'https://ultraestetica.cl/cdn/shop/files/520240718-4551-1rxwh65.jpg?v=17262039212'
    },
    {
      id: 16,
      name: 'Suplemento Multivitamínico',
      description: 'Vitaminas para fortalecer piel, cabello y uñas',
      price: 47000,
      rating: 4.7,
      reviews: 134,
      category: 'supplements',
      image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/oad/oad08014/y/44.jpg'
    },
    {
      id: 17,
      name: 'Aceite Esencial de Lavanda',
      description: 'Aceite puro para aromaterapia y relajación',
      price: 22000,
      rating: 4.8,
      reviews: 94,
      category: 'bodycare',
      image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now07560/y/28.jpg'
    },
    {
      id: 18,
      name: 'Máscara Facial de Arcilla',
      description: 'Purifica la piel y reduce el exceso de grasa',
      price: 25000,
      rating: 4.6,
      reviews: 70,
      category: 'skincare',
      image: 'https://www.druni.es/blog/wp-content/uploads/2023/08/Mascarillas-arcilla-Img02-090923.jpg'
    },
    {
      id: 19,
      name: 'Spray Fijador de Maquillaje',
      description: 'Mantiene el maquillaje fresco por horas',
      price: 28000,
      rating: 4.4,
      reviews: 55,
      category: 'makeup',
      image: 'https://www.nyxcosmetics.cl/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-nyx-latam-master-ng-catalog/default/dw3375beda/ProductImages/Face/Makeup_Setting_Spray/80089781371_makeupsettingspray_matte_swatch_large.jpg'
    },
    {
      id: 20,
      name: 'Piedra Gua Sha',
      description: 'Herramienta tradicional para tonificar el rostro',
      price: 27000,
      rating: 4.7,
      reviews: 120,
      category: 'tools',
      image: 'https://draperezsevilla.com/wp-content/uploads/2022/01/guasha-gps-enero22.jpg'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#412F34] via-[#61474D] to-[#F6EFE7]">
      {/* Hero */}
      <header className="relative isolate flex items-center justify-center min-h-[40vh] overflow-hidden rounded-b-[3rem] md:rounded-b-[4rem] shadow-xl">
        <img
          src="https://images.pexels.com/photos/29709964/pexels-photo-29709964.jpeg"
          alt="Productos belleza"
          className="absolute inset-0 w-full h-full object-cover scale-105 md:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-transparent" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative text-center px-4"
        >
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Tienda de Belleza
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-body text-white/85 max-w-2xl mx-auto">
            Productos premium para tu rutina de cuidado personal
          </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8 space-y-4"
        >
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B7AFA3] w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full pl-12 pr-5 py-3 text-sm font-body
                         bg-white/30 backdrop-blur-lg
                         border border-white/30
                         shadow-[6px_6px_16px_rgba(0,0,0,0.08),-6px_-6px_16px_rgba(255,255,255,0.6)]
                         focus:outline-none focus:ring-2 focus:ring-[#D8A7B1]/70 placeholder:text-white/60"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-body font-medium transition
                  ${selectedCategory === cat.id
                    ? 'text-white bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] shadow-lg shadow-[#8C6D62]/40'
                    : 'bg-white/40 backdrop-blur-md border border-white/20 text-[#F2E5DF] hover:bg-white/60'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.section
          className="grid grid-cols-2 gap-4 sm:gap-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ staggerChildren: 0.05 }}
        >
          {filteredProducts.map(product => (
            <motion.article
              key={product.id}
              className="group relative overflow-hidden rounded-3xl
                         bg-white/40 backdrop-blur-md border border-white/20
                         shadow-[6px_6px_20px_rgba(0,0,0,0.08),-6px_-6px_20px_rgba(255,255,255,0.6)]
                         hover:shadow-[12px_12px_24px_rgba(0,0,0,0.12),-12px_-12px_24px_rgba(255,255,255,0.5)]
                         transition-all duration-500"
              whileHover={{ y: -4 }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-36 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 space-y-1">
                  {product.bestseller && (
                    <span className="rounded-full px-3 py-1 text-xs sm:text-sm font-semibold
                                     bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white shadow-lg">
                      Bestseller
                    </span>
                  )}
                  {product.discount && (
                    <span className="rounded-full px-3 py-1 text-xs sm:text-sm font-semibold
                                     bg-[#A3B18A] text-white shadow-lg">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                {/* Favorite */}
                <button
                  onClick={() => {
                    setFavorites(prev => prev.includes(product.id)
                      ? prev.filter(id => id !== product.id)
                      : [...prev, product.id]);
                  }}
                  className="absolute top-3 right-3 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full
                             bg-white/90 backdrop-blur-sm flex items-center justify-center
                             transition-all duration-200 hover:bg-white shadow-lg"
                  aria-label="Favorito"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      favorites.includes(product.id) ? 'text-[#D8A7B1] fill-current' : 'text-[#B7AFA3]'
                    }`}
                  />
                </button>
              </div>
              <div className="p-4 sm:p-6 space-y-3">
                <h3 className="font-display font-extrabold text-[#F4F0ED] text-lg sm:text-xl leading-tight">
                  {product.name}
                </h3>
                <p className="font-body text-[#E6D7D1]/90 text-sm line-clamp-2">{product.description}</p>
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-[#A3B18A] fill-current'
                          : 'text-[#B7AFA3]/40'
                      }`}
                    />
                  ))}
                  <span className="text-[#B7AFA3] font-body text-xs sm:text-sm ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-[#F4F0ED] text-xl">
                    {product.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 })}
                  </span>
                  {product.originalPrice && (
                    <span className="text-[#E6D7D1]/70 line-through text-sm sm:text-base">
                      {product.originalPrice.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 })}
                    </span>
                  )}
                </div>
                {/* Add to Cart */}
                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      quantity: 1,
                    })
                  }
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl
                             bg-gradient-to-r from-[#D8A7B1] to-[#8C6D62] text-white
                             font-semibold text-base hover:brightness-110 hover:shadow-xl
                             transition-all duration-300"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Agregar al Carrito
                </button>
              </div>
            </motion.article>
          ))}
        </motion.section>

        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-20 text-[#E4D7CF]"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <p className="text-lg font-display">No se encontraron productos</p>
            <p className="text-sm font-body opacity-75 mt-1">
              Prueba con otros términos de búsqueda o filtros
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Shop;
