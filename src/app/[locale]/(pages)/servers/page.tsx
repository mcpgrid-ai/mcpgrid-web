import { FC, Fragment } from 'react';

import { RoutePath } from '@common/constants';
import { Heading, Row } from '@core/uikit';
import { Link } from '@core/navigation';
import { strapi } from '@network/strapi';
import { ServerCard } from '@common/components';

const Servers: FC = async () => {
  const {
    data: { pages, servers: list },
  } = await strapi.page.getServers({
    slug: ['servers', 'home'],
    page: 1,
    pageSize: 24,
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
    </Fragment>
  );
};

export default Servers;
