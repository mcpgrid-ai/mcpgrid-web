'use client';

import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

import { ServerDetails } from './_partitions/ServerDetails';
import { ServerSettings } from './_partitions/ServerSettings';
import { ServerLayoutContext } from './layout.context';

import { Link, useRoute } from '@core/navigation';
import {
  Avatar,
  Box,
  Button,
  Card,
  Heading,
  Icon,
  Markdown,
  Nav,
  Row,
  Tooltip,
} from '@core/uikit';
import { RoutePath } from '@common/constants';
import { useTranslations } from '@core/i18n';
import { useGetServer } from '@network/api';

const ServerLayout: FC<PropsWithChildren> = ({ children }) => {
  const [
    {
      segment,
      params: { id },
    },
  ] = useRoute<{ id: string }>();

  const { isFetching, data: server } = useGetServer(id);

  const t = useTranslations();

  const avatar = (() => {
    if (server?.logo)
      return (
        <Image
          src={server.logo}
          alt={server?.title || ''}
          width={64}
          height={64}
        />
      );
    if (server?.icon)
      return (
        <Image
          src={server.icon}
          alt={server?.title || ''}
          width={40}
          height={40}
        />
      );
    return null;
  })();

  return (
    <ServerLayoutContext.Provider value={{ isFetching, server }}>
      <Heading>
        <Heading.Title>
          {server?.title}
          {server?.isOfficial && (
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
          <Heading.Breadcrumb.Item>{t('nav.catalog')}</Heading.Breadcrumb.Item>
          <Heading.Breadcrumb.Item
            as={Link}
            pathname={RoutePath.CatalogServers}
          >
            {t('nav.servers')}
          </Heading.Breadcrumb.Item>
          <Heading.Breadcrumb.Item active>
            {server?.title}
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
                      <Markdown>{server?.description}</Markdown>
                    </div>
                  </div>
                </Row.Col>
                <Row.Col sm="auto" className="order-1 order-sm-2">
                  <div className="d-flex align-items-start justify-content-end gap-2">
                    {server?.homepage && (
                      <Button
                        as="a"
                        target="_blank"
                        variant="soft-light"
                        href={server.homepage}
                      >
                        <Icon.Bx name="logo-git-hub" size={20} />
                      </Button>
                    )}
                    {server?.githubUrl && (
                      <Button
                        as="a"
                        target="_blank"
                        variant="soft-light"
                        href={server.githubUrl}
                      >
                        <Icon.Bx name="link" className="me-2" size={20} />
                        {t('actions.homepage')}
                      </Button>
                    )}
                  </div>
                </Row.Col>
              </Row>
              <Nav
                variant="tabs"
                className="mt-4 border-top nav-tabs-custom card-header-tabs"
              >
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    pathname={RoutePath.CatalogServerDetails}
                    params={{ id }}
                    value={RoutePath.ServerDetails}
                    active={!segment}
                    className="d-flex"
                  >
                    <Icon.Bx name="info-circle" size={20} className="me-2" />
                    {t('nav.overview')}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    pathname={RoutePath.CatalogServerDetailsTools}
                    params={{ id }}
                    value={RoutePath.ServerDetailsTools}
                    active={segment === 'tools'}
                    className="d-flex"
                  >
                    <Icon.Bx name="cog" size={20} className="me-2" />
                    {t('nav.tools')}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
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
            <ServerSettings />
            <ServerDetails />
          </Box>
        </Row.Col>
      </Row>
      <Row className="mt-5" />
    </ServerLayoutContext.Provider>
  );
};

export default ServerLayout;
