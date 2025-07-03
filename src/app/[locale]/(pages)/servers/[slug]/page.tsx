import { FC } from 'react';

import { Card } from '@core/uikit';
import { getTranslations } from '@core/i18n';

interface ServerDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServerDetails: FC<ServerDetailsProps> = async ({ params }) => {
  const { slug } = await params;
  const t = await getTranslations();

  return (
    <Card>
      <Card.Heder>
        <Card.Title>{t('nav.overview')}</Card.Title>
      </Card.Heder>
      <Card.Body>{slug}</Card.Body>
    </Card>
  );
};

export default ServerDetails;
