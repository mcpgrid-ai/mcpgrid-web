import { FC, Fragment, PropsWithChildren } from 'react';
import Image from 'next/image';

import { ServerTabs } from './_partitions/ServerTabs';
import { getServerLayoutData } from './layout.utils';
import { ServerDetails } from './_partitions/ServerDetails';
import { ServerSettings } from './_partitions/ServerSettings';

import { Link, notFound } from '@core/navigation';
import {
  Avatar,
  Box,
  Button,
  Card,
  Heading,
  Icon,
  Markdown,
  Row,
  Tooltip,
} from '@core/uikit';
import { RoutePath } from '@common/constants';
import { getTranslations } from '@core/i18n';

type ServerLayoutProps = PropsWithChildren<{
  params: Promise<{
    slug: string;
  }>;
}>;

const ServerLayout: FC<ServerLayoutProps> = async ({ params, children }) => {
  const { slug } = await params;

  const t = await getTranslations();

  const { server, servers, home, repo } = await getServerLayoutData({
    slug,
  });

  if (!server || !servers || !home) return notFound();

  const avatar = (() => {
    if (server.Logo?.url)
      return (
        <Image
          src={server.Logo?.url}
          alt={server.Title}
          width={64}
          height={64}
        />
      );

    if (server.Category?.Icon)
      return (
        <Icon.Svg
          size={40}
          icon={server.Category?.Icon.iconData}
          width={server.Category?.Icon.width}
          height={server.Category?.Icon.height}
        />
      );

    return null;
  })();

  return (
    <Fragment>
      <Heading>
        <Heading.Title>
          {server.Title}
          {server.IsOfficial && (
            <Tooltip content={t('forms.officialVendor')} className="ms-1">
              <Icon.Bx
                name="solid-badge-check"
                className="text-primary"
                size={20}
              />
            </Tooltip>
          )}
        </Heading.Title>
        <Heading.Breadcrumb>
          <Heading.Breadcrumb.Item as={Link} pathname={RoutePath.Index}>
            {home.Title}
          </Heading.Breadcrumb.Item>
          <Heading.Breadcrumb.Item as={Link} pathname={RoutePath.Servers}>
            {servers.Title}
          </Heading.Breadcrumb.Item>
          <Heading.Breadcrumb.Item active>
            {server.Title}
          </Heading.Breadcrumb.Item>
        </Heading.Breadcrumb>
      </Heading>
      <Row>
        <Row.Col xl={9} lg={8}>
          <Card className="mb-4">
            <Card.Body>
              <Row>
                <Row.Col sm className="order-2 order-sm-1">
                  <div className="d-flex align-items-start mt-3 mt-sm-0">
                    <div className="flex-shrink-0 me-3">
                      <Avatar size={64}>{avatar}</Avatar>
                    </div>
                    <div className="flex-grow-1">
                      <Markdown>{server.Description}</Markdown>
                    </div>
                  </div>
                </Row.Col>
                <Row.Col sm="auto" className="order-1 order-sm-2">
                  <div className="d-flex align-items-start justify-content-end gap-2">
                    <Button
                      as="a"
                      target="_blank"
                      variant="soft-light"
                      href={server.Homepage}
                    >
                      <Icon.Bx name="logo-git-hub" size={20} />
                    </Button>
                    <Button
                      as="a"
                      target="_blank"
                      variant="soft-light"
                      href={server.GitHubUrl}
                    >
                      <Icon.Bx name="link" className="me-2" size={20} />
                      {t('actions.homepage')}
                    </Button>
                  </div>
                </Row.Col>
              </Row>
              <ServerTabs slug={slug} />
            </Card.Body>
          </Card>
          {children}
        </Row.Col>
        <Row.Col xl={3} lg={4}>
          <Box d="grid" gap={3}>
            <Button size="lg" as={Link} pathname={RoutePath.Dashboard}>
              {t('actions.startServer')}
              <Icon.Bx name="rocket" size={18} className="ms-2" />
            </Button>
            <ServerSettings settings={server.Settings} />
            <ServerDetails server={server} repo={repo} />
          </Box>
        </Row.Col>
      </Row>
      <Row className="mt-5" />
    </Fragment>
  );
};

export default ServerLayout;
