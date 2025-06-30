import { FC, Fragment } from 'react';
import { toNumber } from 'lodash';

import { PAGE_SIZE } from './page.const';

import { RoutePath } from '@common/constants';
import { Card, Heading, ListGroup, Pagination, Row } from '@core/uikit';
import { Link, notFound } from '@core/navigation';
import { strapi } from '@network/strapi';
import { ServerCard } from '@common/components';
import { getTranslations } from '@core/i18n';

interface ServersProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
    page?: string;
  }>;
}

const Servers: FC<ServersProps> = async ({ searchParams }) => {
  const t = await getTranslations();

  const { category, search, page = '1' } = await searchParams;

  const {
    data: { pages, servers: list, servers_connection, serverCategories },
  } = await strapi.page.getServers({
    category,
    slug: ['servers', 'home'],
    page: toNumber(page),
    pageSize: PAGE_SIZE,
  });

  const servers = pages.find((item) => item && item.Slug === 'servers');

  const home = pages.find((item) => item && item.Slug === 'home');

  if (!servers || !home) return notFound();

  return (
    <Fragment>
      <Heading>
        <Heading.Title>{servers.Title}</Heading.Title>
        <Heading.Breadcrumb>
          <Heading.Breadcrumb.Item as={Link} pathname={RoutePath.Index}>
            {home.Title}
          </Heading.Breadcrumb.Item>
          <Heading.Breadcrumb.Item active>
            {servers.Title}
          </Heading.Breadcrumb.Item>
        </Heading.Breadcrumb>
      </Heading>
      <Row>
        <Row.Col xs={3} className="d-none d-md-block">
          <Card>
            <Card.Body>
              <Card.Title>{t('forms.categories')}</Card.Title>
            </Card.Body>
            <ListGroup variant="flush" as="div">
              <ListGroup.Button
                as={Link}
                pathname={RoutePath.Servers}
                active={!category}
                query={{ search }}
              >
                {t('options.all')}
              </ListGroup.Button>
              {serverCategories.map((item) => {
                if (item) {
                  return (
                    <ListGroup.Button
                      as={Link}
                      pathname={RoutePath.Servers}
                      active={category === item.Slug}
                      query={{ search, category: item.Slug }}
                      key={item.Slug}
                    >
                      {item.Title}
                    </ListGroup.Button>
                  );
                }
              })}
            </ListGroup>
          </Card>
        </Row.Col>
        <Row.Col xs={12} md={9}>
          <Row className="g-4">
            {list.map((item) => {
              return (
                <Row.Col key={item?.Slug} xs={12} sm={6} md={6} lg={4}>
                  <ServerCard server={item} className="h-100" />
                </Row.Col>
              );
            })}
          </Row>
          <Row className="mt-4">
            <Row.Col className="d-flex justify-content-center">
              <Pagination
                total={servers_connection?.pageInfo.total}
                page={servers_connection?.pageInfo.page}
                size={servers_connection?.pageInfo.pageSize}
              >
                {/* @ts-expect-error x3 error */}
                {({ children, page, className }) => {
                  return (
                    <Link
                      pathname={RoutePath.Servers}
                      query={{ page, category, search }}
                      className={className}
                    >
                      {children}
                    </Link>
                  );
                }}
              </Pagination>
            </Row.Col>
          </Row>
        </Row.Col>
      </Row>
    </Fragment>
  );
};

export default Servers;
