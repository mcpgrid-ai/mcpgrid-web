import { useMutation } from '@tanstack/react-query';
import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { signIn } from 'next-auth/react';

const provider = new GithubAuthProvider();

interface UseSignInWithGitHubMutationParams {
  callbackUrl: string;
}

export const useSignInWithGitHub = () => {
  return useMutation<void, Error, UseSignInWithGitHubMutationParams>({
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
    mutationKey: ['useSignInWithGitHub'],
  });
};
