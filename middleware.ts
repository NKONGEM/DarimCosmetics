import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Everything under /admin requires a signed-in user, except the sign-in
// page itself (otherwise nobody could ever reach it).
const isProtectedRoute = createRouteMatcher(["/admin((?!/sign-in).*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
