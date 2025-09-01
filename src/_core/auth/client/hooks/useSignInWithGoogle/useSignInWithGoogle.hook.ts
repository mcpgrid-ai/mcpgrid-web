import { useMutation } from '@tanstack/react-query';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { signIn } from 'next-auth/react';

const provider = new GoogleAuthProvider();

interface UseSignInWithGoogleMutationParams {
  callbackUrl: string;
}

export const useSignInWithGoogle = () => {
  return useMutation<void, Error, UseSignInWithGoogleMutationParams>({
    mutationFn: async ({ callbackUrl }) => {
      try {
        const auth = getAuth();
        const result = await signInWithPopup(auth, provider);
        const token = await result.user.getIdToken();
        await signIn('credentials', {
          token,
          redirect: true,
          callbackUrl,
        });
      } catch (err) {
        throw err;
      }
    },
    mutationKey: ['useSignInWithGoogle'],
  });
};
