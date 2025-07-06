import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import BsCardSubtitle from 'react-bootstrap/CardSubtitle';

type CardSubtitle = PropsWithChildren<{
  className?: string;
}>;

export const CardSubtitle: FC<CardSubtitle> = ({ children, className }) => {
  return (
    <BsCardSubtitle
      className={classNames('text-muted', 'fw-normal', className)}
    >
      {children}
    </BsCardSubtitle>
  );
};
