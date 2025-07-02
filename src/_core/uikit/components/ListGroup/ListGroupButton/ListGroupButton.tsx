import { forwardRef, PropsWithChildren } from 'react';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import BsListGroupItem from 'react-bootstrap/ListGroupItem';

type ListGroupButtonProps = PropsWithChildren<{
  active?: boolean;
}>;

// @ts-expect-error x3 error
export const ListGroupButton: BsPrefixRefForwardingComponent<
  'a',
  ListGroupButtonProps
> = forwardRef<HTMLAnchorElement, ListGroupButtonProps>(
  function ListGroupButton({ children, active = false, ...props }, ref) {
    return (
      <BsListGroupItem action active={active} ref={ref} {...props}>
        {children}
      </BsListGroupItem>
    );
  },
);
