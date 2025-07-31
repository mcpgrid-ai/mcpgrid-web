'use client';

import { FC, useCallback, useMemo } from 'react';
import { get } from 'lodash';

import { RoutePath } from '../../constants';

import { Searchbar, Typeahead, TypeaheadOnSearchCallback } from '@core/uikit';
import { useTranslations } from '@core/i18n';
import { useSearchWithPost } from '@network/meilisearch';

interface ServersSearchProps {
  className?: string;
}

export const ServersSearch: FC<ServersSearchProps> = ({ className }) => {
  const t = useTranslations();

  const { isPending, data, mutate } = useSearchWithPost();

  console.log(data?.hits);

  const handleOnSearch: TypeaheadOnSearchCallback = useCallback(
    ({ q }) => {
      mutate({
        indexUid: 'server',
        data: {
          q,
          limit: 10,
          offset: 0,
          // @ts-expect-error x3 error
          attributesToRetrieve: [
            'Category.Icon',
            'Title',
            'Description',
            'documentId',
            'Logo.url',
          ],
        },
      });
    },
    [mutate],
  );

  const options = useMemo(() => get(data, ['hits'], []), [data]);

  return (
    <form method="get" action={RoutePath.Servers}>
      <Typeahead
        bg
        options={options}
        isLoading={isPending}
        onSearch={handleOnSearch}
        placeholder={t('placeholders.search')}
      />
      <Searchbar
        name="search"
        type="submit"
        className={className}
        placeholder={t('placeholders.search')}
      />
    </form>
  );
};
