import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as "string | undefined",
      clientSecret: process.env.GITHUB_SECRET as "string | undefined",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as "string | undefined",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as "string | undefined",
    }),
  ],
});
