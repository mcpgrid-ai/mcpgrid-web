'use client';

import { FC, useCallback } from 'react';
import { castArray } from 'lodash';

import { Input, InputOnSubmitCallback } from '@core/uikit';
import { useTranslations } from '@core/i18n';
import { useCreateWaitlist } from '@network/api';

export const WaitlistForm: FC = () => {
  const t = useTranslations();

  const { isPending, mutate } = useCreateWaitlist();

  const handleOnSubmit: InputOnSubmitCallback = useCallback(
    ({ value: email }) => {
      mutate(
        {
          data: {
            email,
          },
        },
        {
          onError: ({ message }) => {
            console.log(castArray(message)[0]);
          },
          onSuccess: () => {},
        },
      );
    },
    [mutate],
  );

  return (
    <Input
      isLoading={isPending}
      icon="paper-plane"
      onSubmit={handleOnSubmit}
      className="app-search mt-5 mx-auto"
      placeholder={t('placeholders.enterYourEmailAddress')}
    />
  );
};
