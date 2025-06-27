import { FC } from 'react';

import { RoutePath } from '../../constants';

import styles from './ServerCard.module.scss';

import { Link } from '@core/navigation';
import { Card, Row } from '@core/uikit';
import { Avatar } from '@core/uikit/components/Avatar';

interface ServerCardProps {
  description?: string | null;
  title?: string;
  slug?: string;
}

export const ServerCard: FC<ServerCardProps> = ({
  slug,
  title,
  description,
}) => {
  return (
    <Card
      as={Link}
      pathname={RoutePath.ServerDetails}
      params={{ slug }}
      className={styles.root}
    >
      <Card.Body className="px-3 py-3">
        <Row className="gx-3 flex-nowrap">
          <Row.Col lg="auto" className="flex-grow-0">
            <Avatar>1</Avatar>
          </Row.Col>
          <Row.Col className="flex-grow-1">
            <Card.Title>{title}</Card.Title>
            <Card.Text truncate={3}>{description}</Card.Text>
          </Row.Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
