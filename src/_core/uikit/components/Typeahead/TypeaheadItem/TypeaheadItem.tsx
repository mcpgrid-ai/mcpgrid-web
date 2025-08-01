import { forwardRef, PropsWithChildren } from 'react';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import { DropdownItem } from 'react-bootstrap';
import { useItem } from 'react-bootstrap-typeahead';
import { useContext } from 'use-context-selector';

import { TypeaheadItemContext } from './TypeaheadItem.context';

type TypeaheadItemProps = PropsWithChildren;

// @ts-expect-error x3 error
export const TypeaheadItem: BsPrefixRefForwardingComponent<
  'a',
  TypeaheadItemProps
> = forwardRef<HTMLAnchorElement, TypeaheadItemProps>(function NavLink(
  { children, ...props },
  ref,
) {
  const { option, position } = useContext(TypeaheadItemContext);

  const other = useItem({ option, position });

  return (
    // @ts-expect-error x3 error
    <DropdownItem
      // @ts-expect-error x3 error
      ref={ref}
      className="px-2 py-2"
      {...props}
      {...other}
    >
      {children}
    </DropdownItem>
  );
});
