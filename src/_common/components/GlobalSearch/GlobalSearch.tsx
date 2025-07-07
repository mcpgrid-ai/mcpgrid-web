'use client';

import { FC } from 'react';
import classNames from 'classnames';

import { RoutePath } from '../../constants';

import { Searchbar } from '@core/uikit';
import { useTranslations } from '@core/i18n';

interface GlobalSearchProps {
  className?: string;
}

export const GlobalSearch: FC<GlobalSearchProps> = ({ className }) => {
  const t = useTranslations();

  return (
    <form
      className={classNames(className)}
      method="get"
      action={RoutePath.Servers}
    >
      <Searchbar
        name="search"
        type="submit"
        placeholder={t('placeholders.search')}
      />
    </form>
  );
};
