import { FC, Fragment, PropsWithChildren } from 'react';

import { Tabs } from './_partitions/Tabs';
import { getServerLayoutData } from './layout.utils';

import { Image } from '@network/strapi';
import { Link, notFound } from '@core/navigation';
import {
  Avatar,
  Box,
  Button,
  Card,
  Heading,
  Icon,
  List,
  Row,
  Typography,
} from '@core/uikit';
import { RoutePath } from '@common/constants';
import { getTranslations } from '@core/i18n';
import { Iconify } from '@core/uikit/components/Iconify';

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
          width={48}
          height={48}
        />
      );

    if (server.Category?.Icon)
      return <Iconify name={server.Category?.Icon.iconName} size={40} />;
    return null;
  })();

  return (
    <Fragment>
      <Heading>
        <Heading.Title>{server.Title}</Heading.Title>
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
                      <Avatar size={80}>{avatar}</Avatar>
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <Typography className="m-0">
                          {server.Description}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Row.Col>
                <Row.Col sm="auto" className="order-1 order-sm-2">
                  <div className="d-flex align-items-start justify-content-end gap-2">
                    {repo?.html_url && (
                      <Button
                        as="a"
                        target="_blank"
                        variant="soft-light"
                        href={repo?.html_url}
                      >
                        <Icon.Bx name="logo-git-hub" size={20} />
                      </Button>
                    )}
                    {repo?.homepage && (
                      <Button
                        as="a"
                        target="_blank"
                        variant="soft-light"
                        href={repo?.homepage}
                      >
                        <Icon.Bx name="link" className="me-2" size={20} />
                        {t('actions.homepage')}
                      </Button>
                    )}
                  </div>
                </Row.Col>
              </Row>
              <Tabs slug={slug} />
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
            <Card>
              <Card.Body>
                <Card.Title className="mb-3">{t('forms.details')}</Card.Title>
                <List unstyled>
                  <List.Item>
                    <Box>123</Box>
                  </List.Item>
                  <List.Item>
                    <Box>123</Box>
                  </List.Item>
                  <List.Item>
                    <Box>123</Box>
                  </List.Item>
                </List>
              </Card.Body>
            </Card>
          </Box>
        </Row.Col>
      </Row>
    </Fragment>
  );
};

export default ServerLayout;
