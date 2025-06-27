import { FC } from 'react';

import { RoutePath } from '../../constants';

import { Link } from '@core/navigation';
import { Card, Row } from '@core/uikit';
import { Avatar } from '@core/uikit/components/Avatar';

interface ServerCardProps {
  title?: string;
  slug?: string;
}

export const ServerCard: FC<ServerCardProps> = ({ slug, title }) => {
  return (
    <Link pathname={RoutePath.ServerDetails} params={{ slug }}>
      <Card>
        <Card.Body className="px-3 py-3">
          <Row className="gx-3">
            <Row.Col lg="auto" className="flex-grow-0">
              <Avatar>1</Avatar>
            </Row.Col>
            <Row.Col lg="auto" className="flex-grow-1">
              <Card.Title>{title}</Card.Title>
            </Row.Col>
          </Row>
        </Card.Body>
      </Card>
    </Link>
  );
};
