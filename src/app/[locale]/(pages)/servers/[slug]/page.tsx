import { FC } from 'react';

import { generateServerMetadata } from './page.metadata';

import { Card, Markdown } from '@core/uikit';
import { notFound } from '@core/navigation';
import { keystone } from '@network/keystone';

interface ServerDetailsOverviewProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateMetadata = generateServerMetadata({});

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
