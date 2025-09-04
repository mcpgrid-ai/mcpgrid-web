'use client';

import { FC, Fragment } from 'react';

import { Heading } from '@core/uikit';
import { useTranslations } from '@core/i18n';
import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';

const CatalogServer: FC = () => {
  const t = useTranslations();

  return (
    <Fragment>
      <Heading>
        <Heading.Title>{t('nav.servers')}</Heading.Title>
        <Heading.Breadcrumb>
          <Heading.Breadcrumb.Item as={Link} pathname={RoutePath.Admin}>
            {t('nav.catalog')}
          </Heading.Breadcrumb.Item>
          <Heading.Breadcrumb.Item active>
            {t('nav.servers')}
          </Heading.Breadcrumb.Item>
        </Heading.Breadcrumb>
      </Heading>
    </Fragment>
  );
};

export default CatalogServer;
