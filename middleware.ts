import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { isAdminUserId } from "@/lib/admin";

// Everything under /admin requires a signed-in user, except the sign-in
// page itself (otherwise nobody could ever reach it).
const isProtectedRoute = createRouteMatcher(["/admin((?!/sign-in).*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
    // Being signed in isn't enough: the account must have an approved admin email.
    const { userId } = await auth();
    if (!(await isAdminUserId(userId))) {
      return new NextResponse(
        "This account doesn't have access to the Darim admin. Sign out and sign in with the owner's account.",
        { status: 403, headers: { "content-type": "text/plain; charset=utf-8" } }
      );
    }
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
