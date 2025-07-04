import { FC } from 'react';

import { getServerDetailsReadmeData } from './page.utils';

import { Card, Markdown } from '@core/uikit';

interface ServerDetailsReadmeProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServerDetailsReadme: FC<ServerDetailsReadmeProps> = async ({
  params,
}) => {
  const { slug } = await params;

  const data = await getServerDetailsReadmeData({
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

export default ServerDetailsReadme;
