'use client';

import { FC, PropsWithChildren, useRef } from 'react';
import axios from 'axios';

import { KeystoneContext } from '../../contexts/KeystoneContext';

export type KeystoneProviderProps = PropsWithChildren<{
  baseUrl: string;
}>;

export const KeystoneProvider: FC<KeystoneProviderProps> = ({
  baseUrl,
  children,
}) => {
  const { current: instance } = useRef(
    axios.create({
      baseURL: baseUrl,
    }),
  );

  return (
    <KeystoneContext.Provider
      value={{
        instance,
      }}
    >
      {children}
    </KeystoneContext.Provider>
  );
};
