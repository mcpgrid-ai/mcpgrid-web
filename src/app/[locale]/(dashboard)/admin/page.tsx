import { FC, Fragment } from 'react';

import { DashboardInstances } from './_partitions/DashboardInstances';

import { generateCommonMetadata } from '@common/utils';
import { Heading } from '@core/uikit';
import { getTranslations } from '@core/i18n';

export const generateMetadata = generateCommonMetadata({
  slug: 'dashboard',
});

const Dashboard: FC = async () => {
  const t = await getTranslations();

  return (
    <Fragment>
      <Heading>
        <Heading.Title>{t('nav.dashboard')}</Heading.Title>
        <Heading.Breadcrumb>
          <Heading.Breadcrumb.Item active>
            {t('nav.dashboard')}
          </Heading.Breadcrumb.Item>
        </Heading.Breadcrumb>
      </Heading>
      <DashboardInstances />
    </Fragment>
  );
};

export default Dashboard;
