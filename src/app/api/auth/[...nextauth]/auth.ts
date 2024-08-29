import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
const bcrypt = require("bcryptjs");
import { Adapter } from "next-auth/adapters";
import { Collection, MongoClient, ObjectId } from "mongodb";

interface User {
  _id: ObjectId;
  email: string;
  name: string;
  role: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise) as Adapter,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        console.log("Authorizing with credentials:", credentials?.email);
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing email or password");
          return null;
        }
        const client: MongoClient = await clientPromise;
        const usersCollection: Collection<User> = client
          .db()
          .collection("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });
        console.log("User found:", user ? "Yes" : "No");
        if (!user || user.role !== "admin") {
          console.log("User not found or not admin");
          return null;
        }
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        console.log("Password valid:", isPasswordValid);
        if (!isPasswordValid) {
          return null;
        }
        console.log("Authorization successful");
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      console.log("JWT callback, token:", token);
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id;
      session.user.role = token.role;
      console.log("Session callback, session:", session);
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  debug: process.env.NODE_ENV === "development",
};
