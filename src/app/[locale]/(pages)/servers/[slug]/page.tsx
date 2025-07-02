import { FC, Fragment } from 'react';

import { strapi } from '@network/strapi';
import { Link, notFound } from '@core/navigation';
import { Button, Card, Heading, Icon, Row } from '@core/uikit';
import { RoutePath } from '@common/constants';
import { getTranslations } from '@core/i18n';

interface ServerDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServerDetails: FC<ServerDetailsProps> = async ({ params }) => {
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
        <Row.Col md={9}>1</Row.Col>
        <Row.Col md={3} className="d-grid gap-3">
          <Button size="lg" as={Link} pathname={RoutePath.Dashboard}>
            {t('actions.startServer')}
            <Icon.Fa name="rocket" className="ms-2" />
          </Button>
          <Card>
            <Card.Body>123</Card.Body>
          </Card>
        </Row.Col>
      </Row>
    </Fragment>
  );
};

export default ServerDetails;
