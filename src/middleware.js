import { getToken } from "next-auth/jwt";

import { NextResponse , NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    
//   const { pathname }: { pathname: string } = request.nextUrl;
//   const token = await getToken({ req: request });
//   const user: TypeUser | null = token?.user as TypeUser;


//   const Redirect = () => {
//     if (user.account_type == "Admin") {
//       return NextResponse.redirect(new URL("/admin/Dashboard", request.url));
//     } else if (user.account_type == "Teacher") {
//       return NextResponse.redirect(new URL("/teacher/Dashboard", request.url));
//     } else if (user.account_type == "Student") {
//       return NextResponse.redirect(new URL("/student/Dashboard", request.url));
//     } else {
//       return NextResponse.redirect(
//         new URL(
//           "/login?error=Please login first to access this route",
//           request.url
//         )
//       );
//     }
//   };
//   const authRoutes = ["/login", "/register", "/forgot-password"];

//   if (!!token && authRoutes.includes(pathname)) {
//     return Redirect();
//   }
//   if (
//     (!!token &&      pathname.startsWith("/admin") &&      user.account_type !== "Admin") ||
//     (!!token &&
//       pathname.startsWith("/teacher") &&
//       user.account_type !== "Teacher") ||
//     (!!token &&
//       pathname.startsWith("/student") &&
//       user.account_type !== "Student")
//   ) {
//     return Redirect();
//   }

//   if (!token) {
//     if (
//       pathname.includes("/api/admin") ||
//       pathname.includes("/api/student") ||
//       pathname.includes("/api/teacher")
//     ) {
//       return Response.json(
//         { success: false, message: "authentication failed" },
//         { status: 401 }
//       );
//     }
//   } else {
//     if (
//       (pathname.startsWith("/api/admin") && user.account_type !== "Admin") ||
//       (pathname.startsWith("/api/teacher") &&
//         user.account_type !== "Teacher") ||
//       (pathname.startsWith("/api/student") && user.account_type !== "Student")
//     ) {
//       console.log(pathname, user.account_type);
//       return Response.json(
//         { success: false, message: "authentication failed" },
//         { status: 401 }
//       );
//     }
//   }
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/forgotpassword",
    "/reset-password",
    "/ven/:path*",
    "/user/:path*",
  ],
};