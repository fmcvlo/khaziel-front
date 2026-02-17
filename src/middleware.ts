import { NextRequest, NextResponse } from "next/server"

/**
 * Middleware simplificado para Chile
 * Solo maneja el cache ID para Chile (cl)
 */
export async function middleware(request: NextRequest) {
  let cacheIdCookie = request.cookies.get("_medusa_cache_id")

  // Si no hay cache ID, crear uno
  if (!cacheIdCookie) {
    let cacheId = crypto.randomUUID()
    const response = NextResponse.next()
    
    response.cookies.set("_medusa_cache_id", cacheId, {
      maxAge: 60 * 60 * 24,
    })

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|assets|png|svg|jpg|jpeg|gif|webp).*)",
  ],
}
