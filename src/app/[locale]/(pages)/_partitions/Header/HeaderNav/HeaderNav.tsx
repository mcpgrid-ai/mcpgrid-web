import { FC, Fragment } from 'react';

import { NavbarNavItem } from './HeaderNav.types';
import styles from './HeaderNav.module.scss';

import { Icon, Nav, Navbar } from '@core/uikit';
import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';

export const HeaderNav: FC = async () => {
  const nav: NavbarNavItem[] = [
    {
      href: RoutePath.Servers,
      label: 'Servers',
      icon: 'server',
    },
    {
      href: RoutePath.Faqs,
      label: 'FAQ',
      icon: 'help-circle',
    },
  ];

  return (
    <Fragment>
      <Navbar>
        <Nav>
          {nav.map(({ href, label, icon }) => {
            return (
              <Nav.Item key={href}>
                <Nav.Link as={Link} pathname={href} className={styles.link}>
                  <Icon.Fi name={icon} size={16} />
                  <span className="ms-2 d-none d-md-inline">{label}</span>
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
      </Navbar>
    </Fragment>
  );
};
