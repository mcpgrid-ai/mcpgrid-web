import { useMutation } from '@tanstack/react-query';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { signIn } from 'next-auth/react';
import { useContextSelector } from 'use-context-selector';

import { AuthContext } from '../../contexts/AuthContext';

const provider = new GoogleAuthProvider();

export const useSignInWithGoogle = () => {
  const auth = useContextSelector(AuthContext, ({ auth }) => auth);

  return useMutation<void, Error, void>({
    mutationFn: async () => {
      try {
        // @ts-expect-error x3 error
        const result = await signInWithPopup(auth, provider);
        const token = await result.user.getIdToken();
        await signIn('credentials', {
          token,
          redirect: true,
          callbackUrl: '/',
        });
      } catch (err) {
        throw err;
      }
    },
    mutationKey: ['useSignInWithGoogle'],
  });
};
