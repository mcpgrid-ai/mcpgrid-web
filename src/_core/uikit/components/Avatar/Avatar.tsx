import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import { Variant } from '../../types';

import { AvatarShape } from './Avatar.types';

export type AvatarProps = PropsWithChildren<{
  className?: string;
  variant?: Variant;
  size?: number;
  shape?: AvatarShape;
}>;

export const Avatar: FC<AvatarProps> = ({
  children,
  variant = 'secondary',
  className,
  size = 48,
  shape = 'rounded-circle',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={classNames(
        shape,
        `bg-${variant}`,
        `text-bg-${variant}`,
        'd-flex',
        'align-items-center',
        'justify-content-center',
        className,
      )}
    >
      {children}
    </div>
  );
};
