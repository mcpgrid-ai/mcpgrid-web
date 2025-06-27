import { PropsWithChildren, ReactElement } from 'react';
import BsCard from 'react-bootstrap/Card';

import { CardBody } from './CardBody';
import { CardTitle } from './CardTitle';

export type CardProps = PropsWithChildren<{
  classNames?: string;
}>;

interface CardComponent {
  (props: CardProps): ReactElement;
  Body: typeof CardBody;
  Title: typeof CardTitle;
}

export const Card: CardComponent = ({ children, classNames }) => {
  return <BsCard className={classNames}>{children}</BsCard>;
};

Card.Body = CardBody;
Card.Title = CardTitle;
