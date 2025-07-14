import { PropsWithChildren, ReactElement } from 'react';
import BsAccordion from 'react-bootstrap/Accordion';
import BsAccordionItem from 'react-bootstrap/AccordionItem';

import { CollapsibleHeader } from './CollapsibleHeader';
import { CollapsibleContent } from './CollapsibleContent';

export type CollapsibleProps = PropsWithChildren<{
  id: string;
}>;

interface CollapsibleComponent {
  (props: CollapsibleProps): ReactElement;
  Header: typeof CollapsibleHeader;
  Content: typeof CollapsibleContent;
}

export const Collapsible: CollapsibleComponent = ({ children, id }) => {
  return (
    <BsAccordion>
      <BsAccordionItem eventKey={id}>{children}</BsAccordionItem>
    </BsAccordion>
  );
};

Collapsible.Header = CollapsibleHeader;
Collapsible.Content = CollapsibleContent;
