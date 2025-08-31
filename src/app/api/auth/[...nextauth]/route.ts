import NextAuth from 'next-auth';

import { AUTH_OPTIONS } from '@core/auth/server';

const handler = NextAuth(AUTH_OPTIONS);

export { handler as GET, handler as POST };
