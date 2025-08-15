import { FC, Fragment } from 'react';
import { toNumber } from 'lodash';

import { PAGE_SIZE } from './page.const';

import { RoutePath } from '@common/constants';
import { Heading, Nav, Pagination, Row } from '@core/uikit';
import { Link, notFound } from '@core/navigation';
import { ServerCard } from '@common/components';
import { getTranslations } from '@core/i18n';
import { getServers } from '@network/api';
import { keystone } from '@network/keystone';

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

  const { data, total } = await (async () => {
    try {
      const { data, total } = await getServers({
        take: PAGE_SIZE,
        q: search,
        category,
        skip: (toNumber(page) - 1) * PAGE_SIZE,
      });
      return { data, total };
    } catch {
      return { data: [], total: 0 };
    }
  })();

  const { pages, serverCategories } = await keystone.pages.getServers({
    slug: ['servers', 'home'],
  });

  const servers = pages?.find((item) => item.slug === 'servers');

  const home = pages?.find((item) => item && item.slug === 'home');

  if (!servers || !home) return notFound();

  return (
    <Fragment>
      <Heading>
        <Heading.Title>{servers.title}</Heading.Title>
        <Heading.Breadcrumb>
          <Heading.Breadcrumb.Item as={Link} pathname={RoutePath.Index}>
            {home.title}
          </Heading.Breadcrumb.Item>
          <Heading.Breadcrumb.Item active>
            {servers.title}
          </Heading.Breadcrumb.Item>
        </Heading.Breadcrumb>
      </Heading>
      <Row className="mb-4">
        <Row.Col>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link
                as={Link}
                active={!category}
                pathname={RoutePath.Servers}
                query={{ search }}
              >
                {t('options.all')}
              </Nav.Link>
            </Nav.Item>
            {serverCategories?.map((item) => {
              if (item) {
                return (
                  <Nav.Item key={item.slug}>
                    <Nav.Link
                      as={Link}
                      active={category === item.slug}
                      pathname={RoutePath.Servers}
                      query={{ search, category: item.slug }}
                    >
                      {item.title}
                    </Nav.Link>
                  </Nav.Item>
                );
              }
            })}
          </Nav>
        </Row.Col>
      </Row>
      <Row className="g-4">
        {data.map((item) => {
          return (
            <Row.Col key={item.slug} xs={12} sm={6} md={6} lg={4} xl={3}>
              <ServerCard
                server={{
                  description: item.description,
                  id: item.id,
                  githubOwner: item.owner,
                  slug: item.slug,
                  title: item.title,
                  icon: {
                    publicUrlTransformed: item.logo,
                  },
                  category: {
                    icon: {
                      publicUrlTransformed: item.icon,
                    },
                  },
                  isOfficial: item.isOfficial,
                }}
                className="h-100"
              />
            </Row.Col>
          );
        })}
      </Row>
      <Row className="mt-4">
        <Row.Col className="d-flex justify-content-center">
          <Pagination total={total} page={toNumber(page)} size={PAGE_SIZE}>
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
    </Fragment>
  );
};

export default Servers;
