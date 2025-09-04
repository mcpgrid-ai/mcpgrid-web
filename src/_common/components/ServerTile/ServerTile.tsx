import { FC } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import { RoutePath } from '../../constants';
import styles from '../components.module.scss';

import { Link } from '@core/navigation';
import { Card, Row, Avatar, Icon, Tooltip } from '@core/uikit';
import { DTO } from '@network/api';
import { useTranslations } from '@core/i18n';

interface ServerTileProps {
  className?: string;
  server: DTO.ServerItem;
}

export const ServerTile: FC<ServerTileProps> = ({
  className,
  server: { id, title, description, logo, isOfficial, owner, icon },
}) => {
  const t = useTranslations();

  const avatar = (() => {
    if (logo)
      return <Image src={logo} alt={title || ''} width={48} height={48} />;

    if (icon)
      return <Image src={icon} alt={title || ''} width={20} height={20} />;

    return null;
  })();

  return (
    <Card
      as={Link}
      pathname={RoutePath.CatalogServerDetails}
      params={{ id }}
      className={classNames(styles.serverCard, className)}
    >
      <Card.Body className="px-3 py-3">
        <Row className="gx-3 flex-nowrap">
          <Row.Col xs="auto">
            <Avatar>{avatar}</Avatar>
          </Row.Col>
          <Row.Col xs>
            <Card.Title className="mb-1">
              {title}
              {isOfficial && (
                <Tooltip content={t('forms.officialVendor')} className="ms-1">
                  <Icon.Bx
                    name="solid-badge-check"
                    className="text-primary"
                    size={18}
                  />
                </Tooltip>
              )}
            </Card.Title>
            <Card.Subtitle className="mb-1">
              {t('values.byOwner', {
                value: owner || '',
              })}
            </Card.Subtitle>
            <Card.Text truncate={3}>{description}</Card.Text>
          </Row.Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
