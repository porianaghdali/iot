import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl
    const token = request.cookies.get('token')?.value
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
  // مسیرهایی که میخوای محافظت بشن
  const protectedRoutes = ['/dashboard', '/profile', '/settings','/devices']

  // چک می‌کنیم مسیر موردنظر جزو protected باشه
  const isProtected = protectedRoutes.some(route => pathname.startsWith(route))

  // گرفتن توکن از کوکی

  if (pathname.startsWith('/login') && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (isProtected && !token) {
    // اگر مسیر محافظت شده و توکن نیست → redirect به /login
    const loginUrl = new URL('/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  // اگر لاگین هست یا مسیر غیر محافظت شده → ادامه
  return NextResponse.next()
}

// matcher → فقط مسیرهایی که نیاز به چک دارند
export const config = {
  matcher: ['/dashboard/:path*','/login/:path*', '/profile/:path*', '/settings/:path*','/','/devices/:path*'],
}
