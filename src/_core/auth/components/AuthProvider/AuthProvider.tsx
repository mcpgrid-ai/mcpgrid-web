'use client';

import { FC, PropsWithChildren, useRef } from 'react';
import { getAuth } from 'firebase/auth';
import { FirebaseOptions, initializeApp } from 'firebase/app';

import { AuthContext } from '../../contexts/AuthContext';

import { AuthStateChangeParams } from './AuthProvider.types';

export type AuthProviderProps = PropsWithChildren<{
  config: FirebaseOptions;
  onAuthStateChange?: (state: AuthStateChangeParams) => void;
}>;

export const AuthProvider: FC<AuthProviderProps> = ({ config, children }) => {
  const { current: app } = useRef(initializeApp(config));
  const { current: auth } = useRef(getAuth(app));

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
};
