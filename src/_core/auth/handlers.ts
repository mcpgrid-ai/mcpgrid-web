import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// import { AuthAdmin } from './services/auth-admin';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Firebase',
      credentials: {
        token: { label: 'Token', type: 'text' },
      },
      authorize: async (credentials) => {
        if (!credentials?.token) return null;
        try {
          // const decoded = await AuthAdmin.verifyIdToken(credentials);
          return {
            id: 'decoded.uid',
            email: 'decoded.email',
          };
        } catch (e) {
          console.error('Invalid Firebase token', e);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token.user = user;
      return token;
    },
    session: async ({ session, token }) => {
      if (token.user) session.user = token.user;
      return session;
    },
  },
});

export { handler };
