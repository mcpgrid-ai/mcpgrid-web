import { FC } from 'react';
import Link from 'next/link';

import { useNavbarNav } from './HeaderNavbarNav.hooks';

import { Icon } from '@core/uikit';

export const HeaderNavbarNav: FC = () => {
  const { nav } = useNavbarNav();

  return (
    <ul className="navbar-nav">
      {nav.map(({ href, label, icon }) => {
        return (
          <li key={href} className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle arrow-none"
              href={href}
              role="button"
            >
              <Icon.Feather name={icon} />
              <span data-key="t-dashboards">{label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
