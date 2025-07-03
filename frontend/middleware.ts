// // frontend/middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
    //     const token = request.cookies.get('auth_token')?.value;
    
    
    //   const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');
    
    //   if (isDashboardRoute && !token) {
        //     return NextResponse.redirect(new URL('/auth/signin', request.url));
        //   }
        // //   console.log("middleware run ends here");
        
        //   return NextResponse.next();
        // }
        // // 
        
import { NextResponse, NextRequest } from "next/server";
export function middleware(request: NextRequest) {
    console.log("middleware run starts here");
    const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');
  
    if (isDashboardRoute) {
      return NextResponse.redirect(new URL('/auth/signin', request.url));
    }
  
    return NextResponse.next();
  }
  