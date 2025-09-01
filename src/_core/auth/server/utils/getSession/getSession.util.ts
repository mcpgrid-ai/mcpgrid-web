import { getServerSession } from 'next-auth/next';
import { User } from 'next-auth';

import { AUTH_OPTIONS } from '../../authOptions';

export const getSession = async () => {
  return getServerSession<object, { user: User }>(AUTH_OPTIONS);
};
