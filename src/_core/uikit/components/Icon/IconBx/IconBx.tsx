import { FC } from 'react';

import { ICON_BX } from './IconBx.const';
import { IconBxName } from './IconBx.types';

export interface IconBxProps {
  name: IconBxName;
  className?: string;
  size?: number;
}

export const IconBx: FC<IconBxProps> = ({ name, className, size }) => {
  const Component = ICON_BX[name];

  return <Component className={className} size={size} />;
};
