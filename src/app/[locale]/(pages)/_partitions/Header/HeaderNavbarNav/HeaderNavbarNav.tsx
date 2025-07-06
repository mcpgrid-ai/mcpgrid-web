import { FC } from 'react';

import { useNavbarNav } from './HeaderNavbarNav.hooks';

import { Icon } from '@core/uikit';
import { Link } from '@core/navigation';

export const HeaderNavbarNav: FC = () => {
  const { nav } = useNavbarNav();

  return (
    <ul className="navbar-nav">
      {nav.map(({ href, label, icon }) => {
        return (
          <li key={href} className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle arrow-none"
              pathname={href}
            >
              <Icon.Fi name={icon} />
              <span data-key="t-dashboards">{label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
