import { FC } from 'react';

import { ICON_FA } from './IconFa.const';
import { IconFaName } from './IconFa.types';

export interface IconFaProps {
  name: IconFaName;
  className?: string;
  size?: number;
}

export const IconFa: FC<IconFaProps> = ({ name, className, size }) => {
  const Component = ICON_FA[name];

  return <Component className={className} size={size} />;
};
