'use client';

import { useCallback } from 'react';
import { useSnackbar } from 'notistack';

import { ToastParams } from './useUtils.types';

export const useUtils = () => {
  const { enqueueSnackbar } = useSnackbar();

  const toast = useCallback(
    ({ message, variant = 'default', duration = 4000 }: ToastParams) => {
      enqueueSnackbar({
        message,
        variant,
        autoHideDuration: duration,
      });
    },
    [enqueueSnackbar],
  );

  return { toast };
};
