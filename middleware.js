import { NextResponse } from 'next/server';

export function middleware(req) {
  // Ejemplo: Redirigir si la URL contiene `/old-path`
  if (req.nextUrl.pathname.startsWith('/old-path')) {
    return NextResponse.redirect(new URL('/new-path', req.url));
  }

  return NextResponse.next();
}
