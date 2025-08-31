import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import admin from 'firebase-admin';

const app = (() => {
  if (admin.apps[0]) return admin.apps[0];
  return admin.initializeApp({
    credential: admin.credential.cert({
      projectId: 'mcp-box',
      clientEmail: process.env.GCP_CLIENT_EMAIL,
      privateKey: process.env.GCP_PRIVATE_KEY,
    }),
  });
})();

const auth = app.auth();

export const AUTH_OPTIONS: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Firebase',
      credentials: {
        token: { label: 'Token', type: 'text' },
      },
      authorize: async (credentials) => {
        if (!credentials?.token) return null;
        try {
          const decoded = await auth.verifyIdToken(credentials.token);
          const user = await auth.getUser(decoded.uid);
          return {
            id: user.uid,
            email: user.email,
            image: user.photoURL,
            name: user.displayName,
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
};
