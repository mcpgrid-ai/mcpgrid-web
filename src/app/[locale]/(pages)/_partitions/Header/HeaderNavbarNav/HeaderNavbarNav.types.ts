import { AppRoutePath } from '@app/common';
import { IconFeatherName } from '@core/uikit';

export interface NavbarNavItem {
  href: AppRoutePath;
  label: string;
  icon: IconFeatherName;
}
