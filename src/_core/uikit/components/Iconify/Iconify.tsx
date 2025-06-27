import { FC } from 'react';
import { Icon } from '@iconify/react';

export interface IconifyProps {
  name: string;
  size?: number;
}

export const Iconify: FC<IconifyProps> = ({ name, size = 16 }) => {
  return <Icon icon={name} width={size} height={size} />;
};
