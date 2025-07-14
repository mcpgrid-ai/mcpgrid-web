import { FC, PropsWithChildren } from 'react';
import BsBadge, { BadgeProps as BsBadgeProps } from 'react-bootstrap/Badge';

export type BadgeProps = PropsWithChildren<{
  bg?: BsBadgeProps['bg'];
  className?: string;
}>;

export const Badge: FC<BadgeProps> = ({ children, bg, className }) => {
  return (
    <BsBadge bg={bg} className={className}>
      {children}
    </BsBadge>
  );
};
