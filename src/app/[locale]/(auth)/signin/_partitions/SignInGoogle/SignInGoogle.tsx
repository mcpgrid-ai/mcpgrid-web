'use client';

import { FC } from 'react';

import { Button, Logo } from '@core/uikit';
import { useTranslations } from '@core/i18n';
import { useSignInWithGoogle } from '@core/auth';

export const SignInGoogle: FC = () => {
  const t = useTranslations();

  const { mutate: singInWithGoogle } = useSignInWithGoogle();

  const handleOnClick = () => singInWithGoogle();

  return (
    <Button variant="outline-light" onClick={handleOnClick}>
      <Logo name="google" className="me-2" />
      {t('actions.continueWithGoogle')}
    </Button>
  );
};
