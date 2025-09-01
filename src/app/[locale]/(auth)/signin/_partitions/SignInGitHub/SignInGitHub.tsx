'use client';

import { FC } from 'react';

import { Button, Logo, useUtils } from '@core/uikit';
import { useTranslations } from '@core/i18n';
import { useSignInWithGitHub } from '@core/auth/client';
import { RoutePath } from '@common/constants';

export const SignInGitHub: FC = () => {
  const t = useTranslations();
  const { toast } = useUtils();

  const { mutate: singInWithGitHub, error } = useSignInWithGitHub();

  console.log(error);

  const handleOnClick = () =>
    singInWithGitHub(
      {
        callbackUrl: RoutePath.Admin,
      },
      {
        onError: ({ message }) =>
          toast({
            duration: null,
            variant: 'error',
            message,
          }),
      },
    );

  return (
    <Button variant="outline-light" onClick={handleOnClick}>
      <Logo name="github" className="me-2" />
      {t('actions.continueWithGithub')}
    </Button>
  );
};
