import { FC } from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';
import { Dropdown, Icon, IMAGES } from '@core/uikit';
import { getSession } from '@core/auth/server';
import { signOut } from '@core/auth/client';
import { getTranslations } from '@core/i18n';
import { UserMenu } from '@common/components';

export const DashboardHeader: FC = async () => {
  const session = await getSession();
  const t = await getTranslations();

  const handleOnSignOut = () =>
    signOut({
      callbackUrl: RoutePath.SignIn,
    });

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
          <UserMenu />
        </div>
      </div>
    </header>
  );
};
