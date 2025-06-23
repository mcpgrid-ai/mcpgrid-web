import { NavbarNavItem } from './HeaderNavbarNav.types';

import { RoutePath } from '@app/common';

export const useNavbarNav = () => {
  const nav: NavbarNavItem[] = [
    {
      href: RoutePath.Index,
      label: 'Home',
      icon: 'home',
    },
    {
      href: RoutePath.Blog,
      label: 'Blog',
      icon: 'message-square',
    },
    {
      href: RoutePath.Faqs,
      label: 'FAQ',
      icon: 'help-circle',
    },
  ];

  return { nav };
};
