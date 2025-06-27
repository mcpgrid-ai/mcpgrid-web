import { forwardRef, PropsWithChildren } from 'react';
import BsCard from 'react-bootstrap/Card';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

import { CardBody } from './CardBody';
import { CardTitle } from './CardTitle';
import { CardText } from './CardText';

export type CardProps = PropsWithChildren<{
  classNames?: string;
}>;

type CardComponent = BsPrefixRefForwardingComponent<'div', CardProps> & {
  Body: typeof CardBody;
  Title: typeof CardTitle;
  Text: typeof CardText;
};

// @ts-expect-error x3 error
export const Card: CardComponent = forwardRef(function Card(
  // @ts-expect-error x3 error
  { className, children, ...props },
  ref,
) {
  return (
    // @ts-expect-error x3 error
    <BsCard ref={ref} className={className} {...props}>
      {children}
    </BsCard>
  );
});

Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;
