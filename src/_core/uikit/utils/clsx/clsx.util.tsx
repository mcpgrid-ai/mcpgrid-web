import classNames from 'classnames';

import { ClsxProps } from './clsx.types';

export const clsx = (props: ClsxProps) => {
  return classNames(
    ...Object.entries(props).map(([key, value]) => `${key}-${value}`),
  );
};
