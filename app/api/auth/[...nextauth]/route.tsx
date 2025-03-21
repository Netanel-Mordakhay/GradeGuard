import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import { SessionStrategy } from "next-auth";
import { compare } from "bcryptjs";
import { loginSchema } from "../../../validationSchemas";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const validatedData = loginSchema.parse(credentials);
          const { email, password } = validatedData;

          const user = await prisma.user.findUnique({ where: { email } });

          if (!user || !user.password) return null;

          const isValid = await compare(password, user.password);
          if (!isValid) return null;

          return user;
        } catch (error) {
          console.error("Login Validation Error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      // Initial sign in
      if (user) {
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      if (token.sub && session.user) {
        session.user = {
          ...session.user,
          id: token.sub,
          firstName: token.firstName || null,
          lastName: token.lastName || null,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
