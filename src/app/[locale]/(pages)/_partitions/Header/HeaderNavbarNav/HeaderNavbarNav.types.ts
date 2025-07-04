import { RoutePath } from '@common/constants';
import { IconFiName } from '@core/uikit';

export interface NavbarNavItem {
  href: RoutePath;
  label: string;
  icon: IconFiName;
}
