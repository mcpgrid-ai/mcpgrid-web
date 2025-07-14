import { FC, PropsWithChildren } from 'react';

import { clsx, ClsxProps } from '../../utils/clsx';

export type BoxProps = PropsWithChildren<
  ClsxProps & {
    id?: string;
    className?: string;
  }
>;

export const Box: FC<BoxProps> = ({ children, id, className, ...props }) => {
  return (
    <div id={id} className={clsx(props, className)}>
      {children}
    </div>
  );
};
