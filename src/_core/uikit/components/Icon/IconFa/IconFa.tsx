import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICON_FA } from './IconFa.const';
import { IconFaName } from './IconFa.types';

export interface IconFaProps {
  name: IconFaName;
  fixedWidth?: boolean;
  width?: number;
  className?: string;
}

export const IconFa: FC<IconFaProps> = ({
  name,
  width,
  className,
  fixedWidth = false,
}) => {
  return (
    <FontAwesomeIcon
      className={className}
      icon={ICON_FA[name]}
      width={width}
      fixedWidth={fixedWidth}
    />
  );
};
