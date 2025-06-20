import { NavbarNavItem } from './HeaderNavbarNav.types';

import { AppRoutePath } from '@app/common';

export const useNavbarNav = () => {
  const nav: NavbarNavItem[] = [
    {
      href: AppRoutePath.Index,
      label: 'Home',
    },
    {
      href: AppRoutePath.Blog,
      label: 'Blog',
    },
    {
      href: AppRoutePath.Faq,
      label: 'FAQ',
    },
  ];

  return { nav };
};
