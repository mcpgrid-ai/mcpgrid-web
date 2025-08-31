import { FC } from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';
import { Dropdown, Icon, IMAGES } from '@core/uikit';
import { getSession } from '@core/auth/server';
import { getTranslations } from '@core/i18n';

export const DashboardHeader: FC = async () => {
  const session = await getSession();
  const t = await getTranslations();

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <Link pathname={RoutePath.Admin} className="logo logo-dark">
              <span className="logo-sm">
                <Image
                  src={IMAGES.LOGO}
                  width={24}
                  height={24}
                  alt={process.env.PRODUCT_NAME}
                />
              </span>
              <span className="logo-lg">
                <Image
                  src={IMAGES.LOGO}
                  width={24}
                  height={24}
                  alt={process.env.PRODUCT_NAME}
                />
                <span className="logo-txt">{process.env.PRODUCT_NAME}</span>
              </span>
            </Link>
            <Link pathname={RoutePath.Admin} className="logo logo-light">
              <span className="logo-sm">
                <Image
                  src={IMAGES.LOGO}
                  width={24}
                  height={24}
                  alt={process.env.PRODUCT_NAME}
                />
              </span>
              <span className="logo-lg">
                <Image
                  src={IMAGES.LOGO}
                  width={24}
                  height={24}
                  alt={process.env.PRODUCT_NAME}
                />
                <span className="logo-txt">{process.env.PRODUCT_NAME}</span>
              </span>
            </Link>
          </div>

          <Button
            size="sm"
            variant="header"
            id="vertical-menu-btn"
            className="px-3 font-size-16 header-item"
          ></Button>
        </div>

        <div className="d-flex">
          <Dropdown>
            <Dropdown.Toggle className="header-item bg-light-subtle border-start border-end">
              {session?.user.image && (
                <Image
                  src={session?.user.image}
                  width={36}
                  height={36}
                  alt={session?.user.name || ''}
                  className="rounded-circle header-profile-user"
                />
              )}
              <span className="d-none d-xl-inline-block ms-1 fw-medium">
                {session?.user.name}
              </span>
              <Icon.Bx
                name="chevron-down"
                className="d-none d-xl-inline-block"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>{t('nav.dashboard')}</Dropdown.Item>
              <Dropdown.Item>{t('nav.profile')}</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>{t('actions.logout')}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};
