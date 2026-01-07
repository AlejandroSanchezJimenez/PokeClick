/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  basePath: isProd ? '/PokeClick' : '',
  output: 'export', // export estático
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // ayuda a GitHub Pages con rutas tipo /shop
}

module.exports = nextConfig
