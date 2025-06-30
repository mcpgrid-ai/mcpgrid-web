import { forwardRef, PropsWithChildren } from 'react';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import BsListGroup, {
  ListGroupProps as BsListGroupProps,
} from 'react-bootstrap/ListGroup';

import { ListGroupButton } from './ListGroupButton';

export type ListGroupProps = PropsWithChildren<{
  variant?: BsListGroupProps['variant'];
}>;

type ListGroupComponent = BsPrefixRefForwardingComponent<
  'div',
  ListGroupProps
> & {
  Button: typeof ListGroupButton;
};

// @ts-expect-error x3 error
export const ListGroup: ListGroupComponent = forwardRef<
  HTMLDivElement,
  ListGroupProps
>(function ListGroup({ children, variant, ...props }) {
  return (
    <BsListGroup variant={variant} {...props}>
      {children}
    </BsListGroup>
  );
});

ListGroup.Button = ListGroupButton;
