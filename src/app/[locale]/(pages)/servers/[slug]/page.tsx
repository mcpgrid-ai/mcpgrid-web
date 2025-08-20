import { FC } from 'react';

import { Card, Markdown } from '@core/uikit';
import { notFound } from '@core/navigation';
import { keystone } from '@network/keystone';

interface ServerDetailsOverviewProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServerDetailsOverview: FC<ServerDetailsOverviewProps> = async ({
  params,
}) => {
  const { slug } = await params;

  const { servers } = await keystone.pages.getServerOverview({
    slug,
  });

  const server = servers?.find(({ slug: id }) => id === slug);

  if (!server) return notFound();

  return (
    <Card>
      <Card.Body>
        <Markdown>{server.overview}</Markdown>
      </Card.Body>
    </Card>
  );
};

export default ServerDetailsOverview;

export { generateMetadata } from './page.metadata';
