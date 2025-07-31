'use client';

import { FC, useCallback, useMemo, useState } from 'react';
import { get } from 'lodash';

import { RoutePath } from '../../constants';

import { Typeahead, TypeaheadOnSearchCallback } from '@core/uikit';
import { useTranslations } from '@core/i18n';
import { useGetServers } from '@network/api';

interface ServersSearchProps {
  bg?: boolean;
}

export const ServersSearch: FC<ServersSearchProps> = ({ bg }) => {
  const t = useTranslations();
  const [query, setQuery] = useState<string>();

  const { isLoading, data } = useGetServers(
    {
      q: query,
      take: 5,
    },
    {
      query: {
        enabled: !!query,
      },
    },
  );

  console.log(data?.data);

  const handleOnSearch: TypeaheadOnSearchCallback = useCallback(
    ({ q }) => {
      setQuery(() => q);
    },
    [setQuery],
  );

  const options = useMemo(() => get(data, ['hits'], []), [data]);

  return (
    <Typeahead
      bg={bg}
      action={RoutePath.Servers}
      options={options}
      isLoading={isLoading}
      onSearch={handleOnSearch}
      placeholder={t('placeholders.search')}
    />
  );
};
