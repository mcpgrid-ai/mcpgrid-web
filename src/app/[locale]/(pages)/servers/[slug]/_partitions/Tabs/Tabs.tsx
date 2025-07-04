'use client';

import { FC } from 'react';

import { Icon, Nav } from '@core/uikit';
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
          className="d-flex"
        >
          <Icon.Bx name="info-circle" size={20} className="me-2" />
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
          className="d-flex"
        >
          <Icon.Bx name="cog" size={20} className="me-2" />
          {t('nav.tools')}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          pathname={RoutePath.ServerDetailsReadme}
          params={{ slug }}
          value={RoutePath.ServerDetailsReadme}
          active={segment === 'readme'}
          className="d-flex"
        >
          <Icon.Bx name="file" size={20} className="me-2" />
          {t('nav.readme')}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
