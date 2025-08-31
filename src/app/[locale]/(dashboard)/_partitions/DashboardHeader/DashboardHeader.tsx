import { FC } from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';
import { Dropdown, IMAGES } from '@core/uikit';
import { getSession } from '@core/auth/server';

export const DashboardHeader: FC = async () => {
  const session = await getSession();

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
            <Dropdown.Toggle className="btn header-item bg-light-subtle border-start border-end">
              <Image
                src={session?.user.image}
                width={36}
                height={36}
                alt={session?.user.name || ''}
                className="rounded-circle header-profile-user"
              />
              <span className="d-none d-xl-inline-block ms-1 fw-medium">
                {session?.user.name}
              </span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>123</Dropdown.Menu>
          </Dropdown>

          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item bg-light-subtle border-start border-end"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Image
                src={session?.user.image}
                width={36}
                height={36}
                alt={session?.user.name}
              />
              <span className="d-none d-xl-inline-block ms-1 fw-medium">
                {session?.user.name}
              </span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="apps-contacts-profile.html">
                <i className="mdi mdi mdi-face-man font-size-16 align-middle me-1"></i>{' '}
                Profile
              </a>
              <a className="dropdown-item" href="auth-lock-screen.html">
                <i className="mdi mdi-lock font-size-16 align-middle me-1"></i>{' '}
                Lock Screen
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="auth-logout.html">
                <i className="mdi mdi-logout font-size-16 align-middle me-1"></i>{' '}
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
