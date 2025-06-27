import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import BsCardText from 'react-bootstrap/CardText';

import styles from './CardText.module.scss';

type CardTextProps = PropsWithChildren<{
  className?: string;
  truncate?: number;
}>;

export const CardText: FC<CardTextProps> = ({
  children,
  className,
  truncate,
}) => {
  return (
    <BsCardText
      style={{ WebkitLineClamp: truncate }}
      className={classNames(className, styles.root, {
        [styles.truncate]: truncate,
      })}
    >
      {children}
    </BsCardText>
  );
};
