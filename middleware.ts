import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Inclure uniquement les chemins nécessaires
    '/((?!_next/static|_next/image|favicon.ico).*)',
    '/(api|trpc)(.*)', // Toujours inclure les routes API et TRPC
  ],
};
