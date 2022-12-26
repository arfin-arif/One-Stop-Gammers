import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "../../../database/connectDB";

export default NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT as any,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},

      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform other logiscs
        // find out user from database
        // compare password
        if (email !== "jhon@gmail.com" || password !== "123456") {
          console.log(credentials);
          throw new Error("Invalid email or password");
          return null;
        }
        console.log(credentials);
        return { id: "1234", name: "Jhon Doe", email: "jhon@gmail.com" };
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as "string | undefined",
      clientSecret: process.env.GITHUB_SECRET as "string | undefined",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as "string | undefined",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as "string | undefined",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    // error: "/auth/error",
    // signOut: "/auth/signout",
  },
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
});
