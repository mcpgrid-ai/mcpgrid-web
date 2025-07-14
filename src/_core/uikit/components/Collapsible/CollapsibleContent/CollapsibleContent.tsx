import { FC, PropsWithChildren } from 'react';
import BsAccordionBody from 'react-bootstrap/AccordionBody';

type CollapsibleContentProps = PropsWithChildren;

export const CollapsibleContent: FC<CollapsibleContentProps> = ({
  children,
}) => {
  return <BsAccordionBody>{children}</BsAccordionBody>;
};
