import { FC, Fragment } from 'react';

import { generateCommonMetadata } from '@common/utils';
import { Heading } from '@core/uikit';
import { getTranslations } from '@core/i18n';
import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';

export const generateMetadata = generateCommonMetadata({
  slug: 'dashboard',
});

const Servers: FC = async () => {
  const t = await getTranslations();

  return (
    <Fragment>
      <Heading>
        <Heading.Title>{t('nav.servers')}</Heading.Title>
        <Heading.Breadcrumb>
          <Heading.Breadcrumb.Item as={Link} pathname={RoutePath.Admin}>
            {t('nav.dashboard')}
          </Heading.Breadcrumb.Item>
          <Heading.Breadcrumb.Item active>
            {t('nav.servers')}
          </Heading.Breadcrumb.Item>
        </Heading.Breadcrumb>
      </Heading>
    </Fragment>
  );
};

export default Servers;
