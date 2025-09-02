'use client';

import { FC, useCallback, useMemo, useState } from 'react';
import { castArray, get } from 'lodash';
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
import { DTO, useServersSearchQuery } from '@network/keystone';

interface ServersSearchProps {
  bg?: boolean;
}

export const ServersSearch: FC<ServersSearchProps> = ({ bg }) => {
  const t = useTranslations();
  const [query, setQuery] = useState<string>();

  const or: DTO.ServerWhereInput['OR'] = [query]
    .concat(query?.split(' '))
    .filter((v) => !!v)
    .reduce(
      (res, contains): DTO.ServerWhereInput['OR'] => [
        ...(res ? castArray(res) : []),
        {
          title: {
            contains,
            mode: DTO.QueryMode.Insensitive,
          },
        },
        {
          description: {
            contains,
            mode: DTO.QueryMode.Insensitive,
          },
        },
        {
          keywords: {
            contains,
            mode: DTO.QueryMode.Insensitive,
          },
        },
      ],
      [] as DTO.ServerWhereInput['OR'],
    );

  const { isLoading, data } = useServersSearchQuery(
    {
      where: {
        OR: or,
      },
    },
    {
      enabled: !!query,
    },
  );

  const handleOnSearch: TypeaheadOnSearchCallback = useCallback(
    ({ q }) => setQuery(() => q),
    [setQuery],
  );

  const options = useMemo(() => {
    if (data?.servers?.length) {
      return get(data, ['servers'], [])?.reduce(
        (res, item) => {
          if (item !== null && item !== undefined) {
            return [...res, item];
          }
          return res;
        },
        [] as Exclude<DTO.ServersSearchQuery['servers'], null | undefined>,
      );
    }
    return [];
  }, [data]);

  return (
    <Typeahead
      bg={bg}
      name="search"
      label="title"
      action={RoutePath.Servers}
      options={options || []}
      isLoading={isLoading}
      onSearch={handleOnSearch}
      placeholder={t('placeholders.search')}
    >
      {({ option: { icon, title, slug, category, githubOwner } }) => {
        return (
          <Typeahead.Item as="div">
            <Link pathname={RoutePath.ServerDetails} params={{ slug }}>
              <Row className="gx-2">
                <Row.Col xs="auto">
                  <Avatar size={36}>
                    {icon?.publicUrlTransformed ? (
                      <Image
                        src={icon?.publicUrlTransformed}
                        width={36}
                        height={36}
                        alt={title || ''}
                      />
                    ) : (
                      category?.icon?.publicUrlTransformed && (
                        <Image
                          src={category?.icon?.publicUrlTransformed}
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
                      value: githubOwner || '',
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
