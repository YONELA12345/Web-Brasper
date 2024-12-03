/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mantener tu configuración actual de imágenes
  images: {
    unoptimized: true,
  },
  
  // Agregar soporte para middleware
  experimental: {
    allowMiddlewareResponseBody: true,
  },

  // Si necesitas otras configuraciones, agrégalas aquí
};

module.exports = nextConfig;
