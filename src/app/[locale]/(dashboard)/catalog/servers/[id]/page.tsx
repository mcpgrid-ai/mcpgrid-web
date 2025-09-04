'use client';

import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';

import { ServerLayoutContext } from './layout.context';

import { Card, Markdown } from '@core/uikit';

const ServerDetailsOverview: FC = () => {
  const overview = useContextSelector(
    ServerLayoutContext,
    ({ server }) => server?.overview,
  );

  return (
    <Card>
      <Card.Body>
        <Markdown>{overview}</Markdown>
      </Card.Body>
    </Card>
  );
};

export default ServerDetailsOverview;
