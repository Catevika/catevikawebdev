import connectDB from '@/database/connectDB';
import User from '@/database/models/userModel';
import bcrypt from 'bcryptjs';
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import github from 'next-auth/providers/github';

class CustomError extends CredentialsSignin {
  code = "custom_error";
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  providers: [
    github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { name, password } = credentials;

        if (typeof name !== "string" || typeof password !== "string") {
          throw new CustomError("Invalid credentials");
        }

        connectDB();
        const user = await User.findOne({ name });

        try {
          const isMatch = await bcrypt.compare(password, user.password);

          if (isMatch === true) {
            return user;
          } else {
            throw new CustomError("Invalid password");
          }
        } catch (error) {
          throw new CustomError("Error verifying password");
        }
      },
    })
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: { strategy: "jwt", maxAge: 6000 }
});