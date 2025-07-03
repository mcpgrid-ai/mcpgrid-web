import { FC, Fragment, PropsWithChildren } from 'react';

import { Tabs } from './_partitions/Tabs';

import { strapi, Image } from '@network/strapi';
import { Link, notFound } from '@core/navigation';
import {
  Avatar,
  Button,
  Card,
  Heading,
  Icon,
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
  const [t, { slug }] = await Promise.all([getTranslations(), params]);

  const {
    pages,
    servers: [server],
  } = await strapi.page.getServer({
    slug: ['home', 'servers'],
    server: slug,
  });

  const servers = pages.find((item) => item && item.Slug === 'servers');

  const home = pages.find((item) => item && item.Slug === 'home');

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

                        {/* <div className="d-flex flex-wrap align-items-center gap-2 gap-lg-3 text-muted font-size-14">
                          <div>
                            <Icon.Bx
                              name="code-alt"
                              size={20}
                              className="me-2"
                            />
                            {t.rich('values.developer', {
                              value: 'test',
                              styled: (chunks) => (
                                <Link pathname="/" target="_blank">
                                  @{chunks}
                                </Link>
                              ),
                            })}
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </Row.Col>
                <Row.Col sm="auto" className="order-1 order-sm-2">
                  <div className="d-flex align-items-start justify-content-end gap-2">
                    {server.GitHubUrl && (
                      <Button
                        as="a"
                        target="_blank"
                        variant="soft-light"
                        href={server.GitHubUrl}
                      >
                        <Icon.Bx name="logo-git-hub" size={20} />
                      </Button>
                    )}
                    {server.HomepageUrl && (
                      <Button
                        as="a"
                        target="_blank"
                        variant="soft-light"
                        href={server.HomepageUrl}
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
          <div className="d-grid gap-3">
            <Button size="lg" as={Link} pathname={RoutePath.Dashboard}>
              {t('actions.startServer')}
              <Icon.Bx name="rocket" size={18} className="ms-2" />
            </Button>
            <Card>
              <Card.Body>123</Card.Body>
            </Card>
          </div>
        </Row.Col>
      </Row>
    </Fragment>
  );
};

export default ServerLayout;
