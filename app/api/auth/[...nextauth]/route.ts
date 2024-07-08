import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { openDB } from '../../../lib/database';

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const db = await openDB();
        const user = await db.get('SELECT * FROM users WHERE username = ?', [credentials?.username]);

        if (user && credentials.password === user.password) {  // plain text check for simplicity
          return { id: user.id, name: user.username };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
