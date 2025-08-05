import { FC } from 'react';

import { ServerDetailsItem } from './ServerDetails.types';

import { getTranslations } from '@core/i18n';
import { Card, Icon, List, Row, Typography } from '@core/uikit';
import { DTO } from '@network/strapi';

interface ServerDetailsProps {
  server: DTO.GetPageServerQuery['servers']['0'];
}

export const ServerDetails: FC<ServerDetailsProps> = async ({ server }) => {
  const t = await getTranslations();

  // const detailsSourceCode: ServerDetailsItem[] = repo?.html_url
  //   ? [
  //       {
  //         href: repo.html_url,
  //         icon: 'logo-git-hub',
  //         label: t('forms.sourceCode'),
  //         value: new URL(repo?.html_url).host,
  //       },
  //     ]
  //   : [];

  const detailsSourceCode: ServerDetailsItem[] = server?.GitHubUrl
    ? [
        {
          href: server?.GitHubUrl,
          icon: 'logo-git-hub',
          label: t('forms.sourceCode'),
          value: new URL(server?.GitHubUrl).host,
        },
      ]
    : [];

  // const detailsHomepage: ServerDetailsItem[] =
  //   repo?.homepage || repo?.html_url
  //     ? [
  //         {
  //           icon: 'globe',
  //           href: repo?.homepage || repo?.html_url,
  //           label: t('forms.homepage'),
  //           value: new URL(repo?.homepage || repo?.html_url).host,
  //         },
  //       ]
  //     : [];

  const detailsHomepage: ServerDetailsItem[] = server?.Homepage
    ? [
        {
          icon: 'globe',
          href: server?.Homepage,
          label: t('forms.homepage'),
          value: new URL(server?.Homepage).host,
        },
      ]
    : [];

  // const detailsOwner: ServerDetailsItem[] = repo?.owner.login
  //   ? [
  //       {
  //         icon: repo?.organization ? 'buildings' : 'user',
  //         label: t('forms.owner'),
  //         value: `@${repo?.owner.login}`,
  //       },
  //     ]
  //   : [];

  const detailsOwner: ServerDetailsItem[] = server?.GitHubOwner
    ? [
        {
          icon: 'user',
          label: t('forms.owner'),
          value: `@${server?.GitHubOwner}`,
        },
      ]
    : [];

  // const detailsLicense: ServerDetailsItem[] = repo?.license
  //   ? [
  //       {
  //         href: repo.license.html_url,
  //         icon: 'balance',
  //         label: t('forms.license'),
  //         value: repo.license.name,
  //       },
  //     ]
  //   : [];

  const detailsLicense: ServerDetailsItem[] = server?.GitHubLicense
    ? [
        {
          icon: 'balance',
          label: t('forms.license'),
          value: server?.GitHubLicense,
        },
      ]
    : [];

  // const detailsLanguage: ServerDetailsItem[] = repo?.language
  //   ? [
  //       {
  //         icon: 'code-alt',
  //         label: t('forms.language'),
  //         value: repo?.language,
  //       },
  //     ]
  //   : [];

  const detailsLanguage: ServerDetailsItem[] = server?.GitHubLanguage
    ? [
        {
          icon: 'code-alt',
          label: t('forms.language'),
          value: server?.GitHubLanguage,
        },
      ]
    : [];

  // const detailsPublished: ServerDetailsItem[] = repo?.created_at
  //   ? [
  //       {
  //         icon: 'calendar-alt',
  //         label: t('forms.published'),
  //         value: new Date(repo.created_at).toLocaleString(),
  //       },
  //     ]
  //   : [];

  const detailsPublished: ServerDetailsItem[] = server?.GitHubPublishedAt
    ? [
        {
          icon: 'calendar-alt',
          label: t('forms.published'),
          value: new Date(server?.GitHubPublishedAt).toLocaleString(),
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
