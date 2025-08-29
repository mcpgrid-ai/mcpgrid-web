'use client';

import { FC } from 'react';

import { Button, Logo } from '@core/uikit';
import { useTranslations } from '@core/i18n';

export const SignInGitHub: FC = () => {
  const t = useTranslations();

  return (
    <Button variant="outline-light">
      <Logo name="github" className="me-2" />
      {t('actions.continueWithGithub')}
    </Button>
  );
};
