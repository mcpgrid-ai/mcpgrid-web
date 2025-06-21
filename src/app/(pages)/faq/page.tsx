import { Metadata } from 'next';
import { FC, Fragment } from 'react';
import { strapi } from '@network/strapi';

import { Heading, Row } from '@core/uikit';

const Faq: FC = async () => {
  const {
    data: { faqs, pages },
  } = await strapi.page.getFaqs({
    slug: 'faqs',
  });

  const page = pages[0];

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
                  <button
                    type="button"
                    className="btn btn-primary mt-2 me-2 waves-effect waves-light"
                  >
                    Contact Us
                  </button>
                  <button
                    type="button"
                    className="btn btn-success mt-2 waves-effect waves-light"
                  >
                    Send us a tweet
                  </button>
                </div>
              </div>
            </Row.Col>
          </Row>
        </Row.Col>
      </Row>
      <div className="row">
        <div className="col-lg-12">
          <div className="row mt-5">
            {faqs.map((item, index) => {
              if (item) {
                return (
                  <div className="col-xl-4 col-sm-6" key={item.Title}>
                    <div className="card">
                      <div className="card-body overflow-hidden position-relative">
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
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
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
