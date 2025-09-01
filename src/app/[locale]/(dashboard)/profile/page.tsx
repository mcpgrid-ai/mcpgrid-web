import { FC, Fragment } from 'react';

import { generateCommonMetadata } from '@common/utils';
import { Heading } from '@core/uikit';
import { getTranslations } from '@core/i18n';
import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';

export const generateMetadata = generateCommonMetadata({
  slug: 'dashboard',
});

const Dashboard: FC = async () => {
  const t = await getTranslations();

  return (
    <Fragment>
      <Heading>
        <Heading.Title>{t('nav.profile')}</Heading.Title>
        <Heading.Breadcrumb>
          <Heading.Breadcrumb.Item as={Link} pathname={RoutePath.Admin}>
            {t('nav.dashboard')}
          </Heading.Breadcrumb.Item>
          <Heading.Breadcrumb.Item active>
            {t('nav.profile')}
          </Heading.Breadcrumb.Item>
        </Heading.Breadcrumb>
      </Heading>
    </Fragment>
  );
};

export default Dashboard;
