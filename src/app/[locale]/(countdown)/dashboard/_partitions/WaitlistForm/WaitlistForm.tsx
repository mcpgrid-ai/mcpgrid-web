'use client';

import { FC, useCallback } from 'react';
import { capitalize, castArray } from 'lodash';

import { Input, InputOnSubmitCallback, useUtils } from '@core/uikit';
import { useTranslations } from '@core/i18n';
import { useCreateWaitlist } from '@network/api';

export const WaitlistForm: FC = () => {
  const t = useTranslations();
  const { toast } = useUtils();

  const { data, isPending, mutate } = useCreateWaitlist();

  const handleOnSubmit: InputOnSubmitCallback = useCallback(
    ({ value: email }) => {
      mutate(
        {
          data: {
            email,
          },
        },
        {
          onError: ({ message, statusCode }) => {
            if (statusCode === 409) {
              toast({
                duration: null,
                message: t('notifications.waitlist.conflict'),
              });
            } else {
              toast({
                duration: null,
                variant: 'error',
                message: capitalize(castArray(message)[0]),
              });
            }
          },
          onSuccess: () => {
            toast({
              duration: null,
              message: t('notifications.waitlist.succeeded'),
            });
          },
        },
      );
    },
    [mutate, toast, t],
  );

  return (
    <Input
      key={data?.id}
      isLoading={isPending}
      icon="paper-plane"
      onSubmit={handleOnSubmit}
      className="app-search mt-5 mx-auto"
      placeholder={t('placeholders.enterYourEmailAddress')}
    />
  );
};
