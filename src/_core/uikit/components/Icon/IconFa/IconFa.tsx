import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICON_FA } from './IconFa.const';
import { IconFaName } from './IconFa.types';

export interface IconFaProps {
  name: IconFaName;
  fixedWidth?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

export const IconFa: FC<IconFaProps> = ({
  name,
  width,
  className,
  height,
  fixedWidth = false,
}) => {
  return (
    <FontAwesomeIcon
      className={className}
      icon={ICON_FA[name]}
      width={width}
      hanging={height}
      fixedWidth={fixedWidth}
    />
  );
};
