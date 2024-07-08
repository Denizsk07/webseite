import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { openDB } from '../../../lib/database';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const db = await openDB();
        const user = await db.get('SELECT * FROM users WHERE username = ?', [credentials?.username]);

        if (user && credentials?.password === user.password) { // plain text check
          return { id: user.id, name: user.username };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt' as const, // Explicitly defining the type
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: { token: any, user?: any }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any, token: any }) {
      if (token) {
        session.id = token.id;
      }
      return session;
    }
  }
};
