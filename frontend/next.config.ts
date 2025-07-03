import type { NextConfig } from "next";

export const config = {
  matcher: ['/dashboard/:path*'],
};

const nextConfig: NextConfig = {
  /* config options here */
  // matcher: ['/dashboard/:path*'],
};

export default nextConfig;
