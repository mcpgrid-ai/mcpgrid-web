'use client';

import { FC } from 'react';
import { createPortal } from 'react-dom';

import { ServersSearch as Search } from '@common/components';
import { DomNodeId } from '@common/constants';
import { Box } from '@core/uikit';

export const ServersSearch: FC = () => {
  const el = window.document.getElementById(DomNodeId.HeaderSearch);

  if (!el) return null;

  return createPortal(
    <Box w={75} d="none" dMd="block">
      <Search />
    </Box>,
    el,
  );
};
