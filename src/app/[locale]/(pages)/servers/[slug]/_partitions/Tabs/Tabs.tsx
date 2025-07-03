'use client';

import { FC } from 'react';

import { Nav } from '@core/uikit';
import { Link, useRoute } from '@core/navigation';
import { RoutePath } from '@common/constants';
import { useTranslations } from '@core/i18n';

interface TabsProps {
  slug: string;
}

export const Tabs: FC<TabsProps> = ({ slug }) => {
  const t = useTranslations();
  const [{ segment }] = useRoute();

  return (
    <Nav
      variant="tabs"
      className="mt-4 border-top nav-tabs-custom card-header-tabs"
    >
      <Nav.Item>
        <Nav.Link
          as={Link}
          pathname={RoutePath.ServerDetails}
          params={{ slug }}
          value={RoutePath.ServerDetails}
          active={!segment}
        >
          {t('nav.overview')}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          pathname={RoutePath.ServerDetailsTools}
          params={{ slug }}
          value={RoutePath.ServerDetailsTools}
          active={segment === 'tools'}
        >
          {t('nav.tools')}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
