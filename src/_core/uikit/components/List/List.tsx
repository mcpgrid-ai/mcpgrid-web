import classNames from 'classnames';
import { PropsWithChildren, ReactElement } from 'react';

import { ListItem } from './ListItem';

export type ListProps = PropsWithChildren<{
  unstyled?: boolean;
}>;

interface ListComponent {
  (props: ListProps): ReactElement;
  Item: typeof ListItem;
}

export const List: ListComponent = ({ children, unstyled }) => {
  return (
    <ul
      className={classNames('mb-0', {
        'list-unstyled': unstyled,
      })}
    >
      {children}
    </ul>
  );
};

List.Item = ListItem;
