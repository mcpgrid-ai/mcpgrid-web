import { RoutePath } from '@app/common';
import { IconFeatherName } from '@core/uikit';

export interface NavbarNavItem {
  href: RoutePath;
  label: string;
  icon: IconFeatherName;
}
