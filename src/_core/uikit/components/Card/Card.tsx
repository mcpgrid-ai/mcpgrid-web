import { forwardRef, PropsWithChildren } from 'react';
import BsCard from 'react-bootstrap/Card';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import classNames from 'classnames';

import { CardBody } from './CardBody';
import { CardTitle } from './CardTitle';
import { CardText } from './CardText';
import { CardHeader } from './CardHeader';

export type CardProps = PropsWithChildren<{
  classNames?: string;
}>;

type CardComponent = BsPrefixRefForwardingComponent<'div', CardProps> & {
  Body: typeof CardBody;
  Title: typeof CardTitle;
  Text: typeof CardText;
  Heder: typeof CardHeader;
};

// @ts-expect-error x3 error
export const Card: CardComponent = forwardRef(function Card(
  // @ts-expect-error x3 error
  { className, children, ...props },
  ref,
) {
  return (
    // @ts-expect-error x3 error
    <BsCard ref={ref} className={classNames('mb-0', className)} {...props}>
      {children}
    </BsCard>
  );
});

Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;
Card.Heder = CardHeader;
