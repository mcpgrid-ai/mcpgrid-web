import { FC, PropsWithChildren } from 'react';

import { clsx, ClsxProps } from '../../utils/clsx';

export type BoxProps = PropsWithChildren<ClsxProps>;

export const Box: FC<BoxProps> = ({ children, ...props }) => {
  return <div className={clsx(props)}>{children}</div>;
};
