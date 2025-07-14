import classNames, { ArgumentArray } from 'classnames';
import { kebabCase } from 'lodash';

import { ClsxProps } from './clsx.types';

export const clsx = (props: ClsxProps, ...args: ArgumentArray) => {
  return classNames(
    ...Object.entries(props).map(
      ([key, value]) => `${kebabCase(key)}-${value}`,
    ),
    ...args,
  );
};
