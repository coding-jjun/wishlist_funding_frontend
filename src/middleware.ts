import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (!request.cookies.has("viewport")) {
    const { device } = userAgent(request);
    const viewport = device.type === "mobile" ? "mobile" : "desktop";
    response.cookies.set("viewport", viewport);
    response.headers.set("viewport", viewport);
  }
  return response;
}
