import { Metadata } from 'next';
import { FC, Fragment } from 'react';
import { strapi } from '@network/strapi';

import { Button, Card, Heading, Row } from '@core/uikit';
import { Link } from '@app/navigation';
import { AppRoutePath } from '@app/common';

const Faq: FC = async () => {
  const {
    data: {
      faqs,
      pages: [page],
    },
  } = await strapi.page.getFaqs({
    slug: 'faqs',
  });

  return (
    <Fragment>
      <Heading>
        <Heading.Title>{page?.Title}</Heading.Title>
      </Heading>
      <Row>
        <Row.Col lg={12}>
          <Row className="justify-content-center mt-3">
            <Row.Col xl={5} lg={8}>
              <div className="text-center">
                <h5>{page?.Subtitle}</h5>
                <p className="text-muted">{page?.Description}</p>
                <div>
                  <Button
                    as={Link}
                    pathname={AppRoutePath.ContactUs}
                    variant="primary"
                    className="mt-2 me-2 waves-effect waves-light"
                  >
                    Contact Us
                  </Button>
                  <Button
                    variant="success"
                    className="mt-2 waves-effect waves-light"
                  >
                    Send us a tweet
                  </Button>
                </div>
              </div>
            </Row.Col>
          </Row>
        </Row.Col>
      </Row>
      <Row>
        <Row.Col lg={12}>
          <Row className="mt-5">
            {faqs.map((item, index) => {
              if (item) {
                return (
                  <Row.Col key={item.Title} xl={4} sm={6}>
                    <Card>
                      <Card.Body className="overflow-hidden position-relative">
                        <div>
                          <i className="bx bx-help-circle widget-box-1-icon text-primary"></i>
                        </div>
                        <div className="faq-count">
                          <h5 className="text-primary">{`0${index + 1}.`}</h5>
                        </div>
                        <h5 className="mt-3">{item.Title}</h5>
                        <p className="text-muted mt-3 mb-0">
                          {item.Description}
                        </p>
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
