import { FC } from 'react';

import { Card, Icon, List, Row, Typography } from '@core/uikit';
import { getTranslations } from '@core/i18n';

interface ServerSettingsProps {
  settings: Array<{
    name: string;
    required: boolean;
    description: string;
    secured: boolean;
  }>;
}

export const ServerSettings: FC<ServerSettingsProps> = async ({ settings }) => {
  const t = await getTranslations();

  return (
    <Card>
      <Card.Body>
        <Card.Title className="mb-3">{t('forms.settings')}</Card.Title>
        <List unstyled>
          {settings.map(({ name, description, required, secured }) => (
            <List.Item key={name}>
              <Row className="gx-2">
                <Row.Col xs="auto">
                  <Icon.Bx size={16} name={secured ? 'key' : 'hash'} />
                </Row.Col>
                <Row.Col xs>
                  <Typography as="h6" className="mb-0">
                    {name}
                    {required && <span className="text-danger">*</span>}
                  </Typography>
                  <Typography className="text-muted">{description}</Typography>
                </Row.Col>
              </Row>
            </List.Item>
          ))}
          {!settings.length ? (
            <List.Item>
              <Row className="gx-2">
                <Row.Col xs>
                  <Typography className="text-muted m-0">
                    {t('noData.noSettingsFound')}
                  </Typography>
                </Row.Col>
              </Row>
            </List.Item>
          ) : null}
        </List>
      </Card.Body>
    </Card>
  );
};
