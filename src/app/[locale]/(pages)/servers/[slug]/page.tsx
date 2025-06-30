import { FC, Fragment } from 'react';

import { strapi } from '@network/strapi';
import { Link, notFound } from '@core/navigation';
import { Heading } from '@core/uikit';
import { RoutePath } from '@common/constants';

interface ServerDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServerDetails: FC<ServerDetailsProps> = async ({ params }) => {
  const { slug } = await params;

  const {
    pages,
    servers: [server],
  } = await strapi.page.getServer({
    slug: ['home', 'servers'],
    server: slug,
  });

  const servers = pages.find((item) => item && item.Slug === 'servers');

  const home = pages.find((item) => item && item.Slug === 'home');

  if (!server || !servers || !home) return notFound();

  return (
    <Fragment>
      <Heading>
        <Heading.Title>{server.Title}</Heading.Title>
        <Heading.Breadcrumb>
          <Heading.Breadcrumb.Item as={Link} pathname={RoutePath.Index}>
            {home.Title}
          </Heading.Breadcrumb.Item>
          <Heading.Breadcrumb.Item as={Link} pathname={RoutePath.Servers}>
            {servers.Title}
          </Heading.Breadcrumb.Item>
          <Heading.Breadcrumb.Item active>
            {server.Title}
          </Heading.Breadcrumb.Item>
        </Heading.Breadcrumb>
      </Heading>
    </Fragment>
  );
};

export default ServerDetails;
