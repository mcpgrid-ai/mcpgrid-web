'use client';

import { FC, useCallback, useState } from 'react';
import Image from 'next/image';

import { RoutePath } from '../../constants';

import {
  Avatar,
  Row,
  Typeahead,
  TypeaheadOnSearchCallback,
  Typography,
} from '@core/uikit';
import { useTranslations } from '@core/i18n';
import { Link } from '@core/navigation';
import { useGetServers } from '@network/api';

interface ServersSearchProps {
  bg?: boolean;
}

export const ServersSearch: FC<ServersSearchProps> = ({ bg }) => {
  const t = useTranslations();
  const [query, setQuery] = useState<string>();

  const { isFetching, data } = useGetServers(
    {
      take: 5,
      q: query,
    },
    {
      query: {
        enabled: !!query,
      },
    },
  );

  const handleOnSearch: TypeaheadOnSearchCallback = useCallback(
    ({ q }) => setQuery(() => q),
    [setQuery],
  );

  return (
    <Typeahead
      bg={bg}
      name="search"
      label="title"
      action={RoutePath.Servers}
      options={data?.data || []}
      isLoading={isFetching}
      onSearch={handleOnSearch}
      placeholder={t('placeholders.search')}
    >
      {({ option: { icon, title, slug, owner, logo } }) => {
        return (
          <Typeahead.Item as="div">
            <Link pathname={RoutePath.ServerDetails} params={{ slug }}>
              <Row className="gx-2">
                <Row.Col xs="auto">
                  <Avatar size={36}>
                    {logo ? (
                      <Image
                        src={logo}
                        width={36}
                        height={36}
                        alt={title || ''}
                      />
                    ) : (
                      icon && (
                        <Image
                          src={icon}
                          width={20}
                          height={20}
                          alt={title || ''}
                        />
                      )
                    )}
                  </Avatar>
                </Row.Col>
                <Row.Col xs>
                  <Typography as="h6" className="m-0">
                    {title}
                  </Typography>
                  <Typography className="m-0 text-muted">
                    {t('values.byOwner', {
                      value: owner || '',
                    })}
                  </Typography>
                </Row.Col>
              </Row>
            </Link>
          </Typeahead.Item>
        );
      }}
    </Typeahead>
  );
};
