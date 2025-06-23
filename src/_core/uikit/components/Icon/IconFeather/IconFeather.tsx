import { createElement, FC } from 'react';

import { ICON_FEATHER } from './IconFeather.const';
import { IconFeatherName } from './IconFeather.types';

export interface IconFeatherProps {
  name: IconFeatherName;
  className?: string;
  size?: number;
}

export const IconFeather: FC<IconFeatherProps> = ({
  name,
  className,
  size,
}) => {
  return createElement(ICON_FEATHER[name], { className, size });
};
