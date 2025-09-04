'use client';

import { FC } from 'react';

import { PAGE_SIZE } from './page.const';

import { Heading, InfiniteScroll, Input, Row } from '@core/uikit';
import { useTranslations } from '@core/i18n';
import { ServerTile } from '@common/components';
import { useGetServersInfinite } from '@network/api';

const Servers: FC = () => {
  const t = useTranslations();

  const { data, fetchNextPage, hasNextPage } = useGetServersInfinite(
    {
      take: PAGE_SIZE,
    },
    {
      query: {
        getNextPageParam: ({ total }, all) => {
          const loaded = all.flatMap(({ data }) => data).length;
          return total > loaded ? all.length * PAGE_SIZE : undefined;
        },
      },
    },
  );

  return (
    <InfiniteScroll
      disabled={!hasNextPage}
      length={data?.pages[0].total || 0}
      onScroll={fetchNextPage}
    >
      <Heading>
        <Heading.Title>{t('nav.servers')}</Heading.Title>
        <Heading.Breadcrumb>
          <Heading.Breadcrumb.Item>{t('nav.catalog')}</Heading.Breadcrumb.Item>
          <Heading.Breadcrumb.Item active>
            {t('nav.servers')}
          </Heading.Breadcrumb.Item>
        </Heading.Breadcrumb>
      </Heading>
      <Row className="mb-4">
        <Row.Col>
          <Input placeholder={t('placeholders.search')} icon="search" />
        </Row.Col>
      </Row>
      <Row className="g-4">
        {data?.pages
          .flatMap(({ data }) => data)
          .map((item) => {
            return (
              <Row.Col key={item.slug} xs={12} sm={6} md={6} lg={4} xl={3}>
                <ServerTile server={item} className="h-100" />
              </Row.Col>
            );
          })}
      </Row>
    </InfiniteScroll>
  );
};

export default Servers;
