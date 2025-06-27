import { FC, Fragment } from 'react';
import { RoutePath } from '@common/constants';

import { Heading } from '@core/uikit';
import { Link } from '@core/navigation';
import { strapi } from '@network/strapi';

const Servers: FC = async () => {
  const {
    data: { pages },
  } = await strapi.page.getServers({
    slug: ['servers', 'home'],
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
    </Fragment>
  );
};

export default Servers;
