'use client';

import { FC, Fragment } from 'react';

import { PAGE_SIZE } from './page.const';

import { Heading, Input, Pagination, Row } from '@core/uikit';
import { useTranslations } from '@core/i18n';
import { useGetServersQuery } from '@network/keystone';
import { ServerTile } from '@common/components';
import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';

const Servers: FC = () => {
  const t = useTranslations();

  const { data } = useGetServersQuery({
    take: PAGE_SIZE,
    skip: 0,
  });

  return (
    <Fragment>
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
      <Row className="g-4 mb-4">
        {data?.servers?.map((item) => {
          return (
            <Row.Col key={item.slug} xs={12} sm={6} md={6} lg={4} xl={3}>
              <ServerTile server={item} className="h-100" />
            </Row.Col>
          );
        })}
      </Row>
      <Row className="mt-4">
        <Row.Col className="d-flex justify-content-center">
          <Pagination
            total={data?.serversCount || 0}
            // page={toNumber(page)}
            size={PAGE_SIZE}
          >
            {/* @ts-expect-error x3 error */}
            {({ children, page, className }) => {
              return (
                <Link
                  pathname={RoutePath.CatalogServers}
                  query={{
                    page,
                    // category, search
                  }}
                  className={className}
                >
                  {children}
                </Link>
              );
            }}
          </Pagination>
        </Row.Col>
      </Row>
    </Fragment>
  );
};

export default Servers;
