'use client';

import { FC } from 'react';

import { Button, Logo } from '@core/uikit';
import { useTranslations } from '@core/i18n';
import { Auth } from '@core/auth';

export const SignInGoogle: FC = () => {
  const t = useTranslations();

  return (
    <Button variant="outline-light" onClick={Auth.signInWithGoogle}>
      <Logo name="google" className="me-2" />
      {t('actions.continueWithGoogle')}
    </Button>
  );
};
