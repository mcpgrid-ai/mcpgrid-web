import { FC } from 'react';

import { Card, Row } from '@core/uikit';
import { Link } from '@app/navigation';
import { RoutePath } from '@app/common';

interface ServerCardProps {
  title?: string;
  slug?: string;
}

export const ServerCard: FC<ServerCardProps> = ({ slug, title }) => {
  return (
    <Link pathname={RoutePath.ServerDetails} params={{ slug }}>
      <Card>
        <Card.Body>
          <Row>
            <Row.Col lg="auto" className="flex-grow-0">
              1
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
