import { FC, Fragment } from 'react';
import { toNumber } from 'lodash';

import { PAGE_SIZE } from './page.const';

import { RoutePath } from '@common/constants';
import { Heading, Pagination, Row } from '@core/uikit';
import { Link } from '@core/navigation';
import { strapi } from '@network/strapi';
import { ServerCard } from '@common/components';

interface ServersProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
    page?: string;
  }>;
}

const Servers: FC<ServersProps> = async ({ searchParams }) => {
  const { category, search, page = '1' } = await searchParams;

  const {
    data: { pages, servers: list, servers_connection },
  } = await strapi.page.getServers({
    slug: ['servers', 'home'],
    page: toNumber(page),
    pageSize: PAGE_SIZE,
  });

  const servers = pages.find((item) => item && item.Slug === 'servers');

  const home = pages.find((item) => item && item.Slug === 'home');

  return (
    <Fragment>
      <Heading>
        <Heading.Title>{servers?.Title}</Heading.Title>
        <Heading.Breadcrumb>
          <Heading.Breadcrumb.Item as={Link} pathname={RoutePath.Index}>
            {home?.Title}
          </Heading.Breadcrumb.Item>
          <Heading.Breadcrumb.Item active>
            {servers?.Title}
          </Heading.Breadcrumb.Item>
        </Heading.Breadcrumb>
      </Heading>
      <Row className="g-4">
        {list.map((item) => {
          return (
            <Row.Col key={item?.Slug} sm={6} xs={12} md={6} lg={4} xl={3}>
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
    </Fragment>
  );
};

export default Servers;
