import { NavbarNavItem } from './HeaderNavbarNav.types';

import { RoutePath } from '@common/constants';

export const useNavbarNav = () => {
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

  return { nav };
};
