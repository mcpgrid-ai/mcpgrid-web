import { FC } from 'react';

import { ServerDetailsItem } from './ServerDetails.types';

import { github } from '@network/github';
import { getTranslations } from '@core/i18n';
import { Card, Icon, List, Row, Typography } from '@core/uikit';

interface ServerDetailsProps {
  repo: Awaited<ReturnType<typeof github.repo.getByUrl>> | null;
}

export const ServerDetails: FC<ServerDetailsProps> = async ({ repo }) => {
  const t = await getTranslations();

  const detailsSourceCode: ServerDetailsItem[] = repo?.html_url
    ? [
        {
          href: repo.html_url,
          icon: 'logo-git-hub',
          label: t('forms.sourceCode'),
          value: new URL(repo?.html_url).host,
        },
      ]
    : [];

  const detailsHomepage: ServerDetailsItem[] =
    repo?.homepage || repo?.html_url
      ? [
          {
            icon: 'link',
            href: repo?.homepage || repo?.html_url,
            label: t('forms.homepage'),
            value: new URL(repo?.homepage || repo?.html_url).host,
          },
        ]
      : [];

  const details = [...detailsSourceCode, ...detailsHomepage];

  return (
    <Card>
      <Card.Body>
        <Card.Title className="mb-3">{t('forms.details')}</Card.Title>
        <List unstyled>
          {details.map(({ label, value, icon, href }) => (
            <List.Item key={label}>
              <Row className="gx-2">
                <Row.Col xs="auto">
                  <Icon.Bx size={16} name={icon} />
                </Row.Col>
                <Row.Col xs>
                  <Typography as="h6" className="mb-0">
                    {label}
                  </Typography>
                  {href && (
                    <Typography>
                      <Typography as="a" href={href} target="_blank">
                        {value}
                      </Typography>
                    </Typography>
                  )}
                </Row.Col>
              </Row>
            </List.Item>
          ))}
        </List>
      </Card.Body>
    </Card>
  );
};
