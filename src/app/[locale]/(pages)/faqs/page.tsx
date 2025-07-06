import { Metadata } from 'next';
import { FC, Fragment } from 'react';
import { padStart } from 'lodash';

import { RoutePath } from '@common/constants';
import { Link } from '@core/navigation';
import { getTranslations } from '@core/i18n';
import { strapi } from '@network/strapi';
import { Button, Card, Heading, Icon, Row, Typography } from '@core/uikit';

const Faq: FC = async () => {
  const {
    data: { faqs: list, social, pages },
  } = await strapi.page.getFaqs({
    slug: ['faqs', 'home'],
  });

  const t = await getTranslations();

  const faqs = pages.find((item) => item && item.Slug === 'faqs');

  const home = pages.find((item) => item && item.Slug === 'home');

  return (
    <Fragment>
      <Heading>
        <Heading.Title>{faqs?.Title}</Heading.Title>
        <Heading.Breadcrumb>
          <Heading.Breadcrumb.Item as={Link} pathname={RoutePath.Index}>
            {home?.Title}
          </Heading.Breadcrumb.Item>
          <Heading.Breadcrumb.Item active>
            {faqs?.Title}
          </Heading.Breadcrumb.Item>
        </Heading.Breadcrumb>
      </Heading>
      <Row>
        <Row.Col lg={12}>
          <Row className="justify-content-center mt-3">
            <Row.Col xl={5} lg={8}>
              <div className="text-center">
                <Typography as="h5">{faqs?.Subtitle}</Typography>
                <Typography className="text-muted">
                  {faqs?.Description}
                </Typography>
                <div>
                  <Button
                    as={Link}
                    pathname={RoutePath.ContactUs}
                    variant="primary"
                    className="mt-2 me-2 waves-effect waves-light"
                  >
                    {t('actions.contactUs')}
                  </Button>
                  {social?.X && (
                    <Button
                      as={Link}
                      target="_blank"
                      pathname={social.X}
                      variant="success"
                      className="mt-2 waves-effect waves-light"
                    >
                      {t('actions.sendUsTweet')}
                    </Button>
                  )}
                </div>
              </div>
            </Row.Col>
          </Row>
        </Row.Col>
      </Row>
      <Row>
        <Row.Col lg={12}>
          <Row className="mt-5 gy-4">
            {list.map((item, index) => {
              if (item) {
                return (
                  <Row.Col key={item.Title} xl={4} sm={6}>
                    <Card className="h-100">
                      <Card.Body className="overflow-hidden position-relative">
                        <div>
                          <Icon.Fi
                            size={80}
                            name="help-circle"
                            className="widget-box-1-icon text-primary"
                          />
                        </div>
                        <div className="faq-count">
                          <Typography className="text-primary" as="h5">
                            {padStart(String(index + 1), 2, '0')}.
                          </Typography>
                        </div>
                        <Typography className="mt-3" as="h5">
                          {item.Title}
                        </Typography>
                        <Typography className="text-muted mt-3 mb-0">
                          {item.Description}
                        </Typography>
                      </Card.Body>
                    </Card>
                  </Row.Col>
                );
              }
            })}
          </Row>
        </Row.Col>
      </Row>
    </Fragment>
  );
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Blog',
    description: 'Read this blog post',
  };
};

export default Faq;
