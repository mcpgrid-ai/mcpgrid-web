import { Auth } from 'firebase/auth';
import { createContext } from 'use-context-selector';

interface AuthContextProps {
  auth?: Auth;
}

export const AuthContext = createContext<AuthContextProps>({});
