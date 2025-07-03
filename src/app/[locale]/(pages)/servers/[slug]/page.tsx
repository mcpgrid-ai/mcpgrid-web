import { FC } from 'react';

import { getServerDetailsOverviewData } from './page.utils';

import { Card, Markdown } from '@core/uikit';

interface ServerDetailsOverviewProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServerDetailsOverview: FC<ServerDetailsOverviewProps> = async ({
  params,
}) => {
  const { slug } = await params;

  const data = await getServerDetailsOverviewData({
    slug,
  });

  if (!data?.readme || typeof data?.readme !== 'string') return null;

  return (
    <Card>
      <Card.Body>
        <Markdown>{data?.readme}</Markdown>
      </Card.Body>
    </Card>
  );
};

export default ServerDetailsOverview;
