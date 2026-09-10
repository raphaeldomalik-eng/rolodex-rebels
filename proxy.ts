import { NextResponse, type NextRequest } from "next/server";

const CANONICAL_HOST = "rolodexrebels.co.uk";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  if (request.nextUrl.hostname.toLowerCase() !== CANONICAL_HOST) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff2)$).*)"],
};
