import { Metadata } from 'next';
import { FC, Fragment } from 'react';
import { faker } from '@faker-js/faker';

import { Heading, Row } from '@core/uikit';

const getFaqs = async (): Promise<
  {
    id: string;
    title: string;
    description: string;
  }[]
> => {
  return new Promise((resolve) => {
    resolve(
      Array.from({
        length: 9,
      }).map(() => ({
        id: faker.string.uuid(),
        title: faker.lorem.words(3),
        description: faker.lorem.sentences(3),
      })),
    );
  });
};

const Faq: FC = async () => {
  const data = await getFaqs();

  return (
    <Fragment>
      <Heading>
        <Heading.Title>FAQs</Heading.Title>
      </Heading>
      <Row>
        <Row.Col lg={12}>
          <Row className="justify-content-center mt-3">
            <Row.Col xl={5} lg={8}>
              <div className="text-center">
                <h5>Can't find what you are looking for?</h5>
                <p className="text-muted">
                  If several languages coalesce, the grammar of the resulting
                  language is more simple and regular than that of the
                  individual
                </p>
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
            {data.map(({ id, title, description }, index) => {
              return (
                <div className="col-xl-4 col-sm-6" key={id}>
                  <div className="card">
                    <div className="card-body overflow-hidden position-relative">
                      <div>
                        <i className="bx bx-help-circle widget-box-1-icon text-primary"></i>
                      </div>
                      <div className="faq-count">
                        <h5 className="text-primary">{`0${index + 1}.`}</h5>
                      </div>
                      <h5 className="mt-3">{title}</h5>
                      <p className="text-muted mt-3 mb-0">{description}</p>
                    </div>
                  </div>
                </div>
              );
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
