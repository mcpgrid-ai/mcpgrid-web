import { FC } from 'react';

import { ICON_FI } from './IconFi.const';
import { IconFiName } from './IconFi.types';

export interface IconFeatherProps {
  name: IconFiName;
  className?: string;
  size?: number;
}

export const IconFi: FC<IconFeatherProps> = ({ name, className, size }) => {
  const Component = ICON_FI[name];

  return <Component className={className} size={size} />;
};
