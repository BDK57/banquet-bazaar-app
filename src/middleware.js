import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
   
    const path = request.nextUrl.pathname;
    console.log("path" + path)

    const isPublicPath = path === "/login" || path === "/signup" || path == '/';
    const token = request.cookies.get("token")?.value || "";
    console.log("token",token)
    // if (isPublicPath && (token.length > 0)) {
    //     // redirect them to their profile page
    //     return NextResponse.redirect(new URL("/profile", request.nextUrl));
    // }
    // if (!isPublicPath && !token.length > 0) {
    //     // redirect them to the login page
    //     return NextResponse.redirect(new URL("/login", request.nextUrl));
    // }
}
// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/profile", "/login", "/signup"],
};
