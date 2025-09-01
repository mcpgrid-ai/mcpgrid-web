'use client';

import { FC } from 'react';

import { useSignInWithGoogle } from '@core/auth/client';
import { Button, Logo, useUtils } from '@core/uikit';
import { useTranslations } from '@core/i18n';
import { RoutePath } from '@common/constants';

export const SignInGoogle: FC = () => {
  const t = useTranslations();
  const { toast } = useUtils();

  const { mutate: singInWithGoogle } = useSignInWithGoogle();

  const handleOnClick = () =>
    singInWithGoogle(
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
      <Logo name="google" className="me-2" />
      {t('actions.continueWithGoogle')}
    </Button>
  );
};
