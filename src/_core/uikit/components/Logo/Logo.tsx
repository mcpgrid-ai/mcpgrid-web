import { FC } from 'react';
import Image from 'next/image';

import { LOGO } from './Logo.const';
import { LogoName } from './Logo.types';

export interface LogoProps {
  name: LogoName;
  className?: string;
  size?: number;
}

export const Logo: FC<LogoProps> = ({ name, className, size = 20 }) => {
  return (
    <Image
      src={LOGO[name].src}
      width={size}
      height={size}
      alt={name}
      className={className}
    />
  );
};
