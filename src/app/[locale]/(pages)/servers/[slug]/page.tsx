import { FC } from 'react';

import { Card, Markdown } from '@core/uikit';
import { strapi } from '@network/strapi';
import { notFound } from '@core/navigation';

interface ServerDetailsOverviewProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServerDetailsOverview: FC<ServerDetailsOverviewProps> = async ({
  params,
}) => {
  const { slug } = await params;

  const {
    servers: [server],
  } = await strapi.page.getServerOverview({
    slug,
  });

  if (!server) return notFound();

  return (
    <Card>
      <Card.Body>
        <Markdown>{server.Overview}</Markdown>
      </Card.Body>
    </Card>
  );
};

export default ServerDetailsOverview;
