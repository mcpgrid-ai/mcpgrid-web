'use client';

import { FC, PropsWithChildren, useRef } from 'react';
import { getAuth } from 'firebase/auth';
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { SessionProvider } from 'next-auth/react';

import { AuthContext } from '../../contexts/AuthContext';

export type AuthProviderProps = PropsWithChildren<{
  config: FirebaseOptions;
}>;

export const AuthProvider: FC<AuthProviderProps> = ({ config, children }) => {
  const { current: app } = useRef(initializeApp(config));
  const { current: auth } = useRef(getAuth(app));

  return (
    <SessionProvider>
      <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
    </SessionProvider>
  );
};
