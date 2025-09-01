import { FC } from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';
import { IMAGES } from '@core/uikit';
import { UserMenu } from '@common/components';

export const DashboardHeader: FC = async () => {
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
