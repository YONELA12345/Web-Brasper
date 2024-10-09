// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");

  const url = req.nextUrl.clone();

  if (!token && url.pathname.startsWith("/admin")) {
    url.pathname = "/login"; 
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/settings/:path*"], 
};
