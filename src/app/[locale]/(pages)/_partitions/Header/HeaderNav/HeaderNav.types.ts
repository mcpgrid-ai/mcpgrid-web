import { RoutePath } from '@common/constants';
import { IconFeatherName } from '@core/uikit';

export interface NavbarNavItem {
  href: RoutePath;
  label: string;
  icon: IconFeatherName;
}
