import { connectDatabase } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { toast } from "sonner";
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDatabase();
          const user = await User.findOne({ email });

          if (!user) {
            toast.error("Uživatel nenalezen");
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            toast.error("Špatný email, nebo heslo");
            return null;
          }
          return user;
        } catch (error) {
          console.log("error", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
