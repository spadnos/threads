// Without a defined matcher, this one line applies next-auth
// to the entire project
export { default } from "next-auth/middleware";

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher

// This matcher will protect /extra and /dashboard, but /about will not be protected.
export const config = { matcher: ["/!about", "/extra", "/dashboard"] };
