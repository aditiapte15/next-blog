import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  publicRoutes: ['/sign-in', '/sign-up', '/about', '/home'], // Allow public access to specific routes
});

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|static|api).*)', // Make sure this pattern matches your public routes
  ],
};
