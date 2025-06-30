import { forwardRef, PropsWithChildren } from 'react';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import BsListGroupItem from 'react-bootstrap/ListGroupItem';

type ListGroupButtonProps = PropsWithChildren<{
  active?: boolean;
}>;

// @ts-expect-error x3 error
export const ListGroupButton: BsPrefixRefForwardingComponent<
  'button',
  ListGroupButtonProps
> = forwardRef<HTMLButtonElement, ListGroupButtonProps>(
  function ListGroupButton({ children, active = false, ...props }) {
    return (
      <BsListGroupItem action active={active} {...props}>
        {children}
      </BsListGroupItem>
    );
  },
);
