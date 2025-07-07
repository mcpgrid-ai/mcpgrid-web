import { FC, PropsWithChildren } from 'react';

import { clsx, ClsxProps } from '../../utils/clsx';

export type BoxProps = PropsWithChildren<
  ClsxProps & {
    id?: string;
  }
>;

export const Box: FC<BoxProps> = ({ children, id, ...props }) => {
  return (
    <div id={id} className={clsx(props)}>
      {children}
    </div>
  );
};
