'use client';

import { createContext } from 'use-context-selector';
import axios, { AxiosInstance } from 'axios';

export interface KeystoneContextProps {
  instance: AxiosInstance;
}

export const KeystoneContext = createContext<KeystoneContextProps>({
  instance: axios.create(),
});
