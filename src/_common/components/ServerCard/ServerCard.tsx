import { FC } from 'react';
import classNames from 'classnames';

import { RoutePath } from '../../constants';

import styles from './ServerCard.module.scss';

import { Link } from '@core/navigation';
import { Card, Row } from '@core/uikit';
import { Avatar } from '@core/uikit/components/Avatar';
import { Iconify } from '@core/uikit/components/Iconify';
import { Image } from '@network/strapi';
import { DTO } from '@network/strapi';

interface ServerCardProps {
  className?: string;
  server: DTO.ServerCardFragment | null;
}

export const ServerCard: FC<ServerCardProps> = async ({
  className,
  server,
}) => {
  const slug = server?.Slug;
  const title = server?.Title;
  const description = server?.Description;
  const logo = server?.Logo?.url;
  const icon = server?.Category?.Icon?.iconName;

  const avatar = (() => {
    if (logo) return <Image src={logo} alt={title} className={styles.logo} />;
    if (icon) return <Iconify name={icon} size={20} />;
    return null;
  })();

  return (
    <Card
      as={Link}
      pathname={RoutePath.ServerDetails}
      params={{ slug }}
      className={classNames(styles.root, className)}
    >
      <Card.Body className="px-3 py-3">
        <Row className="gx-3 flex-nowrap">
          <Row.Col xs="auto" className="flex-grow-0">
            <Avatar>{avatar}</Avatar>
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
