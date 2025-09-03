import { FC } from 'react';

import { Icon } from '@core/uikit';
import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';
import { getTranslations } from '@core/i18n';

export const DashboardSidebar: FC = async () => {
  const t = await getTranslations();

  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link pathname={RoutePath.Admin}>
                <Icon.Fi name="home" />
                <span>{t('nav.dashboard')}</span>
              </Link>
            </li>

            <li className="menu-title mt-2">{t('nav.catalog')}</li>

            <li>
              <Link pathname={RoutePath.CatalogServers}>
                <Icon.Fi name="server" />
                <span>{t('nav.servers')}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
