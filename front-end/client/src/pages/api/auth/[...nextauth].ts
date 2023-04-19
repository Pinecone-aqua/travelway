// import NextAuth from "next-auth";
// import Auth0Provider from "next-auth/providers/auth0";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";

// // interface ClientType extends OAuthUserConfig { clientId: string, clientSecret: string };

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     Auth0Provider({
//       clientId: process.env.AUTH0_ID,
//       clientSecret: process.env.AUTH0_SECRET,
//       // @ts-ignore
//       domain: process.env.AUTH0_DOMAIN,
//     }),
//     GithubProvider({
//       // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//       // @ts-ignore
//       scope: "read:user",
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//   ],
//   // The secret should be set to a reasonably long random string.
//   // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
//   // a separate secret is defined explicitly for encrypting the JWT.
//   secret: process.env.SECRET,
//   session: {
//     strategy: "jwt",
//     // Seconds - How long until an idle session expires and is no longer valid.
//     // maxAge: 30 * 24 * 60 * 60, // 30 days
//   },
//   jwt: {
//     secret: process.env.SECRET,
//   },
//   pages: {},
//   callbacks: {},
//   events: {},
//   debug: false,
// });
