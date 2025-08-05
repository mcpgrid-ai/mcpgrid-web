'use client';

import { FC, useCallback, useMemo, useState } from 'react';
import { get } from 'lodash';
import Image from 'next/image';

import { RoutePath } from '../../constants';

import {
  Avatar,
  Icon,
  Row,
  Typeahead,
  TypeaheadOnSearchCallback,
  Typography,
} from '@core/uikit';
import { useTranslations } from '@core/i18n';
import { useGetServers } from '@network/api';
import { Link } from '@core/navigation';

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

  const handleOnSearch: TypeaheadOnSearchCallback = useCallback(
    ({ q }) => setQuery(() => q),
    [setQuery],
  );

  const options = useMemo(() => get(data, ['data'], []), [data]);

  return (
    <Typeahead
      bg={bg}
      name="search"
      label="title"
      action={RoutePath.Servers}
      options={options}
      isLoading={isLoading}
      onSearch={handleOnSearch}
      placeholder={t('placeholders.search')}
    >
      {({ option: { logo, title, icon, slug, owner } }) => {
        return (
          <Typeahead.Item as="div">
            <Link pathname={RoutePath.ServerDetails} params={{ slug }}>
              <Row className="gx-2">
                <Row.Col xs="auto">
                  <Avatar size={36}>
                    {logo ? (
                      <Image src={logo} width={36} height={36} alt={title} />
                    ) : (
                      <Icon.Svg
                        height={icon.height}
                        width={icon.width}
                        size={20}
                        icon={icon.iconData}
                      />
                    )}
                  </Avatar>
                </Row.Col>
                <Row.Col xs>
                  <Typography as="h6" className="m-0">
                    {title}
                  </Typography>
                  <Typography className="m-0 text-muted">
                    {t('values.byOwner', { value: owner })}
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
