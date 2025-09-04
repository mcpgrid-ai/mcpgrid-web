import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';

import { ServerLayoutContext } from '../../layout.context';

import { ServerDetailsItem } from './ServerDetails.types';

import { useTranslations } from '@core/i18n';
import { Card, Icon, List, Row, Typography } from '@core/uikit';

export const ServerDetails: FC = () => {
  const t = useTranslations();

  const server = useContextSelector(
    ServerLayoutContext,
    ({ server }) => server,
  );

  console.log(server);

  const detailsSourceCode: ServerDetailsItem[] = server?.githubUrl
    ? [
        {
          href: server?.githubUrl,
          icon: 'logo-git-hub',
          label: t('forms.sourceCode'),
          value: new URL(server?.githubUrl).host,
        },
      ]
    : [];

  const detailsHomepage: ServerDetailsItem[] = server?.homepage
    ? [
        {
          icon: 'globe',
          href: server?.homepage,
          label: t('forms.homepage'),
          value: new URL(server?.homepage).host,
        },
      ]
    : [];

  const detailsOwner: ServerDetailsItem[] = server?.githubOwner
    ? [
        {
          icon: 'user',
          label: t('forms.owner'),
          value: `@${server?.githubOwner}`,
        },
      ]
    : [];

  const detailsLicense: ServerDetailsItem[] = server?.githubLicense
    ? [
        {
          icon: 'balance',
          label: t('forms.license'),
          value: server?.githubLicense,
        },
      ]
    : [];

  const detailsLanguage: ServerDetailsItem[] = server?.githubLanguage
    ? [
        {
          icon: 'code-alt',
          label: t('forms.language'),
          value: server?.githubLanguage,
        },
      ]
    : [];

  const detailsPublished: ServerDetailsItem[] = server?.githubPublishedAt
    ? [
        {
          icon: 'calendar-alt',
          label: t('forms.published'),
          value: new Date(server?.githubPublishedAt).toLocaleString(),
        },
      ]
    : [];

  const details = [
    ...detailsSourceCode,
    ...detailsHomepage,
    ...detailsOwner,
    ...detailsLanguage,
    ...detailsLicense,
    ...detailsPublished,
  ];

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
                  <Typography>
                    {href ? (
                      <a href={href} target="_blank">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </Typography>
                </Row.Col>
              </Row>
            </List.Item>
          ))}
        </List>
      </Card.Body>
    </Card>
  );
};
