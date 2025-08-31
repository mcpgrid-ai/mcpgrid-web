'use client';

import { createContext } from 'react';
import { Auth } from 'firebase/auth';

interface AuthContextProps {
  auth?: Auth;
}

export const AuthContext = createContext<AuthContextProps>({});
