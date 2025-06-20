import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICON_FA } from './IconFa.const';
import { IconFaName } from './IconFa.types';

export interface IconFaProps {
  name: IconFaName;
  fixedWidth?: boolean;
  width?: number;
}

export const IconFa: FC<IconFaProps> = ({
  name,
  width,
  fixedWidth = false,
}) => {
  return (
    <FontAwesomeIcon
      icon={ICON_FA[name]}
      width={width}
      fixedWidth={fixedWidth}
    />
  );
};
