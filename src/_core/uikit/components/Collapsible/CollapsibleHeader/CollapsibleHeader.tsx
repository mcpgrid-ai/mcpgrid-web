import { FC, PropsWithChildren } from 'react';
import BsAccordionHeader from 'react-bootstrap/AccordionHeader';

type CollapsibleHeaderProps = PropsWithChildren;

export const CollapsibleHeader: FC<CollapsibleHeaderProps> = ({ children }) => {
  return <BsAccordionHeader>{children}</BsAccordionHeader>;
};
