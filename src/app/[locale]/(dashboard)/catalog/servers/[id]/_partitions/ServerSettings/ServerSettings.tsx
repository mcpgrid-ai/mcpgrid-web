import { FC } from 'react';
import { orderBy } from 'lodash';
import { useContextSelector } from 'use-context-selector';

import { ServerLayoutContext } from '../../layout.context';

import { Card, Icon, List, Row, Typography } from '@core/uikit';
import { useTranslations } from '@core/i18n';

export const ServerSettings: FC = () => {
  const t = useTranslations();

  const settings = useContextSelector(
    ServerLayoutContext,
    ({ server }) => server?.settings,
  );

  return (
    <Card>
      <Card.Body>
        <Card.Title className="mb-3">{t('forms.settings')}</Card.Title>
        <List unstyled>
          {orderBy(settings, ['secured'], ['desc']).map(
            ({ name, description, required, secured }) => (
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
                    <Typography className="text-muted">
                      {description}
                    </Typography>
                  </Row.Col>
                </Row>
              </List.Item>
            ),
          )}
          {!settings?.length ? (
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
