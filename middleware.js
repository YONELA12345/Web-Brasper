import { NextResponse } from 'next/server';

// Exportamos como default en lugar de nombrada
export default function middleware(req) {
  // Comprobamos la URL actual
  const { pathname } = req.nextUrl;

  // Si la ruta comienza con /old-path
  if (pathname.startsWith('/old-path')) {
    // Creamos la nueva URL
    const url = new URL('/new-path', req.url);
    // Redirigimos
    return NextResponse.redirect(url);
  }

  // Para todas las demás rutas, continuamos normalmente
  return NextResponse.next();
}

// Configuración del matcher
export const config = {
  matcher: '/old-path/:path*'
};
