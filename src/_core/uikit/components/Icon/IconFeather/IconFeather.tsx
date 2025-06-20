import { createElement, FC } from 'react';

import { ICON_FEATHER } from './IconFeather.const';
import { IconFeatherName } from './IconFeather.types';

export interface IconFeatherProps {
  name: IconFeatherName;
}

export const IconFeather: FC<IconFeatherProps> = ({ name }) => {
  return createElement(ICON_FEATHER[name]);
};
