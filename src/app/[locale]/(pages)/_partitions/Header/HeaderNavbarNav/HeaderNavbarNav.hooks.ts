import { NavbarNavItem } from './HeaderNavbarNav.types';

import { AppRoutePath } from '@app/common';

export const useNavbarNav = () => {
  const nav: NavbarNavItem[] = [
    {
      href: AppRoutePath.Index,
      label: 'Home',
      icon: 'home',
    },
    {
      href: AppRoutePath.Blog,
      label: 'Blog',
      icon: 'message-square',
    },
    {
      href: AppRoutePath.Faq,
      label: 'FAQ',
      icon: 'help-circle',
    },
  ];

  return { nav };
};
