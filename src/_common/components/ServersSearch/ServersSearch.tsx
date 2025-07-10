'use client';

import { FC } from 'react';

import { RoutePath } from '../../constants';

import { Searchbar } from '@core/uikit';
import { useTranslations } from '@core/i18n';

interface ServersSearchProps {
  className?: string;
}

export const ServersSearch: FC<ServersSearchProps> = ({ className }) => {
  const t = useTranslations();

  return (
    <form method="get" action={RoutePath.Servers}>
      <Searchbar
        name="search"
        type="submit"
        className={className}
        placeholder={t('placeholders.search')}
      />
    </form>
  );
};
