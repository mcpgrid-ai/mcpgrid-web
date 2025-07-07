'use client';

import { FC } from 'react';
import { createPortal } from 'react-dom';

import { GlobalSearch } from '@common/components';
import { DomNodeId } from '@common/constants/domNodeId.const';

export const ServersSearch: FC = () => {
  const el = document.getElementById(DomNodeId.HeaderSearch);

  if (!el) return null;

  return createPortal(<GlobalSearch />, el);
};
